import React, { useEffect, useMemo } from 'react';
import {
  Icon,
  NavBar,
  Flex,
  WingBlank,
  Carousel,
  Card,
  WhiteSpace,
  Toast,
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
import PhoneBar from '../../components/PhoneBar';
import useAxios from '../../hooks/useLazyAxios';
import { AdminUser, Limit } from '../../types';

type Recommend = {
  data: {
    id: number;
    goods_uuid: string;
    goods_name: string;
    goods_price: string;
    admin_users_name: string;
    admin_users_id: string;
    seller_id: number;
    seller_name: string;
    seller_mobile: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    payment_type: number;
    media_recommend: number;
    media_class: number;
    fans_count: number;
    like_count: number;
    comment_count: number;
    transpond_count: number;
    media_class_name: string;
    cover: string;
    admin_users: AdminUser;
  }[];
};

const WeChatMarketing: React.FC = () => {
  const [queryRecommend, { data: recommend, error, loading }] = useAxios<
    Limit,
    Recommend
  >('getRecommend', {
    limit: 10,
  });

  useEffect(() => {
    queryRecommend();
  }, []);

  const recommendList = useMemo(() => {
    let index = 0;
    let list = [];
    if (recommend?.data) {
      while (index < recommend?.data.length) {
        list.push(recommend.data.slice(index, (index += 2)));
      }
    }
    return list;
  }, [recommend]);

  if (loading) Toast.loading('');

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

        <PhoneBar companyKey="weChatMarketing" />
        <WingBlank className="mt-2">
          <div className="recommend py-2 h-32">
            <Flex direction="column">
              <Flex direction="column" align="center">
                <b className="font-16 text-white ">微信公众号推荐</b>
                <div className="text-gray-300 font-12 font-bold my-1">
                  海量资源，精准投放，提高命中，助企业完成
                </div>
              </Flex>
              <Carousel autoplay infinite>
                {recommendList?.map((d, index) => (
                  <Flex justify="around" className="w-full" key={index}>
                    {d.map((d) => (
                      <Card
                        className="recommendCard overflow-hidden"
                        key={d.id}
                      >
                        <div className="bg-gray-100">
                          <WingBlank className="mb-1">
                            <WhiteSpace />
                            <Flex>
                              <img
                                src={d.cover || weChat}
                                width="18px"
                                height="18px"
                                alt=""
                              />
                              <b className="ml-1">微信公众号</b>
                            </Flex>
                            <WhiteSpace />
                            <b>{d.goods_name}</b>
                            <WhiteSpace />
                            <Flex justify="between">
                              <b className="text-yellow-600 w-4">
                                ￥{d.goods_price}
                              </b>
                              <p className="tag">{d.media_class_name}</p>
                            </Flex>
                          </WingBlank>
                        </div>

                        <WingBlank className="mt-1">
                          <Flex justify="between" className="mb-2">
                            <ListItem
                              title={d.media_recommend}
                              content="公众号类型"
                              contentClassName="contentText"
                            />
                            <ListItem
                              title={d.fans_count}
                              content="粉丝数"
                              contentClassName="contentText"
                            />
                          </Flex>
                          <Flex justify="between">
                            <ListItem
                              title={d.like_count}
                              content="点赞数"
                              contentClassName="contentText"
                            />
                            <ListItem
                              title={d.transpond_count}
                              content="播放量"
                              contentClassName="contentText"
                            />
                          </Flex>
                        </WingBlank>
                      </Card>
                    ))}
                  </Flex>
                ))}
              </Carousel>
            </Flex>
          </div>

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
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 mr-1 h-9">
                <b className="text-blue-600">目标用户数据分析</b>
                <p className="mt-1 text-gray-500">
                  企枣网对公众号设置多达 500个标签
                </p>
              </div>
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 h-9">
                <b className="text-blue-600">大数据匹配账号</b>
                <p className="mt-1 text-gray-500">根据目标用户分析</p>
              </div>
            </Flex>
            <Flex className="mt-1">
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 mr-1 h-9">
                <b className="text-blue-600">文案优化服务</b>
                <p className="mt-1 text-gray-500">
                  根据产品特点提供合理的优 化方案
                </p>
              </div>
              <div className=" bg-gray-200 p-1 rounded-sm flex-1 h-9">
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
