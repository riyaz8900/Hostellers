import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
function PaymentModal({ event, userData, onClose }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const ticketId = `TICKET-${Math.floor(100000 + Math.random() * 900000)}`;
    ticketId;
    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            const ticketId = `TICKET-${Math.floor(100000 + Math.random() * 900000)}`;

            const bookingDetails = {
                event_title: event.title,
                event_description: event.description,
                user_name: userData.name,
                user_email: userData.email,
                user_phone: userData.phone,
                payment_id: 'FAKE-PAY-12345',
                ticket_id: ticketId,
            };

            emailjs
                .send(
                    'service_d3o1f9e',
                    'template_vnq9v92',
                    bookingDetails,
                    'qQYG6VzZqbn3Fon_B'
                )
                .then(() => {
                    console.log('📧 Ticket email sent successfully');
                })
                .catch((error) => {
                    console.error('❌ Email sending failed:', error);
                });

            console.log("✅ Booking Confirmed", {
                event,
                user: userData,
                mockPaymentId: "FAKE-PAY-12345",
                ticketId,
            });
            setTimeout(()=>{
                navigate("/")
            },3000)
        }, 2000);
    };



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                <h2 className="text-xl font-semibold mb-2">Pay for: {event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>

                {success ? (
                    <div className="text-center">
                        <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
                        <h3 className="text-green-600 text-lg font-medium">Payment Successful!</h3>
                        <p className="text-sm text-gray-500">
                            Confirmation sent to {userData.email}
                        </p>
                        <button
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-sm text-gray-700 mb-2">
                            Name: {userData.name} <br />
                            Email: {userData.email} <br />
                            Phone: {userData.phone}
                        </div>
                        <div className="flex justify-between mb-4 text-lg font-medium">
                            <span>Total:</span>
                            <span>₹500</span>
                        </div>
                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 flex justify-center items-center disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Pay Now'}
                        </button>
                        <button onClick={onClose} className="mt-3 w-full text-gray-600 text-sm">
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default PaymentModal;
