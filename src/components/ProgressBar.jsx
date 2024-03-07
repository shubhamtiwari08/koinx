// ProgressBar.js

import React from 'react';

const ProgressBar = ({ value, max = 100 , color}) => {
  return (
    <div className="pt-1">
      <div className={`flex h-2 mb-4 overflow-hidden text-xs rounded-sm`}>
        <div
          style={{ width: `${value}%` }}
          className={`flex flex-col whitespace-nowrap text-white justify-center bg-${color}-500 `}
        ></div>
        
      </div>
      <span className={`text-xs font-semibold inline-block text-gray-600`}>
            {value}%
          </span>
     
      
    </div>
  );
};

export default ProgressBar;
