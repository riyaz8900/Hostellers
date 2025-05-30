import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarCheck } from "react-icons/fa";
import Lottie from 'react-lottie';

import summary from '../assets/filteration_btn/summary.svg';
import Card from './common/Card';
import SimilarProperties from './SimilarProperties';
import AvailabilityHeader from './AvailabilityHeader';

import animationData from '../../robot-animation.json';
import hostels from '/Data.json';

function SelectedRoomsDetails() {
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);

    const selectedHostel = hostels.find(h => String(h.id) === String(id));
console.log(selectedHostel)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (!selectedHostel) {
        return (
            <div className='container mx-auto px-3'>
                <nav className="text-gray-600 mb-4 text-sm" aria-label="Breadcrumb">
                    <ol className="list-reset flex">
                        <li>
                            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                        </li>
                        <li><span className="mx-2"> / </span></li>
                        <li className="text-gray-800 font-semibold">Hostel Not Found</li>
                    </ol>
                </nav>
                <div className="container flex-col mx-auto flex items-center justify-center py-4 h-screen text-sm">
                    <h1 className='text-center lg:text-2xl'>Hostel not found</h1>
                    <div className="mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                        <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-4 lg:p-0 p-2">
            {/* Breadcrumb */}
            <nav className="text-gray-600 mb-4 text-sm" aria-label="Breadcrumb">
                <ol className="list-reset flex">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                    </li>
                    <li><span className="mx-2"> / </span></li>
                    <li className="text-gray-800 font-semibold">{selectedHostel.hostelName}</li>
                </ol>
            </nav>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">{selectedHostel.hostelName}</h1>

            {/* Images */}
            <div className="grid grid-cols-1 py-4 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <img
                        src={selectedHostel.image}
                        alt={selectedHostel.hostelName}
                        className="w-full h-full aspect-video object-cover rounded"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    {selectedHostel.rooms?.map((room, i) => (
                        <img
                            key={i}
                            src={room.image}
                            alt={room.title}
                            className="w-full aspect-video object-cover rounded"
                        />
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-wrap py-2 lg:w-9/12">
                <p className="text-gray-700 p-1">{selectedHostel.details}</p>
                <div
                    className={`transition-all duration-500 origin-top ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}
                >
                    {selectedHostel.moreDetails.split('\n').map((line, idx) =>
                        line.trim() ? (
                            <p key={idx} className="text-gray-700 p-1">{line.trim()}</p>
                        ) : null
                    )}
                </div>
            </div>

            {/* Show More / Less */}
            <div className="py-2">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-gray-100 rounded px-4 py-2 hover:text-blue-800 transition"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Price */}
            <div className="mt-4 text-xl font-semibold py-3">{selectedHostel.price}</div>

            {/* Availability */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl">Availability</h1>

                    {/* <AvailabilityHeader /> */}
                </div>
            </div>

            {/* Available Dates */}
            {selectedHostel.availableDates?.length > 0 && (
                <div className="py-4">
                    <div className="flex flex-wrap gap-2">
                        {selectedHostel.availableDates.map((date, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {date}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Room Cards + Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
                <div className="col-span-1 space-y-4">
                    {selectedHostel.categories.map((category, i) => (
                        <Card
                            key={i}
                            image={category.image}
                            title={category.type}
                            guests={1}
                            price={category.price}
                            duration={category.stayDuration}
                            description={selectedHostel.description}
                            availableDates={category.availableDates}
                            checkInTime={selectedHostel.checkInTime}
                            checkOutTime={selectedHostel.checkOutTime}
                        />
                    ))}

                </div>
                <div className="col-span-1 relative">
                    <div className="sticky top-4">
                        <img src={summary} alt="Summary" className="w-full rounded-lg shadow-md" />
                        {/* <Cart /> */}
                    </div>
                </div>
            </div>

            {/* Similar Properties */}
            <div className='py-3'>
                <h1 className='text-3xl py-2'>Similar Properties</h1>
                <SimilarProperties />
            </div>
        </div>
    );
}

export default SelectedRoomsDetails;
