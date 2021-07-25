import { Button } from 'antd-mobile';
import React from 'react';

interface AptitudeProps {
  aptitude: {
    projectName: string;
    projectMony: number;
    registererAsset: number;
    method: string;
    expireDate: Date | string;
  };
}

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
            立即咨询
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeCard;
