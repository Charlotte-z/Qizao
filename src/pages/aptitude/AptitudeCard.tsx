import { Button } from 'antd-mobile';
import React from 'react';

interface AptitudeProps {
  aptitude: {
    projectName: string;
    projectMony: number | string;
    registererAsset: number | string;
    method: string;
    expireDate: Date | string;
  };
}

export const advisoryURL =
  'https://kht.zoosnet.net/LR/Chatpre.aspx?id=KHT49896761&cid=3259dc2ac0704c57b18cc1631640678c&lng=cn&sid=62a3bb6ee9584a12ae89641c4a2ce8fb&p=http%3A//7.7zaowang.com/%23/&rf1=&rf2=&msg=&d=1627212516455';

const AptitudeCard: React.FC<AptitudeProps> = (props) => {
  const { aptitude } = props;
  const { projectName, projectMony, registererAsset, method, expireDate } =
    aptitude;

  return (
    <div className="flex flex-col p-1 m-1 border-2 border-gray-300">
      <div className="flex justify-between">
        <h3 className="font-bold">{projectName}</h3>
        <p className="text-red-500 font-bold"> 限时: {projectMony}万 </p>
      </div>
      <div className="flex justify-between mt-1">
        <ul className="text-gray-500">
          <li className="flex justify-between">
            <p>注册资本:</p>
            <p>{registererAsset}</p>
          </li>
          <li className="flex justify-between">
            <p>安许:</p>
            <p>{method}</p>
          </li>
          <li className="flex justify-between">
            <p>到期时间:&nbsp;</p>
            <p>{expireDate}</p>
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
