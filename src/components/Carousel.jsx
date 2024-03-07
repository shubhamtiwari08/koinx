import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up auto-play feature
    const interval = setInterval(() => {
      if (activeIndex < items.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, items.length]);

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ${
            index === activeIndex
              ? "translate-x-0"
              : index < activeIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          {/* Your content here */}
          <div className="w-[30%] h-3/4 bg-blue-100 rounded-lg p-4 flex items-start gap-x-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex-shrink-0"></div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="text-sm font-medium text-gray-800">
                {item.title}
              </div>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-gray-100 rounded-full shadow-lg"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-gray-100 rounded-full shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
