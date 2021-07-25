import { InputItem } from 'antd-mobile';
import UserIcon from '../../../../assets/images/个人@2x.png';
import CompanyIcon from '../../../../assets/images/公司转让@2x.png';
import './index.css';
import React from 'react';

const Header = () => {
  return (
    <div className={`wrapper p-1`}>
      <div className="flex flex-row justify-evenly items-center w-full">
        <InputItem className="rounded-lg input" placeholder="请输入公司类型" />
        <img src={UserIcon} alt="" className="profile" />
      </div>
      <img className="image mt-1" src={CompanyIcon} alt="" />
    </div>
  );
};

export default Header;
