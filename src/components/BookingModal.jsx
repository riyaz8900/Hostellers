import React, { useState } from 'react';
import { toast } from 'react-toastify';

function BookingModal({ event, onClose, onPayment }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill all fields.');
      return;
    }
    onPayment(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Book: {event.title}</h2>
        <input
          className="border p-2 mb-3 w-full rounded"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 mb-3 w-full rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border p-2 mb-4 w-full rounded"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700"
        >
          Proceed to Pay
        </button>
        <button onClick={onClose} className="text-sm text-gray-500 mt-3 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BookingModal;
