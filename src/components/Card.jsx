import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ image, title, description, price, children }) => {
    return (
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {image && (
                <img
                    src={image}
                    alt={title || 'Card image'}
                    className="w-full object-contain"
                />
            )}
            <div className='absolute right-4 rounded-full w-9 flex items-center justify-center h-9 bg-white top-4'><FaArrowTrendUp size={20} /></div>
            <div className="p-4">
                {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}
                {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
                {price && <p className="text-gray-800 font-extrabold text-sm lg:text-xl text-sm mt-1">{price}</p>}

                {children && <div className="mt-4">{children}</div>}
            </div>
        </div>
    );
};

export default Card;
