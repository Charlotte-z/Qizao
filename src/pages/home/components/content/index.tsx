import React, { useRef, useState } from 'react';
import './index.css';
import CompanyIcon from '../../../../assets/images/企业公司@2x.png';
import ServiceIcon from '../../../../assets/images/证书资质@2x.png';
import SaleIcon from '../../../../assets/images/图书知识库@2x.png';
import AboutIcon from '../../../../assets/images/专家人才@2x.png';
import ThumpIcon from '../../../../assets/images/编组@2x.png';
import HotIcon from '../../../../assets/images/火苗@2x.png';
import ProfessionIcon from '../../../../assets/images/专业 专业课@2x.png';
import FreeIcon from '../../../../assets/images/免费 (1)@2x.png';
import MakeSureIcon from '../../../../assets/images/保障@2x.png';
import QueryIcon from '../../../../assets/images/流转查询@2x.png';
import PhoneIcon from '../../../../assets/images/电话 2@2x.png';

import { InputItem, Tabs, Toast } from 'antd-mobile';
import CompanyItem from '../../../../components/CompanyItem';
import { useRequest } from 'ahooks';
import axios from 'axios';
import Input from 'antd-mobile/lib/input-item/Input';

const companyFakeIcon = () => {
  return (
    <div
      className="h-6 w-6 flex justify-center items-center"
      style={{ background: '#EFF5FF' }}
    >
      <div className="text-xs" style={{ color: '#4B82DF' }}>
        琼
      </div>
    </div>
  );
};

export const SearchSection = () => {
  return (
    <div className="sz">
      <div className="flex justify-center mt-2">
        <h1 style={{ fontSize: 18 }}>全国范围免费找资质/公司</h1>
      </div>
      <div className="flex justify-center mt-1">
        <div>
          <input
            type="radio"
            id="normal"
            name="drone"
            value="huey"
            className="mr-1"
          />
          <label htmlFor="normal">找公司</label>
        </div>

        <div>
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            className="mx-1"
          />
          <label htmlFor="huey">找带资质的公司</label>
        </div>
      </div>

      <div className="searWrapper flex justify-center mt-2">
        <InputItem
          className="inputItem"
          placeholder="填写您的电话号，我们立即联系您！"
        />
        <div className="search flex justify-center items-center">
          <span>立即查找</span>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <span>60分钟 187****4766 发布了北京****金融有限公司</span>
      </div>
    </div>
  );
};

const scrollItems: Array<{
  img: string;
  title: string;
}> = [
  { img: CompanyIcon, title: '公司转让' },
  { img: ServiceIcon, title: '资质服务' },
  { img: SaleIcon, title: '微信营销' },
  { img: AboutIcon, title: '关于我们' },
];

const companyDetail: Array<{
  Icon: any;
  price: string;
  fans: string;
  name: string;
  description: string;
  startDate: number;
  registrationMoney: string;
  location: string;
}> = [
  {
    Icon: companyFakeIcon,
    price: '1.88万',
    fans: '98',
    name: '海南**网络科技有限公司',
    description: '公司干净无异常，随时转',
    startDate: 2015,
    registrationMoney: '100-500万',
    location: '华东地区',
  },
  {
    Icon: companyFakeIcon,
    price: '1.88万',
    fans: '98',
    name: '海南**网络科技有限公司',
    description: '公司干净无异常，随时转',
    startDate: 2015,
    registrationMoney: '100-500万',
    location: '华东地区',
  },
];

