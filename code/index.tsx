import React, { Component } from 'react';

import './style.css';

const print = function(value) {
  console.log(value);
};
class Page extends Component {
  render() {
    return (
      <div className="page">
        <div className="group">
          <div className="block">
            <div className="container">
              <div className="horizontal-line" />
            </div>
            <div className="container-1">
              <div className="container-inner">
                <div className="empty" />
                <div className="wrapper">
                  <div className="horizontal-line-1" />
                </div>
              </div>
              <div className="container-inner-1">
                <div className="wrapper-1">
                  <div className="wrapper-inner">
                    <div className="mask" />
                    <div className="group-1">
                      <span className="tag">空白</span>
                      <div className="tag-wrapper">
                        <span className="tag-1">更改布局</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-2">
                  <div className="horizontal-line-2" />
                </div>
              </div>
              <div className="container-inner-2">
                <span className="label">背景</span>
                <div className="wrapper-3">
                  <div className="layer" />
                  <img
                    className="dot"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bd355420c37911eb906c0f172dc43e8c.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bd355420c37911eb906c0f172dc43e8c.png 3x"
                  />
                </div>
              </div>
              <div className="container-inner-3">
                <div className="mask-1" />
                <div className="wrapper-4">
                  <div className="wrapper-inner-1">
                    <div className="group-2">
                      <img
                        className="icon"
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bcea8f80c37911eb9ac945095a953d7e.png'}
                        srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bcea8f80c37911eb9ac945095a953d7e.png 3x"
                      />
                    </div>
                    <span className="more">更多背景</span>
                  </div>
                  <div className="tag-wrapper-1">
                    <span className="tag-2">本地图片</span>
                  </div>
                </div>
              </div>
              <div className="tag-wrapper-2">
                <span className="tag-3">更改布局</span>
              </div>
            </div>
          </div>
          <div className="block-1">
            <img
              className="vertical-line"
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b7ac65c0c37911eb9ac945095a953d7e.png'}
              srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b7ac65c0c37911eb9ac945095a953d7e.png 3x"
            />
            <div className="container-2">
              <div className="container-inner-4">
                <div className="wrapper-5">
                  <img
                    className="logo"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b854b3b0c37911ebbfa0e57cbbeae9d6.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b854b3b0c37911ebbfa0e57cbbeae9d6.png 3x"
                  />
                  <img
                    className="logo-1"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b8f141d0c37911eb9521ebfe9b70a3e4.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b8f141d0c37911eb9521ebfe9b70a3e4.png 3x"
                  />
                  <img
                    className="icon-add"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b8a56bc0c37911eb906c0f172dc43e8c.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b8a56bc0c37911eb906c0f172dc43e8c.png 3x"
                  />
                  <span className="location">新建页面</span>
                </div>
                <div className="wrapper-i0">
                  <span className="num">98</span>
                  <div className="overlayer" />
                </div>
                <div className="wrapper-i1">
                  <span className="num-1">99</span>
                  <div className="layer-1" />
                </div>
                <div className="wrapper-i2">
                  <span className="num-2">100</span>
                  <div className="mask-2" />
                </div>
                <div className="wrapper-i3">
                  <span className="num-3">101</span>
                  <div className="overlayer-1" />
                </div>
                <div className="wrapper-6">
                  <div className="wrapper-inner-2">
                    <div className="group-3">
                      <span className="num-4">102</span>
                      <span className="num-5">103</span>
                      <span className="num-6">104</span>
                    </div>
                    <div className="group-4">
                      <div className="layer-2" />
                      <div className="mask-3" />
                      <div className="overlayer-2" />
                    </div>
                  </div>
                  <div className="wrapper-inner-3">
                    <div className="vertical-line-1" />
                  </div>
                </div>
                <div className="wrapper-i4">
                  <span className="num-7">105</span>
                  <div className="mask-4" />
                </div>
                <div className="wrapper-i5">
                  <span className="num-8">106</span>
                  <div className="overlayer-3" />
                </div>
                <div className="wrapper-i6">
                  <span className="num-9">107</span>
                  <div className="layer-3" />
                </div>
                <div className="wrapper-i7">
                  <span className="num-10">108</span>
                  <div className="mask-5" />
                </div>
                <div className="wrapper-i8">
                  <span className="num-11">109</span>
                  <div className="overlayer-4" />
                </div>
              </div>
            </div>
            <div className="container-3">
              <img
                className="vertical-line-2"
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b93db420c37911eb9ac945095a953d7e.png'}
                srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b93db420c37911eb9ac945095a953d7e.png 3x"
              />
            </div>
          </div>
          <div className="header">
            <div className="container-4">
              <div className="container-inner-5">
                <img
                  className="dot-1"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bc4c53b0c37911eb8e7fc57c5e7da027.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bc4c53b0c37911eb8e7fc57c5e7da027.png 3x"
                />
              </div>
              <div className="container-inner-6">
                <div className="wrapper-7">
                  <img
                    className="figure"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bb50dcb0c37911eba211d1bbb8f93b91.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bb50dcb0c37911eba211d1bbb8f93b91.png 3x"
                  />
                  <img
                    className="icon-house"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bba146a0c37911ebac35ebc66b1ea3b3.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bba146a0c37911ebac35ebc66b1ea3b3.png 3x"
                  />
                </div>
                <img
                  className="dot-2"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bb07c5c0c37911eb9d57dbc76e861f48.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bb07c5c0c37911eb9d57dbc76e861f48.png 3x"
                />
                <img
                  className="vertical-line-3"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bab81f20c37911eba01283e92c4c1de1.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bab81f20c37911eba01283e92c4c1de1.png 3x"
                />
              </div>
              <img
                className="large-icon"
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bbf88e60c37911eb8e7fc57c5e7da027.png'}
                srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bbf88e60c37911eb8e7fc57c5e7da027.png 3x"
              />
            </div>
            <span className="info">小蝌蚪找妈妈</span>
            <div className="container-5">
              <div className="container-inner-7">
                <div className="icon-computer-wrapper">
                  <img
                    className="icon-computer"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c10e6fa0c37911eb8e7fc57c5e7da027.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c10e6fa0c37911eb8e7fc57c5e7da027.png 3x"
                  />
                </div>
                <span className="word">客户端</span>
              </div>
              <div className="container-inner-8">
                <img
                  className="icon-1"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ba2b9690c37911ebbfa0e57cbbeae9d6.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ba2b9690c37911ebbfa0e57cbbeae9d6.png 3x"
                />
                <div className="vertical-line-4" />
                <img
                  className="icon-search"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ba6df6c0c37911eb9b87e33f47bff826.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ba6df6c0c37911eb9b87e33f47bff826.png 3x"
                />
              </div>
            </div>
          </div>
          <div className="body">
            <span className="tag-4">布局与背景</span>
            <img
              className="divider"
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bc98c600c37911ebb52fdfd9d6c14028.png'}
              srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bc98c600c37911ebb52fdfd9d6c14028.png 3x"
            />
            <div className="container-6">
              <img
                className="icon-2"
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be3278d0c37911ebb52fdfd9d6c14028.png'}
                srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be3278d0c37911ebb52fdfd9d6c14028.png 3x"
              />
              <span className="label-1">动画</span>
              <div className="container-inner-i0">
                <div className="wrapper-i0-1">
                  <div className="icon-text-wrapper">
                    <img
                      className="icon-text"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bf69e760c37911eb8e7fc57c5e7da027.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bf69e760c37911eb8e7fc57c5e7da027.png 3x"
                    />
                  </div>
                  <span className="address">新建课</span>
                </div>
                <div className="wrapper-i1-1">
                  <div className="icon-text-wrapper-1">
                    <img
                      className="icon-text-1"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bfbb14a0c37911ebb52fdfd9d6c14028.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bfbb14a0c37911ebb52fdfd9d6c14028.png 3x"
                    />
                  </div>
                  <span className="word-1">同步</span>
                </div>
                <div className="wrapper-8">
                  <div className="wrapper-inner-4">
                    <img
                      className="dot-3"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bedfcfd0c37911eb9521ebfe9b70a3e4.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bedfcfd0c37911eb9521ebfe9b70a3e4.png 3x"
                    />
                  </div>
                  <span className="tag-5">开始授课</span>
                </div>
              </div>
              <div className="container-inner-i1">
                <div className="col-i0">
                  <div className="icon-text-wrapper-2">
                    <img
                      className="icon-text-2"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bf1d26f0c37911eb906c0f172dc43e8c.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bf1d26f0c37911eb906c0f172dc43e8c.png 3x"
                    />
                  </div>
                  <span className="label-2">文字</span>
                </div>
                <div className="col-i1">
                  <div className="icon-text-wrapper-3">
                    <img
                      className="icon-text-3"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c00c68f0c37911eb999e55b5e091e247.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c00c68f0c37911eb999e55b5e091e247.png 3x"
                    />
                  </div>
                  <span className="word-2">形状</span>
                </div>
                <div className="col-i2">
                  <div className="icon-text-wrapper-4">
                    <img
                      className="icon-text-4"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c0675a30c37911ebbbfc6373d4af5eb4.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c0675a30c37911ebbbfc6373d4af5eb4.png 3x"
                    />
                  </div>
                  <span className="tag-6">多媒体</span>
                </div>
                <div className="col-i3">
                  <div className="icon-text-wrapper-5">
                    <img
                      className="icon-text-5"
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c0bfda70c37911eb906c0f172dc43e8c.png'}
                      srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c0bfda70c37911eb906c0f172dc43e8c.png 3x"
                    />
                  </div>
                  <span className="label-3">思维导</span>
                </div>
              </div>
              <div className="container-inner-9">
                <div className="horizontal-line-3" />
                <div className="wrapper-9">
                  <div className="horizontal-line-4" />
                </div>
                <div className="icon-setup-wrapper">
                  <img
                    className="icon-setup"
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be8505a0c37911eba8ca9d029b8fc4ba.png'}
                    srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be8505a0c37911eba8ca9d029b8fc4ba.png 3x"
                  />
                </div>
                <span className="word-3">属性</span>
              </div>
            </div>
            <div className="container-7">
              <div className="container-inner-10">
                <img
                  className="icon-3"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bdd14600c37911eba294ab61b96a5710.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bdd14600c37911eba294ab61b96a5710.png 3x"
                />
              </div>
            </div>
            <div className="container-8">
              <div className="horizontal-line-5" />
            </div>
            <div className="horizontal-line-6" />
            <div className="container-9">
              <div className="container-inner-11">
                <div className="overlayer-5" />
              </div>
              <div className="container-inner-12">
                <img
                  className="vertical-line-5"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bd87b9e0c37911eb9d57dbc76e861f48.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/bd87b9e0c37911eb9d57dbc76e861f48.png 3x"
                />
              </div>
            </div>
          </div>
          <img
            className="divider-1"
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b9965b70c37911eba294ab61b96a5710.png'}
            srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b9965b70c37911eba294ab61b96a5710.png 3x"
          />
          <div className="block-2">
            <span className="meta">课件 第 1 页，共 300 页</span>
            <div className="container-10">
              <span className="percent">70%</span>
              <img
                className="dot-4"
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b9ed7c20c37911eb9d57dbc76e861f48.png'}
                srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b9ed7c20c37911eb9d57dbc76e861f48.png 3x"
              />
            </div>
          </div>
          <div className="block-3">
            <div className="horizontal-line-7" />
          </div>
          <div className="block-4">
            <div className="container-11">
              <div className="container-inner-13">
                <img
                  className="icon-4"
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be3278d0c37911ebb52fdfd9d6c14028.png'}
                  srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/be3278d0c37911ebb52fdfd9d6c14028.png 3x"
                />
                <span className="subtitle">更丰富的体验</span>
              </div>
              <div className="container-inner-14">
                <span className="tag-7">动画</span>
                <span className="info-1">请下载客户端</span>
              </div>
              <span className="label-4">(目前仅支持windows)</span>
            </div>
            <img
              className="logo-2"
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c14f4930c37911eb9521ebfe9b70a3e4.png'}
              srcSet="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/c14f4930c37911eb9521ebfe9b70a3e4.png 3x"
            />
            <div className="container-12">
              <div className="horizontal-line-8" />
              <span className="word-4">打开客户端</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Page;
