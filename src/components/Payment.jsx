import React from 'react';

const Payment = ({ cart, user, total }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment</h2>
      <p className="mb-2">Name: {user.name}</p>
      <p className="mb-2">Email: {user.email}</p>
      <p className="mb-2">Phone: {user.phone}</p>

      <div className="my-4">
        <h4 className="text-lg font-semibold">Items:</h4>
        <ul className="list-disc ml-5">
          {cart.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xl font-bold mt-4">Total: ₹{total}</p>

      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
        Pay Now (Mock)
      </button>
    </div>
  );
};

export default Payment;
