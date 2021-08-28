import { Button } from 'antd-mobile';
import React from 'react';

export interface AptitudeDetail {
  goods_uuid: string;
  goods_name: string;
  goods_price: number | string;
  aptitude_registered_capital: number | string;
  aptitude_clearance: string;
  aptitude_establish_date: Date | string;
}
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
  } = aptitude || {};

  return (
    <div className="flex flex-col p-1 m-1 border-2 border-gray-300">
      <div className="flex justify-between">
        <h3 className="font-bold flex-1">{goods_name}</h3>
        <p className="text-red-500 font-bold">
          限时: {goods_price ? Number(goods_price) / 10000 : ''}万
        </p>
      </div>
      <div className="flex justify-between mt-1">
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
        <div className="mt-2">
          <Button size="small" type="primary">
            <a href={advisoryURL}>立即咨询</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeCard;
