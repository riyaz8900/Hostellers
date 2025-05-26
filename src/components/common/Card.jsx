import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

function Card({
    image,
    title,
    guests = 1,
    originalPrice,
    discountedPrice,
    discountLabel,
    duration,
    description,
    soldOut,
}) {
    const [showModal, setShowModal] = useState(false);
    const [bookingType, setBookingType] = useState("individual");
    const [people, setPeople] = useState(1);
    const [days, setDays] = useState(1);

    const handleBookingSubmit = () => {
        console.log({
            bookingType,
            people,
            days
        });
        setShowModal(false);
        // You can add API call or further action here
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full rounded-t-lg h-[263px] md:w-80 md:rounded-none md:rounded-l-lg"
                    src={image}
                    alt={title}
                />

                <div className="flex flex-col justify-between p-6 leading-normal md:w-[calc(100%-320px)]">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <div className="flex justify-between items-center mb-3">
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className="bg-red-100 flex items-center gap-2 text-red-600 px-2 rounded text-sm font-semibold">
                                <FaRegUser /> x {guests} Guest{guests > 1 && 's'}
                            </span>
                        </p>
                        <p className="font-bold text-green-700 dark:text-green-500 text-lg">{duration}</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className="text-red-600 line-through mr-2">₹{originalPrice}</span>
                            <span className="bg-red-100 text-red-600 px-2 rounded mr-2 text-sm font-semibold">{discountLabel}</span>
                        </p>
                        <p className="font-bold text-green-700 dark:text-green-500 text-lg">₹{discountedPrice}</p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

                    <div className="flex justify-end">
                        {soldOut ? (
                            <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
                                Sold Out
                            </button>
                        ) : (
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowModal(true)}
                            >
                                Book Now
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Customize Your Booking</h3>

                        <label className="block mb-2 text-sm font-medium">Booking Type</label>
                        <select
                            value={bookingType}
                            onChange={(e) => setBookingType(e.target.value)}
                            className="w-full mb-4 border p-2 rounded"
                        >
                            <option value="individual">Individual</option>
                            <option value="group">Group</option>
                        </select>

                        <label className="block mb-2 text-sm font-medium">Number of People</label>
                        <input
                            type="number"
                            min="1"
                            value={people}
                            onChange={(e) => setPeople(Number(e.target.value))}
                            className="w-full mb-4 border p-2 rounded"
                        />

                        <label className="block mb-2 text-sm font-medium">Number of Days</label>
                        <input
                            type="number"
                            min="1"
                            value={days}
                            onChange={(e) => setDays(Number(e.target.value))}
                            className="w-full mb-6 border p-2 rounded"
                        />

                        <div className="flex justify-between">
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                                onClick={handleBookingSubmit}
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
