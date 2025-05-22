import React from 'react';
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
    soldOut
}) {
    return (
        <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="object-cover w-full rounded-t-lg h-[263px] md:w-80 md:rounded-none md:rounded-l-lg"
                src={image}
                alt={title}
            />

            <div className="flex flex-col justify-between p-6 leading-normal md:w-[calc(100%-320px)]">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>

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
                        <span className="bg-red-100 text-red-600 px-2 rounded mr-2 text-sm font-semibold">
                            {discountLabel}
                        </span>
                    </p>
                    <p className="font-bold text-green-700 dark:text-green-500 text-lg">₹{discountedPrice}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {description}
                </p>

                {soldOut && (
                    <div className="flex justify-end">
                        <p className="text-red-500 text-2xl">Sold out</p>
                    </div>
                )}
            </div>
        </a>
    );
}

export default Card;
