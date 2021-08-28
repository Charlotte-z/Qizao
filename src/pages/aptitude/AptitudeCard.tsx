import { Button } from 'antd-mobile';
import React from 'react';
import { AptitudeDetail } from '../../types';

interface AptitudeProps {
  aptitude: AptitudeDetail;
}

export const advisoryURL =
  'https://kht.zoosnet.net/LR/Chatpre.aspx?id=KHT49896761&cid=3259dc2ac0704c57b18cc1631640678c&lng=cn&sid=62a3bb6ee9584a12ae89641c4a2ce8fb&p=http%3A//7.7zaowang.com/%23/&rf1=&rf2=&msg=&d=1627212516455';

export const getCompanyClearance = (code: string | number): string => {
  switch (code) {
    case '0':
    case 0:
      return '无';

    case '1':
    case 1:
      return '有';

    case '2':
    case 2:
      return '包安许';

    default:
      return '';
  }
};

const AptitudeCard: React.FC<AptitudeProps> = (props) => {
  const { aptitude } = props;
  const {
    goods_name,
    goods_price,
    aptitude_registered_capital,
    aptitude_clearance,
    aptitude_establish_date,
    admin_users,
  } = aptitude || {};

  return (
    <div className="flex flex-col p-1 m-1 border-2 border-gray-300">
      <div className="flex justify-between">
        <h3 className="font-bold flex-1">{goods_name}</h3>
        <p className="text-red-500 ml-1 font-bold">
          限时: {goods_price ? Number(goods_price) / 10000 + '.00' : '0.00'}万
        </p>
      </div>
      <div className="flex justify-between items-center mt-1">
        <ul className="text-gray-500">
          <li className="flex justify-between">
            <p>注册资本:</p>
            <p>{aptitude_registered_capital}</p>
          </li>
          <li className="flex">
            <p className="mr-4">安许:</p>
            <p>{getCompanyClearance(aptitude_clearance)}</p>
          </li>
          <li className="flex justify-between">
            <p>注册时间:&nbsp;</p>
            <p>{aptitude_establish_date}</p>
          </li>
        </ul>
          <a
            target="_blank"
            href={`http://wpa.qq.com/msgrd?v=3&uin=${admin_users?.txQQ}&site=qq&menu=yes`}
          >
            <img
              style={{ border: 0,maxHeight:80}}
              src={`http://wpa.qq.com/pa?p=2:${admin_users?.txQQ}:53`}
              alt="点击这里给我发消息"
              title="点击这里给我发消息"
            />
          </a>
      </div>
    </div>
  );
};

export default AptitudeCard;
