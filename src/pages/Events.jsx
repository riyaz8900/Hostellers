import React, { useState } from 'react';
import EventsHappens from '../components/common/EventsHappens';
import BookingModal from  '../components/BookingModal'
import PaymentModal from '../components/PaymentModal';
import image1 from '../assets/filteration_btn/hoistel10.webp';
import SimilarProperties from '../components/SimilarProperties';

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userData, setUserData] = useState(null);

  const eventsDetails = [
    {
      image: image1,
      title: "Bangalore HR Summit 2025",
      description: "An annual gathering of HR professionals focusing on the future of work.",
      time: "12 December, 2025",
    },
    {
      image: image1,
      title: "Bangalore Literature Festival",
      description: "A literary extravaganza featuring renowned authors and speakers.",
      time: "14 December, 2025",
    },
     {
      image: image1,
      title: "Bangalore HR Summit 2025",
      description: "An annual gathering of HR professionals focusing on the future of work.",
      time: "12 December, 2025",
    },
    {
      image: image1,
      title: "Bangalore Literature Festival",
      description: "A literary extravaganza featuring renowned authors and speakers.",
      time: "14 December, 2025",
    },
     {
      image: image1,
      title: "Bangalore HR Summit 2025",
      description: "An annual gathering of HR professionals focusing on the future of work.",
      time: "12 December, 2025",
    },
    {
      image: image1,
      title: "Bangalore Literature Festival",
      description: "A literary extravaganza featuring renowned authors and speakers.",
      time: "14 December, 2025",
    },
     {
      image: image1,
      title: "Bangalore HR Summit 2025",
      description: "An annual gathering of HR professionals focusing on the future of work.",
      time: "12 December, 2025",
    },
    {
      image: image1,
      title: "Bangalore Literature Festival",
      description: "A literary extravaganza featuring renowned authors and speakers.",
      time: "14 December, 2025",
    },
     {
      image: image1,
      title: "Bangalore HR Summit 2025",
      description: "An annual gathering of HR professionals focusing on the future of work.",
      time: "12 December, 2025",
    },
    {
      image: image1,
      title: "Bangalore Literature Festival",
      description: "A literary extravaganza featuring renowned authors and speakers.",
      time: "14 December, 2025",
    },

  ];

  const handleBook = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto lg:p-0 p-2">
      <h1 className="text-2xl font-bold mb-4 px-3">Upcoming Events</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {eventsDetails.map((item, index) => (
          <EventsHappens
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            time={item.time}
            onBook={() => handleBook(item)}
          />
        ))}
      </div>

      {showModal && selectedEvent && (
        <BookingModal
          event={selectedEvent}
          onClose={() => setShowModal(false)}
          onPayment={(data) => {
            setUserData(data);
            setShowModal(false);
            setShowPaymentModal(true);
          }}
        />
      )}

      {showPaymentModal && selectedEvent && userData && (
        <PaymentModal
          event={selectedEvent}
          userData={userData}
          onClose={() => setShowPaymentModal(false)}
        />
      )}

      <div className='py-4'>
        <div>
          <h1 className='py-2 text-3xl'>Similar Properties</h1>
        </div>
        <SimilarProperties/>
      </div>
    </div>
  );
}

export default Events;
