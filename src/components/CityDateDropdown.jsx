// src/components/CityDateDropdown.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '../components/common/Select';
import {
  setSelectedState,
  setSelectedCity,
  setCheckInDate,
  setCheckOutDate,
  setFilteredHostels
} from '../features/search/searchSlice';

const CityDateDropdown = ({ hostels = [] }) => {
  const dispatch = useDispatch();
  
  // Convert ISO strings back to Date objects when using them
  const { selectedState, selectedCity, checkInDate, checkOutDate } = useSelector((state) => ({
    selectedState: state.search.selectedState,
    selectedCity: state.search.selectedCity,
    checkInDate: state.search.checkInDate ? new Date(state.search.checkInDate) : null,
    checkOutDate: state.search.checkOutDate ? new Date(state.search.checkOutDate) : null,
  }));

  const stateOptions = React.useMemo(() => {
    const uniqueStates = [...new Set(hostels.map(h => h.state))];
    return uniqueStates.map(state => ({
      value: state,
      label: state
    }));
  }, [hostels]);

  const hostelOptions = React.useMemo(() => {
    if (!selectedState) return [];
    return hostels
      .filter(h => h.state === selectedState.value)
      .map(h => ({
        value: h.hostelName,
        label: h.hostelName
      }));
  }, [hostels, selectedState]);

  const getDateRange = (start, end) => {
    if (!start || !end) return [];
    const dateArray = [];
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      const formatted = currentDate.toISOString().split('T')[0];
      dateArray.push(formatted);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  };

  const handleSearch = () => {
    if (!hostels || hostels.length === 0) {
      dispatch(setFilteredHostels([]));
      return;
    }

    const filtered = hostels.filter((hostel) => {
      const matchesState = !selectedState || hostel.state === selectedState.value;
      const matchesCity = !selectedCity || hostel.hostelName === selectedCity.value;

      let matchesDateRange = true;
      if (checkInDate && checkOutDate) {
        const dateRange = getDateRange(checkInDate, checkOutDate);
        matchesDateRange = dateRange.every((date) =>
          hostel.availableDates.includes(date)
        );
      }

      return matchesState && matchesCity && matchesDateRange;
    });

    dispatch(setFilteredHostels(filtered));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="w-full md:flex-1">
          <Select
            title="State"
            options={stateOptions}
            value={selectedState}
            onChange={(state) => dispatch(setSelectedState(state))}
            isDisabled={hostels.length === 0}
          />
        </div>

        <div className="w-full md:flex-1">
          <Select
            title="Hostel"
            options={hostelOptions}
            value={selectedCity}
            onChange={(city) => dispatch(setSelectedCity(city))}
            isDisabled={!selectedState || hostels.length === 0}
          />
        </div>

        <div className="md:w-1/6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <DatePicker
          selected={checkInDate}
  onChange={(date) => dispatch(setCheckInDate(date?.toISOString()))}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            placeholderText="Select date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={hostels.length === 0}
          />
        </div>

        <div className="w-full md:w-1/6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <DatePicker
           
              selected={checkOutDate}
  onChange={(date) => dispatch(setCheckOutDate(date?.toISOString()))} 
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate || new Date()}
            placeholderText="Select date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={hostels.length === 0}
          />
        </div>

        <div>
          <button
            disabled={!selectedState || !selectedCity || !checkInDate || !checkOutDate || hostels.length === 0}
            className="w-full bg-black text-white hover:text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors disabled:opacity-50"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityDateDropdown;