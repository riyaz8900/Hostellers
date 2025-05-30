import React from 'react';

function EventsHappens({ image, title, description, time, onBook }) {
  return (
    <div className="bg-white shadow rounded-lg p-3 flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <button
        onClick={onBook}
        className="mt-3 w-full bg-teal-600 text-white rounded py-2 hover:bg-teal-700"
      >
        Book Now
      </button>
    </div>
  );
}

export default EventsHappens;
