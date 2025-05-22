// components/common/OfferCard.js
import React from 'react';


const Offers = ({ title, image }) => {
  return (
  <>
    <div className="flex items-center bg-white rounded-lg shadow-md lg:p-0 p-2 gap-4 hover:shadow-lg transition">
        
      {image && (
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-md"
        />
      )}
      
    </div>
  </>
  );
};

export default Offers;