const Content = () => {
  const phoneNumber = useRef<string>('');
  const type = useRef<any>();
  const IconList = () => (
    <div className="flex justify-evenly">
      {scrollItems.map((scrollItem, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <img className="scrollItem" src={scrollItem.img} alt="" />
          <span>{scrollItem.title}</span>
        </div>
      ))}
    </div>
  );

  const SearchSection = () => {
    return (
      <div className="sz">
        <div className="flex justify-center mt-2">
          <h1 style={{ fontSize: 20 }}>全国范围免费找资质/公司</h1>
        </div>
        <div className="flex justify-center mt-1 ">
          <div onClick={() => (type.current = 1)} className="flex items-center">
            <input type="radio" id="huey" name="drone" value="huey" />
            <label>找公司</label>
          </div>

          <div onClick={() => (type.current = 2)} className="flex items-center">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              className="ml-4"
            />
            <label>找带资质的公司</label>
          </div>
        </div>

        <div className="searWrapper flex justify-center mt-2">
          <Input
            className="inputItem"
            placeholder="填写您的电话号，我们立即联系您！"
            onChange={(value: any) => {
              phoneNumber.current = value.target.value;
            }}
          />
          <div
            className="search flex justify-center items-center"
            onClick={async () => {
              try {
                await axios({
                  method: 'post',
                  url: 'https://api.7zaowang.com/index.php/api/telephoneMessage',
                  data: {
                    name: '',
                    phone: phoneNumber.current,
                    message_type: type.current,
                  },
                });
                Toast.info('提交成功!');
              } catch (e) {
                Toast.info('请输入电话和查找公司类型！');
              }
            }}
          >
            <span>立即查找</span>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <span>60分钟 187****4766 发布了北京****金融有限公司</span>
        </div>
      </div>
    );
  };

  const CompanyDetailItems = () => {
    return (
      <div className="flex overflow-auto pt-2">
        {companyDetail.map((detail, index) => {
          return (
            <div
              key={index}
              style={{ border: '1px solid #EDEDED' }}
              className="py2  ml-1"
            >
              <div className="h-7 inline-flex">
                {/* <img src={detail.Icon} alt="" /> */}
                {detail.Icon()}
                <div className="flex flex-col justify-around ml-1">
                  <div className="flex w-16">
                    <div style={{ flex: 0.8 }}>
                      <span style={{ color: '#BE3E49', fontSize: 14 }}>
                        ¥<span style={{ fontSize: 18 }}>{detail.price}</span>
                      </span>
                    </div>
                    <div style={{ flex: 0.2 }}>
                      <div
                        style={{ background: '#DF3A26' }}
                        className="h-2 w-8 flex justify-center items-center"
                      >
                        <div style={{ color: 'white', fontSize: 8 }}>
                          立即查看
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>已有{detail.fans}关注过该公司</span>
                  </div>
                </div>
              </div>

              <div className="mt-1 mb-1">{detail.name}</div>
              <div
                className="mt-1 mb-1"
                style={{ color: '#2A2A2A', fontSize: 14 }}
              >
                {detail.description}
              </div>
              <div className="flex">
                <div className="flex flex-col justify-center items-center">
                  <div style={{ fontSize: 14 }}>{detail.startDate}年</div>
                  <div style={{ color: '#9E9E9E' }}>成立日期</div>
                </div>
                <div
                  className="mx-1"
                  style={{
                    height: '37px',
                    width: '1px',
                    background: '#E8E8E8',
                  }}
                />
                <div className="flex flex-col justify-center items-center">
                  <div style={{ fontSize: 14 }}>{detail.registrationMoney}</div>
                  <div style={{ color: '#9E9E9E' }}>注册资本</div>
                </div>
                <div
                  className="mx-1"
                  style={{
                    height: '37px',
                    width: '1px',
                    background: '#E8E8E8',
                  }}
                />
                <div className="flex flex-col justify-center items-center">
                  <div style={{ fontSize: 14 }}>{detail.location}</div>
                  <div style={{ color: '#9E9E9E' }}>公司所在地</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const Concentration = () => {
    return (
      <>
        <div
          style={{ height: '1px', background: '#F1F1F1' }}
          className="px-4 mt-2 mb-1"
        />
        <CompanyItem icon={ThumpIcon} title="精选公司" />
        <CompanyDetailItems />
      </>
    );
  };

  const Hots: Array<{
    name: string;
    description: string;
    location: string;
    date: string;
    money: string;
    size: string;
  }> = [
    {
      name: '厦门**检测设备有限公司',
      description: '带安保服务许可证',
      location: '华北地区',
      date: '2015年',
      money: '100-150万',
      size: '小规模',
    },
    {
      name: '厦门**检测设备有限公司',
      description: '带安保服务许可证',
      location: '华北地区',
      date: '2015年',
      money: '100-150万',
      size: '小规模',
    },
    {
      name: '厦门**检测设备有限公司',
      description: '带安保服务许可证',
      location: '华北地区',
      date: '2015年',
      money: '100-150万',
      size: '小规模',
    },
    {
      name: '厦门**检测设备有限公司',
      description: '带安保服务许可证',
      location: '华北地区',
      date: '2015年',
      money: '100-150万',
      size: '小规模',
    },
  ];

  const Hot = () => {
    return (
      <div className="hot">
        <CompanyItem icon={HotIcon} title="热门公司" />
        <Tabs
          tabs={[
            { title: <span style={{ fontSize: 14 }}>热搜公司</span> },
            { title: <span style={{ fontSize: 14 }}>热搜资质</span> },
          ]}
          initialPage={0}
          useOnPan={true}
        >
          <div
            style={{
              overflow: 'none',
              display: 'flex flex-col',
              height: '150px',
              backgroundColor: '#fff',
            }}
          >
            {Hots.map((h, index) => {
              return (
                <div key={index} className="h-10  flex w-full p-1 mt-2">
                  <div
                    className="h-10 w-10 rounded flex justify-center items-center"
                    style={{ background: '#EFF5FF' }}
                  >
                    <div className="text-xs" style={{ color: '#4B82DF' }}>
                      琼
                    </div>
                  </div>
                  <div className="ml-1">
                    <div className="flex flex-row justify-evenly h-2">
                      <div>{h.name}</div>
                      <div
                        className="border  w-5 ml-4 h-2 flex justify-center"
                        style={{
                          color: '#4B82DF',
                          borderColor: '#4B82DF',
                          borderRadius: 8,
                        }}
                      >
                        刚刚
                      </div>
                    </div>
                    <div style={{ marginTop: '1px' }}>{h.description}</div>
                    <div
                      className="flex"
                      style={{ color: '#9E9E9E', fontSize: 14 }}
                    >
                      <div className="mt-2">
                        <div>{h.location}</div>
                        <div>{h.date}</div>
                      </div>
                      <div className="mt-2 ml-1">
                        <div>{h.money}</div>
                        <div>{h.size}</div>
                      </div>
                      <div
                        className="flex flex-col justify-end ml-3"
                        style={{ color: '#BE3E49' }}
                      >
                        <div>
                          <span>¥</span>
                          <span style={{ fontSize: 22 }}>7000</span>
                        </div>
                        <div>已有45人围观过</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Tabs>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div>
        <div>
          <div className="flex justify-evenly mt-2">
            <div>
              <div className="flex items-center">
                <img
                  className="h-3"
                  style={{ border: '1px dashed #9D9D9D' }}
                  src={ProfessionIcon}
                  alt=""
                />
                <div className="ml-1">2000+专业咨询师</div>
              </div>

              <div className="flex items-center mt-2">
                <img
                  className="h-3"
                  style={{ border: '1px dashed #9D9D9D' }}
                  src={FreeIcon}
                  alt=""
                />
                <div className="ml-1">34省免费找公司</div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img
                  className="h-3"
                  style={{ border: '1px dashed #9D9D9D' }}
                  src={MakeSureIcon}
                  alt=""
                />
                <div className="ml-1">3大服务保障</div>
              </div>

              <div className="flex items-center mt-2">
                <img
                  className="h-3"
                  style={{ border: '1px dashed #9D9D9D' }}
                  src={QueryIcon}
                  alt=""
                />
                <div className="ml-1">1547家公司完成流转</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly mt-4">
            <div
              className="flex justify-center border rounded-lg px-1 items-center"
              style={{
                color: '#4B82DF',
                border: '1px solid #4B82DF',
              }}
            >
              <img className="h-3" src={PhoneIcon} alt="" />
              <div style={{ fontSize: '13px', marginLeft: '2px' }}>
                028-8432-5628
              </div>
            </div>
            <div
              className="flex justify-center rounded-lg px-1 items-center"
              style={{
                color: '#4B82DF',
                border: '1px solid #4B82DF',
              }}
            >
              <img className="h-3" src={PhoneIcon} alt="" />
              <div style={{ fontSize: '13px', marginLeft: '2px' }}>
                173-8156-5284
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-4 mt-4">
            <div className="mt-2" style={{ fontSize: 14, color: '#9D9D9D' }}>
              Copyright©2020-2021 企枣网版权所有{' '}
            </div>
            <div className="mt-2" style={{ fontSize: 14, color: '#9D9D9D' }}>
              蜀ICP备2020036560号
            </div>
            <div className="mt-2" style={{ fontSize: 14, color: '#9D9D9D' }}>
              川公安备51010602001292号
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {<IconList />}
      {<SearchSection />}
      {<Concentration />}
      {<Hot />}
      {<Footer />}
    </div>
  );
};

export default Content;
