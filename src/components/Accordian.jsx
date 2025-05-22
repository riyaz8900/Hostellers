import React, { useState, useRef } from 'react';

const Accordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full py-5 mx-auto">
        <div className="flex items-center my-2 py-3">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Faqs</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>
      {items.map((item, index) => (
        <div key={index} className="border rounded-md mb-2 overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 font-medium flex justify-between items-center"
          >
            {item.title}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          <div
            ref={el => (contentRefs.current[index] = el)}
            className={`transition-all duration-300 ease-in-out overflow-hidden`}
            style={{
              maxHeight:
                openIndex === index
                  ? contentRefs.current[index]?.scrollHeight + 'px'
                  : '0px',
            }}
          >
            <div className="p-4 bg-gray-50 border-t">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
