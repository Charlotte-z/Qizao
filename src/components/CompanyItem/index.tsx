import React from 'react';
import RightArrowIcon from '../../assets/images/返回备份@2x.png';

interface CompanyItemProps {
  icon: string;
  title: string;
}

const CompanyItem = (props: CompanyItemProps) => {
  const { icon, title } = props;

  return (
    <div className="flex justify-center items-center px-1">
      <img style={{ flex: 0.1 }} className="h-3" src={icon} alt="" />
      <div style={{ flex: 0.7 }}>
        <span>{title}</span>
      </div>
      <div className="flex items-center justify-end" style={{ flex: 0.2 }}>
        <span style={{ color: '#9E9E9E' }}>更多</span>
        <img className="h-2" src={RightArrowIcon} />
      </div>
    </div>
  );
};

export default CompanyItem;
