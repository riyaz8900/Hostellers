
import React from 'react';

function PropertyCard({ image, city, location }) {
    return (
        <div className="flex my-3 flex-col items-center shadow-md rounded overflow-hidden">
            <img src={image} alt={city} className="w-full h-80 object-cover" />
            <div className="text-center py-2">
                <p className="font-semibold text-gray-800">{city}</p>
                <p className="text-sm text-gray-600">{location}</p>
            </div>
        </div>
    );
}

export default PropertyCard;
