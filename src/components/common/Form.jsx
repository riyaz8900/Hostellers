import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from './Select'

const Form = () => {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedState, setSelectedState] = useState(null)

  const statesWithHostels = [
    {
      id: 11,
      name: 'Karnataka',
      hostels: [
        { id: 1, name: 'The Hosteller Koramangala Bangalore' },
        { id: 2, name: 'The Hosteller Indiranagar Bangalore' },
        { id: 4, name: 'The Hosteller Brigade Bangalore' },
        { id: 6, name: 'The Hosteller Coorg' },
      ],
    },
    {
      id: 12,
      name: 'Kerala',
      hostels: [{ id: 3, name: 'The Hosteller Trivandrum' }],
    },
    {
      id: 7,
      name: 'Gujarat',
      hostels: [{ id: 5, name: 'The Hosteller Surat' }],
    },
    {
      id: 9,
      name: 'Himachal Pradesh',
      hostels: [{ id: 7, name: 'The Hosteller Manali' }],
    },
    {
      id: 33,
      name: 'Jammu and Kashmir',
      hostels: [{ id: 8, name: 'The Hosteller Kashmir' }],
    },
    {
      id: 24,
      name: 'Telangana',
      hostels: [{ id: 9, name: 'The Hosteller Hyderabad' }],
    },
    {
      id: 26,
      name: 'Uttar Pradesh',
      hostels: [{ id: 10, name: 'The Hosteller Lucknow' }],
    },
  ]

  const selectedHostelOptions = selectedState?.hostels || []

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        {/* State Dropdown */}
        <div className="w-full md:flex-1">
          <Select
            onChange={(state) => {
              setSelectedState(state)
              setSelectedCity(null)
            }}
            title="State"
            options={statesWithHostels}
          />
        </div>

        {/* City Dropdown */}
        <div className="w-full md:flex-1">
          <Select
            onChange={setSelectedCity}
            title="Hostel"
            options={selectedHostelOptions}
          />
        </div>

      
      
      </div>
      <div className='flex gap-3'>
         <div className="w-full py-2">
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
        <div className="w-full py-2">
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
      </div>
        <div className='py-3'>
          <button
            className="w-full bg-black text-white hover:text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
            onClick={() => {
              console.log({
                state: selectedState,
                city: selectedCity,
                checkIn: checkInDate,
                checkOut: checkOutDate,
              })
            }}
          >
            Search
          </button>
        </div>
    </div>
  )
}

export default Form
