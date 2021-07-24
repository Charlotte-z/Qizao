import React from 'react';
import { Badge, Icon, Tabs } from 'antd-mobile';
import IconTest from '../assets/images/homeSelected.png';
import buyIcon from '../assets/images/buy_active.png';
import './index.css';
import { useHistory } from 'react-router';
import Home from './home/components';
import Aptitude from './aptitude';

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
        <img src={IconTest} className="h-3 w-3" alt="" />
        <span>首页</span>
      </div>
    ),
  },
];
const TabBar = () => {
  const history = useHistory();
  return (
    <div className="h-screen">
      <Tabs
        tabs={tabs}
        swipeable={false}
        tabBarPosition="bottom"
        initialPage={0}
        animated={false}
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#fff',
          }}
        >
          Content of third tab
        </div>
      </Tabs>
    </div>
  );
};

export default TabBar;
