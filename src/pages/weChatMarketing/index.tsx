import React from 'react';

import {
  Icon,
  NavBar,
  Flex,
  InputItem,
  Button,
  WingBlank,
  Carousel,
  Card,
  WhiteSpace,
} from 'antd-mobile';
import cover from '../../assets/images/公众转让.png';
import weChat from '../../assets/images/weChat.png';
import icon34 from '../../assets/images/编组 34@2x.png';
import icon35 from '../../assets/images/编组 35@2x.png';
import icon36 from '../../assets/images/编组 36@2x.png';
import icon37 from '../../assets/images/编组 37@2x.png';
import icon39 from '../../assets/images/编组 39@2x.png';

import './index.css';
import ListItem from '../../components/List/LIstItem';
import CompanyProfile from '../../components/CompanyProfile';

const WeChatMarketing: React.FC = () => {
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" color="#fff" />}
        style={{ background: '#4868DC', marginBottom: '40px' }}
        className="fixed w-full z-20"
        height="40px"
      >
        <span className="text-white">微信营销</span>
      </NavBar>

      <div style={{ paddingTop: '40px' }}>
        <img src={cover} height="178px" />
        <Flex justify="around" direction="column" className="h-20">
          <Flex
            className="w-18"
            justify="center"
            align="center"
            direction="column"
          >
            <h2 className="font-16">全国范围免费找资质/公司</h2>
            <Flex justify="between" className="w-full font-12 mt-2">
              <Flex align="center">
                <input type="radio" value="找公司" name="company"></input>找公司
              </Flex>
              <Flex align="center">
                <input
                  type="radio"
                  value="找带资质的公司"
                  name="company"
                ></input>
                找带资质的公司
              </Flex>
            </Flex>
          </Flex>
          <Flex className="h-4">
            <InputItem
              placeholder="填写您的电话号，我们立即联系您！"
              className="bg-gray-50"
            />
            <Button className="button-query">立即查找</Button>
          </Flex>
          <div>60分钟 187****4766 发布了</div>
          <hr></hr>
        </Flex>
        <WingBlank>
          <Carousel className="recommend py-2" autoplay={false} infinite>
            <Flex direction="column">
              <Flex direction="column" align="center">
                <b className="font-16 text-white ">微信公众号推荐</b>
                <div className="text-gray-300 font-12 font-bold my-1">
                  海量资源，精准投放，提高命中，助企业完成
                </div>
              </Flex>

              <Flex justify="around" className="w-full">
                <Card className="recommendCard">
                  <WingBlank>
                    <WhiteSpace />
                    <Flex>
                      <img src={weChat} width="18px" height="18px" />
                      <b className="ml-1">微信公众号</b>
                    </Flex>
                    <WhiteSpace />
                    <b>17年注册企业服务号，粉丝2.4W+视</b>
                    <WhiteSpace />
                    <Flex justify="between">
                      <b className="text-yellow-600">¥2.50万</b>
                      <b className="tag">情感生活</b>
                    </Flex>
                    <WhiteSpace />
                    <Flex justify="between">
                      <ListItem
                        title="服务号"
                        content="公众号类型"
                        contentClassName="contentText"
                      />
                      <ListItem
                        title="2.60W+"
                        content="粉丝数"
                        contentClassName="contentText"
                      />
                    </Flex>
                    <WhiteSpace />
                    <Flex justify="between">
                      <ListItem
                        title="均衡"
                        content="粉丝数"
                        contentClassName="contentText"
                      />
                      <ListItem
                        title="2.60W+"
                        content="播放量"
                        contentClassName="contentText"
                      />
                    </Flex>
                  </WingBlank>
                </Card>
                <Card className="recommendCard">
                  <WingBlank>
                    <WhiteSpace />
                    <Flex>
                      <img src={weChat} width="18px" height="18px" />
                      <b className="ml-1">微信公众号</b>
                    </Flex>
                    <WhiteSpace />
                    <b>17年注册企业服务号，粉丝2.4W+视</b>
                    <WhiteSpace />
                    <Flex justify="between">
                      <b className="text-yellow-600">¥2.50万</b>
                      <b className="tag">情感生活</b>
                    </Flex>
                    <WhiteSpace />
                    <Flex justify="between">
                      <ListItem
                        title="服务号"
                        content="公众号类型"
                        contentClassName="contentText"
                      />
                      <ListItem
                        title="2.60W+"
                        content="粉丝数"
                        contentClassName="contentText"
                      />
                    </Flex>
                    <WhiteSpace />
                    <Flex justify="between">
                      <ListItem
                        title="均衡"
                        content="粉丝数"
                        contentClassName="contentText"
                      />
                      <ListItem
                        title="2.60W+"
                        content="播放量"
                        contentClassName="contentText"
                      />
                    </Flex>
                  </WingBlank>
                </Card>
              </Flex>
            </Flex>
          </Carousel>
          <div className="my-3">
            <div className="title text-center mb-3">投放效果实时监控优化</div>
            <Flex justify="between">
              <ListItem
                title={<img src={icon34} width="48px" height="48px" />}
                content="曝光数据"
              />
              <ListItem
                title={<img src={icon35} width="48px" height="48px" />}
                content="点击数据"
              />
              <ListItem
                title={<img src={icon36} width="48px" height="48px" />}
                content="互动数据"
              />
              <ListItem
                title={<img src={icon37} width="48px" height="48px" />}
                content="分享数据"
              />
              <ListItem
                title={<img src={icon39} width="48px" height="48px" />}
                content="定制数据"
              />
            </Flex>
          </div>
          <div>
            <div className="title text-center mb-1">微信营销一站式服务</div>
            <Flex>
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 mr-1 h-8">
                <b className="text-blue-600">目标用户数据分析</b>
                <p className="mt-1 text-gray-500">
                  企枣网对公众号设置多达 500个标签
                </p>
              </div>
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 h-8">
                <b className="text-blue-600">大数据匹配账号</b>
                <p className="mt-1 text-gray-500">根据目标用户分析</p>
              </div>
            </Flex>
            <Flex className="mt-1">
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 mr-1 h-8">
                <b className="text-blue-600">文案优化服务</b>
                <p className="mt-1 text-gray-500">
                  根据产品特点提供合理的优 化方案
                </p>
              </div>
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 h-8">
                <b className="text-blue-600">售后保障</b>
                <p className="mt-1 text-gray-500">优质服务 一对一免费咨询</p>
              </div>
            </Flex>
          </div>
          <CompanyProfile />
        </WingBlank>
      </div>
    </div>
  );
};

export default WeChatMarketing;
