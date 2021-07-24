import React from 'react';

interface DescriptionCellProps {
  des1: string;
  des2: string;
}

const DescriptionCell: React.FC<DescriptionCellProps> = (
  props: DescriptionCellProps,
) => {
  const { des1, des2 } = props;
  return (
    <div
      className="flex flex-col w-6 items-center mx-1"
    >
      <span style={{ fontSize: 5 }} className="flex flex-wrap text-gray-500">
        {des1}
      </span>
      <span style={{ fontSize: 5 }} className="flex flex-wrap text-gray-500">
        {des2}
      </span>
    </div>
  );
};

export default DescriptionCell;
