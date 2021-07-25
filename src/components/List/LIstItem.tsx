import { WhiteSpace } from 'antd-mobile';
import React, { CSSProperties } from 'react';

interface Porps {
  content: React.ReactNode;
  contentClassName?: string;
  titleClassName?: string;
  title?: React.ReactNode;
  left?: React.ReactNode;
  leftClassName?: string;
  right?: React.ReactNode;
  rightClassName?: string;
  className?: string;
  style?: CSSProperties;
}
const ListItem: React.FC<Porps> = (porps) => {
  const {
    content,
    contentClassName,
    title,
    titleClassName,
    left,
    leftClassName,
    rightClassName,
    right,
    className,
    style,
  } = porps;
  return (
    <div className={className} style={style}>
      <b className={`font-14 ${titleClassName}`}>{title}</b>
      {titleClassName && <WhiteSpace />}
      <div className={`font-12 flex items-center ${contentClassName}`}>
        {left && <div className={`mr-1 ${leftClassName}`}>{left}</div>}
        {content}
        {right && <div className={`ml-1 ${rightClassName}`}>{right}</div>}
      </div>
    </div>
  );
};

export default ListItem;
