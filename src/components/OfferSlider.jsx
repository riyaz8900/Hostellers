// components/OfferSlider.jsx
import React from 'react';

const offers = [
  "🎉 10% Off on All Bookings This Month!",
  "🍽️ Free Breakfast with Every Booking!",
  "🛏️ Book 3 Nights, Get 1 Night Free!",
  "💰 Flat ₹500 Cashback on UPI Payments!",
  "🏡 Early Check-in at No Extra Cost!",
];

const OfferSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-yellow-100 border-y border-yellow-300 py-2">
      <div className="inline-block animate-slide whitespace-nowrap">
        {offers.map((offer, index) => (
            
          <span
            key={index}
            className="inline-block text-sm font-medium text-yellow-800 px-6"
          >
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
