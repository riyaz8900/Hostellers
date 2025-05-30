// src/pages/Home.js
import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Offers from '../components/Offers';
import { Link } from 'react-router-dom';
import Destination from '../components/Destination';
import Accordian from '../components/Accordian';
import SimilarProperties from '../components/SimilarProperties';
import { useDispatch, useSelector } from 'react-redux';
import { setHostels, setLoading } from '../features/hostel/hostelSlice';
import CityDateDropdown from '../components/CityDateDropdown';

import offer1 from '../assets/filteration_btn/hosterl13.webp';
import offer2 from '../assets/filteration_btn/hostel14.webp';
import offer3 from '../assets/filteration_btn/hostel18.webp';
import offer4 from '../assets/filteration_btn/hostel19.webp';
import OfferSlider from '../components/OfferSlider';

function Home() {
  const dispatch = useDispatch();
  const { hostels, loading } = useSelector((state) => state.hostel);
  const { filteredHostels } = useSelector((state) => state.search);

 useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch('/data/Data.json');
        const data = await res.json();
        setTimeout(() => {
          dispatch(setHostels(data));
          dispatch(setLoading(false));
        }, 1500);
      } catch (error) {
        console.error('Failed to fetch hostel data', error);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const accordionData = [
    {
      title: 'What is your return policy?',
      content: 'We accept returns within 30 days of purchase.',
    },
    {
      title: 'How do I track my order?',
      content: 'Track it from your account section.',
    },
    {
      title: 'Do you offer support?',
      content: 'Yes, 24/7 via chat and email.',
    },
  ];

  return (
    <div>
      <div>
          <OfferSlider/>
        </div>
      <div className="container-fluid mx-auto py-3 bg-yellow-300">
        
        <div className="container mx-auto lg:p-0 p-2">
          <Banner hostels={hostels} />
        </div>
      </div>

      <div className="container mx-auto py-5">
      {/* <CityDateDropdown /> */}

        <div className="flex items-center my-2 py-3">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Hosteller</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 p-2 lg:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full">
              <p className="text-center text-gray-500 mb-4">Loading hostels...</p>
              {Array.from({ length: 8 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : filteredHostels.length > 0 ? (
            filteredHostels.map((hostel) => (
              <Link to={`/hostel/${hostel.id}`} key={hostel.id}>
                <Card
                  image={hostel.image}
                  title={hostel.title}
                  description={hostel.description}
                  price={hostel.price}
                  roomsView={hostel.roomsView}
                />
              </Link>
            ))
          ) : hostels.length > 0 ? (
            hostels.map((hostel) => (
              <Link to={`/hostel/${hostel.id}`} key={hostel.id}>
                <Card
                  image={hostel.image}
                  title={hostel.title}
                  description={hostel.description}
                  price={hostel.price}
                  roomsView={hostel.roomsView}
                />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No hostels available.
            </p>
          )}
        </div>

        <div className="mt-4">
          <h1 className="text-2xl px-2 py-2">OFFERS FOR YOU</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Offers image={offer1} />
          <Offers image={offer2} />
        </div>

        <div className="mt-4">
          <h1 className="text-2xl px-2 py-2">GROWTH WITH US</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Offers image={offer3} />
          <Offers image={offer4} />
        </div>

        <Destination />

        <div className="flex items-center my-2 py-3">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Similar properties</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <SimilarProperties />

        <div className="p-2 lg:p-0">
          <Accordian items={accordionData} />
        </div>
      </div>
    </div>
  );
}

export default Home;

function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg bg-white p-4 shadow">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-6 bg-gray-300 rounded w-1/3 mt-4" />
    </div>
  );
}