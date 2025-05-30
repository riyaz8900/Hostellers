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
    const [showAvailability, setShowAvailability] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const StepperHeader = ({ currentStep }) => {
    const steps = ["Options", "Review", "Payment", "Success"];
    return (
        <div className="relative flex justify-between items-center mb-6">
            {steps.map((stepLabel, i) => (
                <React.Fragment key={i}>
                    <div className="flex flex-col items-center z-10">
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold
                                ${currentStep > i + 1
                                    ? 'bg-green-500 text-white border-green-500'
                                    : currentStep === i + 1
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'border-gray-300 text-gray-400'}`}
                        >
                            {currentStep > i + 1 ? '✓' : i + 1}
                        </div>
                        <p className={`mt-1 text-xs ${currentStep >= i + 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                            {stepLabel}
                        </p>
                    </div>

                    {/* Horizontal line between steps */}
                    {i < steps.length - 1 && (
                        <div className="absolute top-4 left-[calc(50%+1rem)] right-[calc(50%-1rem)] h-0.5">
                            <div
                                className={`w-full h-full ${currentStep > i + 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
                                style={{
                                    position: 'absolute',
                                    left: `${(i + 1) * 25}%`,
                                    width: '25%',
                                    height: '2px',
                                    zIndex: 0
                                }}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

    // const handleBookingSubmit = () => {
    //     console.log({
    //         bookingType,
    //         people,
    //         selectedDate,
    //     });
    //     setShowModal(false);
    // };

    const generateAvailability = () => {
        const days = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const originalPrice = Math.floor(Math.random() * 2000 + 1500);
            const discount = Math.floor(Math.random() * 30);
            const discountedPrice = originalPrice - Math.floor((discount / 100) * originalPrice);

            days.push({
                date: date.toISOString().split("T")[0],
                status: Math.random() > 0.2 ? "available" : "soldout",
                originalPrice,
                discountedPrice,
                discount
            });
        }
        return days;
    };

    const [availability] = useState(generateAvailability());

    const selectedDayData = selectedDate
        ? availability.find(day => day.date === selectedDate)
        : null;

    const displayOriginalPrice = selectedDayData ? selectedDayData.originalPrice : originalPrice;
    const displayDiscountedPrice = selectedDayData ? selectedDayData.discountedPrice : discountedPrice;
    const displayDiscountLabel = selectedDayData ? `${selectedDayData.discount}% off` : discountLabel;

    const checkInDate = selectedDate ? new Date(selectedDate) : null;
    const checkOutDate = checkInDate ? new Date(new Date(checkInDate).setDate(checkInDate.getDate() + 1)) : null;
    const formatDate = date => date?.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <>
            {/* Card */}
            <div className="flex my-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-3xl hover:bg-gray-100">
                <img
                    className="object-cover w-full rounded-t-lg h-[263px] md:w-80 md:rounded-none md:rounded-l-lg"
                    src={image}
                    alt={title}
                />
                <div className="flex flex-col justify-between p-6 leading-normal md:w-[calc(100%-320px)]">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-sm bg-red-100 flex items-center gap-2 text-red-600 px-2 py-1 rounded">
                            <FaRegUser /> x {guests} Guest{guests > 1 && 's'}
                        </p>
                        <p className="font-bold text-green-700 text-lg">{duration}</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p>
                            <span className="text-red-600 line-through mr-2">₹{displayOriginalPrice}</span>
                            <span className="bg-red-100 text-red-600 px-2 rounded text-sm font-semibold">{displayDiscountLabel}</span>
                        </p>
                        <p className="font-bold text-green-700 text-lg">₹{displayDiscountedPrice}</p>
                    </div>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className='flex justify-between items-center'>
                        <p
                            onClick={() => setShowAvailability(!showAvailability)}
                            className="text-blue-600 cursor-pointer hover:underline"
                        >
                            {showAvailability ? "Hide Availability" : "Show Availability"}
                        </p>
                        {soldOut ? (
                            <button className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed" disabled>Sold Out</button>
                        ) : (
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                onClick={() => setShowModal(true)}
                            >
                                Book Now
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Availability Calendar */}
            {showAvailability && (
                <div className="w-full mt-4 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 min-w-[500px]">
                        {availability.map((day, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-36 cursor-pointer p-3 border rounded-lg shadow-sm transition-all duration-200
                                ${day.date === selectedDate ? "ring-2 ring-blue-600" : ""}
                                ${day.status === "available" ? "bg-green-50" : "bg-red-50"}`}
                                onClick={() => day.status === "available" && setSelectedDate(day.date)}
                            >
                                <p className="text-sm font-semibold">{new Date(day.date).toDateString()}</p>
                                <p className={`text-xs font-medium ${day.status === "available" ? "text-green-700" : "text-red-700"}`}>
                                    {day.status === "available" ? "Available" : "Sold Out"}
                                </p>
                                {day.status === "available" ? (
                                    <>
                                        <p className="text-sm mt-1 line-through text-gray-500">₹{day.originalPrice}</p>
                                        <p className="text-lg font-bold text-green-700">₹{day.discountedPrice}</p>
                                        <p className="text-xs font-semibold text-red-500">{day.discount}% off</p>
                                    </>
                                ) : (
                                    <p className="text-sm font-semibold mt-4 text-red-400">N/A</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 p-2 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
                        <StepperHeader currentStep={step} />

                        {/* Step 1 */}
                        {step === 1 && (
                            <>
                                <h3 className="text-xl font-bold mb-4">Booking Details</h3>
                                <label className="block mb-1 text-sm font-medium">Booking Type</label>
                                <select
                                    value={bookingType}
                                    onChange={(e) => setBookingType(e.target.value)}
                                    className="w-full mb-4 border p-2 rounded"
                                >
                                    <option value="individual">Individual</option>
                                    <option value="group">Group</option>
                                </select>
                                <label className="block mb-1 text-sm font-medium">Guests</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={people}
                                    onChange={(e) => setPeople(Number(e.target.value))}
                                    className="w-full mb-4 border p-2 rounded"
                                />
                                <div className="flex justify-between">
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setStep(2)}>Next</button>
                                </div>
                            </>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <>
                                <h3 className="text-xl font-bold mb-4">Review Booking</h3>
                                <div className="mb-4 text-sm space-y-2">
                                    <p><strong>Booking Type:</strong> {bookingType}</p>
                                    <p><strong>Guests:</strong> {people}</p>
                                    {selectedDate && (
                                        <>
                                            <p><strong>Check-in:</strong> {formatDate(checkInDate)}</p>
                                            <p><strong>Check-out:</strong> {formatDate(checkOutDate)}</p>
                                            <p><strong>Time:</strong> 12:00 PM</p>
                                            <p><strong>Stay Days:</strong> 1</p>
                                        </>
                                    )}
                                    <p><strong>Total Price:</strong> ₹{displayDiscountedPrice * people}</p>
                                </div>
                                <label className="block mb-1 text-sm font-medium">Full Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-3 border p-2 rounded" />
                                <label className="block mb-1 text-sm font-medium">Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-3 border p-2 rounded" />
                                <label className="block mb-1 text-sm font-medium">Phone</label>
                                <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full mb-4 border p-2 rounded" />
                                <div className="flex justify-between">
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setStep(1)}>Back</button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setStep(3)}>Proceed to Payment</button>
                                </div>
                            </>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <>
                                <h3 className="text-xl font-bold mb-4">Payment</h3>
                                <p className="mb-6 text-sm text-gray-600">Integrate a payment gateway here (Stripe, Razorpay, etc.)</p>
                                <button className="w-full bg-green-600 text-white px-4 py-2 rounded" onClick={() => setStep(4)}>Pay & Confirm</button>
                                <button className="text-sm text-blue-600 mt-3" onClick={() => setStep(2)}>Back to Review</button>
                            </>
                        )}

                        {/* Step 4 */}
                        {step === 4 && (
                            <>
                                <h3 className="text-xl font-bold mb-4 text-green-600">Booking Confirmed 🎉</h3>
                                <p className="mb-6">Thanks, {name || "Guest"}! A confirmation has been sent to {email || "your email"}.</p>
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                                    onClick={() => {
                                        setShowModal(false);
                                        setStep(1);
                                    }}
                                >
                                    Close
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
