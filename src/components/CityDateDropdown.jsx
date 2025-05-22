import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from './common/Select';
import 'react-datepicker/dist/react-datepicker.css';
import DateInput from '../components/common/DateInput'; 
const CityDateDropdown = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        {/* City Dropdown */}
        <div className="w-full md:flex-1 ">
          <Select onChange={setSelectedCity} />
        </div>

        {/* Check-in Date */}
        <div className=" md:w-1/6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            placeholderText="Select date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Check-out Date */}
        <div className="w-full md:w-1/6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate || new Date()}
            placeholderText="Select date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
         <div className="">
        <button
          className="w-full bg-black text-white hover:text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
          onClick={() => {
            console.log({
              city: selectedCity,
              checkIn: checkInDate,
              checkOut: checkOutDate
            });
          }}
        >
          Search
        </button>
      </div>
      </div>

      {/* Search Button */}
     
    </div>
  );
};

export default CityDateDropdown;
