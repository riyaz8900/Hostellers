import React from 'react';

function EventsHappens({ title, image, description, time }) {
  return (
    <div className="shadow-lg rounded overflow-hidden  bg-white">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <p className="bg-yellow-300 absolute z-10 top-1 right-1 w-fit px-3 py-1 rounded-full text-sm font-semibold shadow">
          {time}
        </p>
      </div>
      <div className="p-4">
        <h3 className="font-extrabold text-xl mb-2 truncate">{title}</h3>
        <p className="font-medium text-gray-700 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventsHappens;
