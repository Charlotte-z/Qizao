import React, { useState } from 'react';
import { Tabs } from 'antd-mobile';
import IconTest from '../assets/images/homeSelected.png';
import buyIcon from '../assets/images/buy_active.png';
import './index.css';
import WeChatMarketing from './weChatMarketing';
import Home from './home/components';
import Aptitude from './aptitude';
import icon4 from '../assets/images/找公司@2x.png';
import icon2 from '../assets/images/咨询 (1)@2x.png';

const tabs = [
  {
    title: (
      <div className="h-full flex flex-col items-center">
        <img src={IconTest} className="h-3 w-3" alt="" />
        <span>首页</span>
      </div>
    ),
  },
  {
    title: (
      <div className="h-full flex flex-col items-center">
        <img src={buyIcon} className="h-3 w-3" alt="" />
        <span>买资质</span>
      </div>
    ),
  },
  {
    title: (
      <div className="h-full flex flex-col items-center">
        <img src={icon2} className="h-3 w-3" alt="" />
        <span>咨询中心</span>
      </div>
    ),
  },
  {
    title: (
      <div className="h-full flex flex-col items-center">
        <img src={icon4} className="h-3 w-3" alt="" />
        <span>微信营销</span>
      </div>
    ),
  },
];
const TabBar: React.FC = () => {
  return (
    <div className="h-full w-full fixed">
      <Tabs
        tabs={tabs}
        swipeable={false}
        tabBarPosition="bottom"
        initialPage={'hoome'}
        animated={false}
        onTabClick={(tab, index) => {
          index === 2 &&
            window.open(
              'http://kht.zoosnet.net/LR/Chatpre.aspx?id=KHT49896761&lng=cn',
            );
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100vw',
            backgroundColor: '#fff',
          }}
        >
          <Home />
        </div>
        <Aptitude />

        <div></div>
        <div>
          <WeChatMarketing />
        </div>
      </Tabs>
    </div>
  );
};

export default TabBar;
