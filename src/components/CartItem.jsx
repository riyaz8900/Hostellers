import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';

const CartItem = ({ name, hostelImage1, quantity, price, onRemove, onDecrease, onIncrease }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={hostelImage1} alt={name} className="w-24 h-24 object-cover rounded-md" />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <button onClick={onDecrease} className="p-1 rounded border hover:bg-gray-100">
              <FiMinus />
            </button>
            <span className="w-6 text-center">{quantity}</span>
            <button onClick={onIncrease} className="p-1 rounded border hover:bg-gray-100">
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-xl font-bold text-green-700">₹{price * quantity}</p>
        {onRemove && (
          <button onClick={onRemove} className="text-red-500 hover:text-red-700">
            <FaTrashAlt />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
