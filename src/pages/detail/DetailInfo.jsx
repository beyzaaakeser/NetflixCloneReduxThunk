import React from 'react';

const DetailInfo = ({ title, arr }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 italic">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {arr?.map((item,key) => (
          <span className="border py-1 px-3 rounded-md " key={key}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DetailInfo;
