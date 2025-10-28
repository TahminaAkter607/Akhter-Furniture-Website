import React from 'react';

const TooltipButton = ({
  position = 'bottom',
  colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700']
}) => {
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: '-top-2 left-1/2 transform -translate-x-1/2'
    },
    top: {
      tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow: '-bottom-2 left-1/2 transform -translate-x-1/2'
    }
  };

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/25 rounded-full border text-xl">
        <div
          className={`hidden absolute p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1 ${positionClasses[position].tooltip}`}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 ${color} border border-white rounded-full`}
            ></div>
          ))}

          {/* tooltip arrow */}
          <div
            className={`absolute w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent ${
              position === 'bottom'
                ? 'border-t-white ' + positionClasses[position].arrow
                : 'border-b-white ' + positionClasses[position].arrow
            }`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
