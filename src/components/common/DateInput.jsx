// components/common/DateInput.js
import { CalendarDays } from 'lucide-react';
import React from 'react';

const DateInput = React.forwardRef(({ value, onClick, label }, ref) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div
      onClick={onClick}
      ref={ref}
      className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer hover:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition"
    >
      <span className={`text-sm ${value ? 'text-black' : 'text-gray-400'}`}>
        {value || 'Select date'}
      </span>
      <CalendarDays className="w-5 h-5 text-gray-500" />
    </div>
  </div>
));

export default DateInput;
