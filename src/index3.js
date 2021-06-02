module.exports = function(schema, option) {
  const {prettier} = option;

  // imports
  const imports = [];

  // inline style
  const style = {};

  // Global Public Functions
  const utils = [];

  // Classes
  const classes = [];

  // 1vw = width / 100
  const _w = option.responsive.width / 100 || 750;

  const isExpression = (value) => {
    return /^\{\{.*\}\}$/.test(value);
  }

  const toString = (value) => {
    if ({}.toString.call(value) === '[object Function]') {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'object') {
      return JSON.stringify(value, (key, value) => {
        if (typeof value === 'function') {
          return value.toString();
        } else {
          return value;
        }
      })
    }

    return String(value);
  };

  // convert to responsive unit, such as vw
  const parseStyle = (style) => {
    for (let key in style) {
      switch (key) {
        case 'fontSize':
        case 'marginTop':
        case 'marginBottom':
        case 'paddingTop':
        case 'paddingBottom':
        case 'height':
        case 'top':
        case 'bottom':
        case 'width':
        case 'maxWidth':
        case 'left':
        case 'right':
        case 'paddingRight':
        case 'paddingLeft':
        case 'marginLeft':
        case 'marginRight':
        case 'lineHeight':
        case 'borderBottomRightRadius':
        case 'borderBottomLeftRadius':
        case 'borderTopRightRadius':
        case 'borderTopLeftRadius':
        case 'borderRadius':
          style[key] = (parseInt(style[key]) / _w).toFixed(2) + 'vw';
          break;
      }
    }

    return style;
  }

  // flexDirection -> flex-direction
  const parseCamelToLine = (string) => {
    return string
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase();
  };

  // className structure support
  const generateScss = (schema) => {
    let scss = '';

    function walk(json) {
      if (json.props.className) {
        let className = json.props.className;

        scss += `.${className} {`;

        for (let key in style[className]) {
          scss += `${parseCamelToLine(key)}: ${style[className][key]};\n`;
        }
      }

      // 递归遍历
      if (json.children && json.children.length > 0) {
        json.children.forEach((child) => walk(child));
      }

      if (json.props.className) {
        scss += '}';
      }
    }

    walk(schema);

    return scss;
  };

  // parse function, return params and content
  const parseFunction = (func) => {
    const funcString = func.toString();
    const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
    const content = funcString.slice(funcString.indexOf('{') + 1, funcString.lastIndexOf('}'));
    return {
      params,
      content
    };
  }

  // parse layer props(static values or expression)
  const parseProps = (value, isReactNode) => {
    if (typeof value === 'string') {
      if (isExpression(value)) {
        if (isReactNode) {
          return value.slice(1, -1);
        } else {
          return value.slice(2, -2);
        }
      }

      if (isReactNode) {
        return value;
      } else {
        return `'${value}'`;
      }
    } else if (typeof value === 'function') {
      const {params, content} = parseFunction(value);
      return `(${params}) => {${content}}`;
    }
  }

  // parse async dataSource
  const parseDataSource = (data) => {
    const name = data.id;
    const {uri, method, params} = data.options;
    const action = data.type;
    let payload = {};

    switch (action) {
      case 'fetch':
        if (imports.indexOf(`import {fetch} from whatwg-fetch`) === -1) {
          imports.push(`import {fetch} from 'whatwg-fetch'`);
        }
        payload = {
          method: method
        };

        break;
      case 'jsonp':
        if (imports.indexOf(`import {fetchJsonp} from fetch-jsonp`) === -1) {
          imports.push(`import jsonp from 'fetch-jsonp'`);
        }
        break;
    }

    Object.keys(data.options).forEach((key) => {
      if (['uri', 'method', 'params'].indexOf(key) === -1) {
        payload[key] = toString(data.options[key]);
      }
    });

    // params parse should in string template
    if (params) {
      payload = `${toString(payload).slice(0, -1)} ,body: ${isExpression(params) ? parseProps(params) : toString(params)}}`;
    } else {
      payload = toString(payload);
    }

    let result = `{
      ${action}(${parseProps(uri)}, ${toString(payload)})
        .then((response) => response.json())
    `;

    if (data.dataHandler) {
      const { params, content } = parseFunction(data.dataHandler);
      result += `.then((${params}) => {${content}})
        .catch((e) => {
          console.log('error', e);
        })
      `
    }

    result += '}';

    return `${name}() ${result}`;
  }

  // parse condition: whether render the layer
  const parseCondition = (condition, render) => {
    if (typeof condition === 'boolean') {
      return `${condition} && ${render}`
    } else if (typeof condition === 'string') {
      return `${condition.slice(2, -2).replace('this.','')} && ${render}`
    }
  }

  // parse loop render
  const parseLoop = (loop, loopArg, render) => {
    let data;
    let loopArgItem = (loopArg && loopArg[0]) || 'item';
    let loopArgIndex = (loopArg && loopArg[1]) || 'index';

    if (Array.isArray(loop)) {
      data = toString(loop);
    } else if (isExpression(loop)) {
      data = loop.slice(2, -2);
    }

    // add loop key
    const tagEnd = render.match(/^<.+?\s/)[0].length;
    render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(tagEnd)}`;

    // remove `this`
    const re = new RegExp(`this.${loopArgItem}`, 'g')
    render = render.replace(re, loopArgItem);

    return `${data.replace('this.','')}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`;
  }

  // generate render xml
  const generateRender = (schema) => {
    const type = schema.componentName.toLowerCase();
    const className = schema.props && schema.props.className;
    const classString = className ? ` styleName='${className}'` : '';

    if (className) {
      style[className] = parseStyle(schema.props.style);
    }

    let xml;
    let props = '';

    Object.keys(schema.props).forEach((key) => {
      if (['className', 'style', 'text', 'src'].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }
    })

    switch(type) {
      case 'text':
        const innerText = parseProps(schema.props.text, true).replace('this.', '');
        xml = `<span${classString}${props}>${innerText}</span>`;
        break;
      case 'image':
        const source = parseProps(schema.props.src).replace('this.', '');
        xml = `<img${classString}${props} src={${source}} />`;
        break;
      case 'div':
      case 'page':
      case 'block':
        if (schema.children && schema.children.length) {
          xml = `<div${classString}${props}>${transform(schema.children)}</div>`;
        } else {
          xml = `<div${classString}${props} />`;
        }
        break;
    }

    if (schema.loop) {
      xml = parseLoop(schema.loop, schema.loopArgs, xml)
    }
    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    if (schema.loop || schema.condition) {
      xml = `{${xml}}`;
    }

    return xml;
  }

  // 自定义组件名或者根据时间戳命名
  const customComponentName = schema.customComponentName || `customComponentName`;

  // parse schema
  const transform = (schema) => {
    let result = '';

    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        result += transform(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();

      if (['page', 'block'].indexOf(type) !== -1) {
        // 容器组件处理: state/method/dataSource/lifeCycle/render
        const states = [];
        const lifeCycles = [];
        const methods = [];
        const render = [`return (\n`];
        let classData = [`const ${customComponentName}:React.FC<${customComponentName}Props> = ({}) => { \n`];

        if (schema.state) {
          states.push(`const state = ${toString(schema.state)}`);
        }

        if (schema.methods) {
          Object.keys(schema.methods).forEach((name) => {
            const { params, content } = parseFunction(schema.methods[name]);
            methods.push(`const ${name} = (${params}) => {${content}}`);
          });
        }

        if (schema.lifeCycles) {
          // 只支持componentDidMount - componentWillUnmount 这两个生命周期
          if (Object.keys(schema.lifeCycles).includes('componentDidMount')) {
            const componentDidMount = parseFunction(schema.lifeCycles['componentDidMount']);
            const componentWillUnmount = parseFunction(schema.lifeCycles['componentWillUnmount']);
            lifeCycles.push(`useEffect(() => {${componentDidMount.content}
              \n
              return () => {${componentWillUnmount.content}}
              },[])`);
          }
        }

        render.push(generateRender(schema))
        render.push(`)`);

        classData = classData.concat(states).concat(lifeCycles).concat(methods).concat(render);
        classData.push('}');

        classes.push(classData.join('\n'));
      } else {
        result += generateRender(schema);
      }
    }

    return result;
  };

  console.log(option,'option')
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // start parse schema
  transform(schema);

  const prettierOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true
  };

  return {
    panelDisplay: [
      {
        panelName: `index.tsx`,
        panelValue: prettier.format(`
          import React, { useState, useEffect } from 'react';
          ${imports.join('\n')}
          import './style.scss';

          interface ${customComponentName}Props {}
          ${utils.join('\n')}
          ${classes.join('\n')}
          export default ${customComponentName};
        `, prettierOpt),
        panelType: 'ts',
      },
      {
        panelName: `style.scss`,
        panelValue: prettier.format(generateScss(schema, style), {
          parser: 'scss'
        }),
        panelType: 'scss'
      }
    ],
    noTemplate: true
  };
}
