import { Button } from 'antd-mobile';
import React from 'react';

const AptitudeCard: React.FC = (props) => {
  return (
    <div className="flex flex-col p-1 m-1 border-2 border-gray-300">
      <div className="flex justify-between">
        <h3 className="font-bold"> 施工总承包-房建工程-贰级【整转】</h3>
        <p className="text-red-500 font-bold"> 限时: 45.00万 </p>
      </div>
      <div className="flex justify-between mt-1">
        <ul className="text-gray-500">
          <li className="flex justify-between">
            <p>注册资本:</p>
            <p>1000</p>
          </li>
          <li className="flex justify-between">
            <p>安许:</p>
            <p>现成安许</p>
          </li>
          <li className="flex justify-between">
            <p>到期时间:&nbsp;</p>
            <p>2025-12</p>
          </li>
        </ul>
        <div className="mt-2">
          <Button size="small" type="primary">
            立即咨询
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeCard;
