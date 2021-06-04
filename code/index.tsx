import React, { Component } from 'react';

import './style.scss';

const print = function(value) {
  console.log(value);
};
class Page extends Component {
  render() {
    return (
      <div styleName="page" data={{}}>
        <div styleName="item-long-wrapper">
          <img
            styleName="item-long"
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9b9d3900c41d11ebbbfc6373d4af5eb4.png'}
          />
        </div>
        <div styleName="entry-pic-wrapper">
          <img
            styleName="entry-pic"
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9e2a2570c41d11eb8e7fc57c5e7da027.png'}
          />
        </div>
        <div styleName="action-bg-wrapper">
          <img styleName="action-bg" src={this.props.style} />
        </div>
        <div styleName="wrapper-inner">
          {true && (
            <div styleName="group">
              {true && (
                <img
                  styleName="layer"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9c0f82d0c41d11eb9d538dbe64585f34.png'}
                />
              )}
              <div styleName="background-wrapper">
                <img
                  styleName="background"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9c66ca90c41d11eb9ac945095a953d7e.png'}
                />
                <div>
                  <span styleName="desc">嘘！这是一个秘密的行动计划</span>
                  <span styleName="detail">小雨滴老师，儿童节快到了</span>
                  <span styleName="desc-1">我们想邀请您扮演惊喜派送官</span>
                  <span styleName="detail-1">为全班学生颁发“快乐星星奖”</span>
                  <span styleName="tag">我们将在 2021.06.01 9:00</span>
                  <span styleName="desc-2">帮您将这份鼓励发给学生作为节日礼物</span>
                  <span styleName="info">给予ta们快乐和温暖</span>
                </div>
              </div>
            </div>
          )}
          {true && (
            <div styleName="primary">
              <div styleName="button-bg-wrapper">
                <img
                  styleName="button-bg"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9f4643d0c41d11eb906c0f172dc43e8c.png'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Page;
