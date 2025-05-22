import React from 'react';
import image1 from '../assets/hostel23.jpeg'
import image2 from '../assets/hostel22.jpeg';
import image3 from '../assets/hostel24.webp';
import image4 from '../assets/hostel21.jpeg';
import PropertyCard from './PropertyCard';

function SimilarProperties() {
    const properties = [
        { image: image1, city: 'Goa', location: 'Candolim' },
        { image: image2, city: 'Bangalore', location: 'Koramangala' },
        { image: image3, city: 'Manali', location: 'Old Manali' },
        { image: image4, city: 'Delhi', location: 'Saket' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-4 p-2 lg:p-0">
            {properties.map((prop, index) => (
                <PropertyCard key={index} {...prop} />
            ))}
        </div>
    );
}

export default SimilarProperties;
