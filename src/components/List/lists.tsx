import { WhiteSpace } from 'antd-mobile';
import React from 'react';

interface Porps {
  list: {
    content: React.ReactNode;
    contentClassName?: string;
    titleClassName?: string;
    title?: React.ReactNode;
    left?: React.ReactNode;
    leftClassName?: string;
    right?: React.ReactNode;
    rightClassName?: string;
  }[];
}
const Lists: React.FC<Porps> = ({ list }) => {
  return (
    <div>
      {list.map((l) => (
        <>
          <div className={`font-14 ${l.titleClassName}`}>{l.title}</div>
          <WhiteSpace />
          <div className={`font-12 ${l.contentClassName}`}>
            {l.left && (
              <div className={`mr-1 ${l.leftClassName}`}>{l.left}</div>
            )}
            {l.content}
            {l.right && (
              <div className={`ml-1 ${l.rightClassName}`}>{l.right}</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Lists;
