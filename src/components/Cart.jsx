import React, { useState } from 'react';
import CartItem from './CartItem';
// import image from  '../assets/filteration_btn/hostel18.webp'
const initialCart = [
  { id: 1, name: 'Product A', image: '/img1.jpg', quantity: 1, price: 299 },
  { id: 2, name: 'Product B', image: '/img2.jpg', quantity: 2, price: 199 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQty = (id) => {
    setCartItems(items =>
      items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQty = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl shadow-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                {...item}
                onIncrease={() => increaseQty(item.id)}
                onDecrease={() => decreaseQty(item.id)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ₹{total}</p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
