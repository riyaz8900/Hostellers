import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarCheck } from "react-icons/fa";

import hostelImage1 from '../assets/filteration_btn/hoistel10.webp';
import hostelImage3 from '../assets/filteration_btn/hostel5.webp';
import hostelImage4 from '../assets/filteration_btn/hostel1.webp';
import summary from '../assets/filteration_btn/summary.svg'
import Card from './common/Card';
import SimilarProperties from './SimilarProperties';
import CartItem from './CartItem';
import Cart from './Cart';
import Lottie from 'react-lottie';
import animationData from '../../robot-animation.json';
import AvailabilityHeader from './AvailabilityHeader';
import hostels from '/Data.json'
function SelectedRoomsDetails() {
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);

    // Unique IDs to avoid confusion, you can change as needed
    // const hostels = [
    //     {
    //         id: 'koramangala',
    //         image: hostelImage4,
    //         roomsView: [hostelImage3, hostelImage1, hostelImage3],
    //         title: 'Koramangala Hosteller Bangalore',
    //         description: 'Affordable and cozy room with AC and Wi-Fi.',
    //         price: 'Starting @ ₹740/-',
    //         details: `Koramangala is where Bangalore’s pulse beats the fastest. Known for its buzzing cafés, upscale shopping centers, and legendary nightlife, this vibrant neighborhood is a hotspot for startups, tech professionals, and travelers alike. It’s where morning coffee meetings turn into spontaneous pub-hopping nights, and every street hums with an entrepreneurial spirit.`,
    //         moreDetails: `
    //     The Hosteller Bangalore, Koramangala, was our first step into the city, and it remains one of our best-selling properties. Inspired by Bangalore’s futuristic tech culture, the interiors feature suspended chrome car seats, interactive art pieces, and sleek modern design. Whether you're looking for a cozy 4-bed dorm or a spacious private room, we’ve got an option that fits your style. The hostel also features a spacious chill zone with dedicated workation areas and a rooftop terrace perfect for networking or unwinding with fellow travelers.

    //     At The Hosteller, every detail is designed to enhance your stay. The ground floor is all about community, with large common areas for work and socializing. Meanwhile, the first floor brings a touch of the future, with edgy design elements that make every corner Instagram-worthy.

    //     Whether you’re in Bangalore for work, a weekend escape, or just passing through, The Hosteller Bangalore, Koramangala, is where innovation, comfort, and social vibes come together.
    //   `,
    //     },
    //     {
    //         id: 'indiranagar',
    //         image: hostelImage4,
    //         roomsView: [hostelImage4, hostelImage1, hostelImage3],
    //         title: 'Indiranagar Hosteller Bangalore',
    //         description: 'Spacious room with shared kitchen access.',
    //         price: 'Starting @ ₹840/-',
    //         details: `Indiranagar is a lively neighborhood famous for its trendy cafes, pubs, and boutique stores. Perfect for young professionals and creatives, this area blends urban living with a cozy community vibe.`,
    //         moreDetails: `
    //     The Hosteller Indiranagar offers modern amenities and a welcoming atmosphere. Rooms are designed to maximize comfort and functionality, with shared spaces that encourage social interaction. Enjoy the rooftop garden and coworking spaces for an ideal blend of work and play.

    //     Whether you’re here for business or leisure, our Indiranagar hostel is your home away from home.
    //   `,
    //     },
    //     {
    //         id: 'koramangala',
    //         image: hostelImage1,
    //         roomsView: [hostelImage1, hostelImage3, hostelImage4],
    //         title: 'Koramangala Hosteller Bangalore',
    //         description: 'Affordable and cozy room with AC and Wi-Fi.',
    //         price: 'Starting @ ₹740/-',
    //         details: `Koramangala is where Bangalore’s pulse beats the fastest. Known for its buzzing cafés, upscale shopping centers, and legendary nightlife, this vibrant neighborhood is a hotspot for startups, tech professionals, and travelers alike. It’s where morning coffee meetings turn into spontaneous pub-hopping nights, and every street hums with an entrepreneurial spirit.`,
    //         moreDetails: `
    //     The Hosteller Bangalore, Koramangala, was our first step into the city, and it remains one of our best-selling properties. Inspired by Bangalore’s futuristic tech culture, the interiors feature suspended chrome car seats, interactive art pieces, and sleek modern design. Whether you're looking for a cozy 4-bed dorm or a spacious private room, we’ve got an option that fits your style. The hostel also features a spacious chill zone with dedicated workation areas and a rooftop terrace perfect for networking or unwinding with fellow travelers.

    //     At The Hosteller, every detail is designed to enhance your stay. The ground floor is all about community, with large common areas for work and socializing. Meanwhile, the first floor brings a touch of the future, with edgy design elements that make every corner Instagram-worthy.

    //     Whether you’re in Bangalore for work, a weekend escape, or just passing through, The Hosteller Bangalore, Koramangala, is where innovation, comfort, and social vibes come together.
    //   `,
    //     },
    //     {
    //         id: 'indiranagar',
    //         image: hostelImage4,
    //         roomsView: [hostelImage4, hostelImage1, hostelImage3],
    //         title: 'Indiranagar Hosteller Bangalore',
    //         description: 'Spacious room with shared kitchen access.',
    //         price: 'Starting @ ₹840/-',
    //         details: `Indiranagar is a lively neighborhood famous for its trendy cafes, pubs, and boutique stores. Perfect for young professionals and creatives, this area blends urban living with a cozy community vibe.`,
    //         moreDetails: `
    //     The Hosteller Indiranagar offers modern amenities and a welcoming atmosphere. Rooms are designed to maximize comfort and functionality, with shared spaces that encourage social interaction. Enjoy the rooftop garden and coworking spaces for an ideal blend of work and play.

    //     Whether you’re here for business or leisure, our Indiranagar hostel is your home away from home.
    //   `,
    //     },
    //     {
    //         id: 'koramangala',
    //         image: hostelImage1,
    //         roomsView: [hostelImage1, hostelImage3, hostelImage4],
    //         title: 'Koramangala Hosteller Bangalore',
    //         description: 'Affordable and cozy room with AC and Wi-Fi.',
    //         price: 'Starting @ ₹740/-',
    //         details: `Koramangala is where Bangalore’s pulse beats the fastest. Known for its buzzing cafés, upscale shopping centers, and legendary nightlife, this vibrant neighborhood is a hotspot for startups, tech professionals, and travelers alike. It’s where morning coffee meetings turn into spontaneous pub-hopping nights, and every street hums with an entrepreneurial spirit.`,
    //         moreDetails: `
    //     The Hosteller Bangalore, Koramangala, was our first step into the city, and it remains one of our best-selling properties. Inspired by Bangalore’s futuristic tech culture, the interiors feature suspended chrome car seats, interactive art pieces, and sleek modern design. Whether you're looking for a cozy 4-bed dorm or a spacious private room, we’ve got an option that fits your style. The hostel also features a spacious chill zone with dedicated workation areas and a rooftop terrace perfect for networking or unwinding with fellow travelers.

    //     At The Hosteller, every detail is designed to enhance your stay. The ground floor is all about community, with large common areas for work and socializing. Meanwhile, the first floor brings a touch of the future, with edgy design elements that make every corner Instagram-worthy.

    //     Whether you’re in Bangalore for work, a weekend escape, or just passing through, The Hosteller Bangalore, Koramangala, is where innovation, comfort, and social vibes come together.
    //   `,
    //     },
    //     {
    //         id: 'indiranagar',
    //         image: hostelImage4,
    //         roomsView: [hostelImage4, hostelImage1, hostelImage3],
    //         title: 'Indiranagar Hosteller Bangalore',
    //         description: 'Spacious room with shared kitchen access.',
    //         price: 'Starting @ ₹840/-',
    //         details: `Indiranagar is a lively neighborhood famous for its trendy cafes, pubs, and boutique stores. Perfect for young professionals and creatives, this area blends urban living with a cozy community vibe.`,
    //         moreDetails: `
    //     The Hosteller Indiranagar offers modern amenities and a welcoming atmosphere. Rooms are designed to maximize comfort and functionality, with shared spaces that encourage social interaction. Enjoy the rooftop garden and coworking spaces for an ideal blend of work and play.

    //     Whether you’re here for business or leisure, our Indiranagar hostel is your home away from home.
    //   `,
    //     },
    //     {
    //         id: 'koramangala',
    //         image: hostelImage1,
    //         roomsView: [hostelImage1, hostelImage3, hostelImage4],
    //         title: 'Koramangala Hosteller Bangalore',
    //         description: 'Affordable and cozy room with AC and Wi-Fi.',
    //         price: 'Starting @ ₹740/-',
    //         details: `Koramangala is where Bangalore’s pulse beats the fastest. Known for its buzzing cafés, upscale shopping centers, and legendary nightlife, this vibrant neighborhood is a hotspot for startups, tech professionals, and travelers alike. It’s where morning coffee meetings turn into spontaneous pub-hopping nights, and every street hums with an entrepreneurial spirit.`,
    //         moreDetails: `
    //     The Hosteller Bangalore, Koramangala, was our first step into the city, and it remains one of our best-selling properties. Inspired by Bangalore’s futuristic tech culture, the interiors feature suspended chrome car seats, interactive art pieces, and sleek modern design. Whether you're looking for a cozy 4-bed dorm or a spacious private room, we’ve got an option that fits your style. The hostel also features a spacious chill zone with dedicated workation areas and a rooftop terrace perfect for networking or unwinding with fellow travelers.

    //     At The Hosteller, every detail is designed to enhance your stay. The ground floor is all about community, with large common areas for work and socializing. Meanwhile, the first floor brings a touch of the future, with edgy design elements that make every corner Instagram-worthy.

    //     Whether you’re in Bangalore for work, a weekend escape, or just passing through, The Hosteller Bangalore, Koramangala, is where innovation, comfort, and social vibes come together.
    //   `,
    //     },
    //     {
    //         id: 'indiranagar',
    //         image: hostelImage4,
    //         roomsView: [hostelImage4, hostelImage1, hostelImage3],
    //         title: 'Indiranagar Hosteller Bangalore',
    //         description: 'Spacious room with shared kitchen access.',
    //         price: 'Starting @ ₹840/-',
    //         details: `Indiranagar is a lively neighborhood famous for its trendy cafes, pubs, and boutique stores. Perfect for young professionals and creatives, this area blends urban living with a cozy community vibe.`,
    //         moreDetails: `
    //     The Hosteller Indiranagar offers modern amenities and a welcoming atmosphere. Rooms are designed to maximize comfort and functionality, with shared spaces that encourage social interaction. Enjoy the rooftop garden and coworking spaces for an ideal blend of work and play.

    //     Whether you’re here for business or leisure, our Indiranagar hostel is your home away from home.
    //   `,
    //     },
    //     {
    //         id: 'koramangala',
    //         image: hostelImage1,
    //         roomsView: [hostelImage1, hostelImage3, hostelImage4],
    //         title: 'Koramangala Hosteller Bangalore',
    //         description: 'Affordable and cozy room with AC and Wi-Fi.',
    //         price: 'Starting @ ₹740/-',
    //         details: `Koramangala is where Bangalore’s pulse beats the fastest. Known for its buzzing cafés, upscale shopping centers, and legendary nightlife, this vibrant neighborhood is a hotspot for startups, tech professionals, and travelers alike. It’s where morning coffee meetings turn into spontaneous pub-hopping nights, and every street hums with an entrepreneurial spirit.`,
    //         moreDetails: `
    //     The Hosteller Bangalore, Koramangala, was our first step into the city, and it remains one of our best-selling properties. Inspired by Bangalore’s futuristic tech culture, the interiors feature suspended chrome car seats, interactive art pieces, and sleek modern design. Whether you're looking for a cozy 4-bed dorm or a spacious private room, we’ve got an option that fits your style. The hostel also features a spacious chill zone with dedicated workation areas and a rooftop terrace perfect for networking or unwinding with fellow travelers.

    //     At The Hosteller, every detail is designed to enhance your stay. The ground floor is all about community, with large common areas for work and socializing. Meanwhile, the first floor brings a touch of the future, with edgy design elements that make every corner Instagram-worthy.

    //     Whether you’re in Bangalore for work, a weekend escape, or just passing through, The Hosteller Bangalore, Koramangala, is where innovation, comfort, and social vibes come together.
    //   `,
    //     },
    //     {
    //         id: 'indiranagar',
    //         image: hostelImage4,
    //         roomsView: [hostelImage4, hostelImage1, hostelImage3],
    //         title: 'Indiranagar Hosteller Bangalore',
    //         description: 'Spacious room with shared kitchen access.',
    //         price: 'Starting @ ₹840/-',
    //         details: `Indiranagar is a lively neighborhood famous for its trendy cafes, pubs, and boutique stores. Perfect for young professionals and creatives, this area blends urban living with a cozy community vibe.`,
    //         moreDetails: `
    //     The Hosteller Indiranagar offers modern amenities and a welcoming atmosphere. Rooms are designed to maximize comfort and functionality, with shared spaces that encourage social interaction. Enjoy the rooftop garden and coworking spaces for an ideal blend of work and play.

    //     Whether you’re here for business or leisure, our Indiranagar hostel is your home away from home.
    //   `,
    //     },
    // ];
console.log(hostels)
    const defaultOptions = {
        loop: true,
        autoplay: true, // Animation will autoplay
        animationData: animationData, // Lottie JSON data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    // Find the hostel by id from param
    const selectedHostel = hostels.find(h => h.id === id);

    if (!selectedHostel) {

        return <div className='container mx-auto px-3'>
            <nav className="text-gray-600 mb-4 text-sm" aria-label="Breadcrumb">
                <ol className="list-reset flex">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className="mx-2"> / </span>
                    </li>


                    {/* <li className="text-gray-800 font-semibold">{destinations.title}</li> */}
                </ol>
            </nav>
            <div className="container flex-col mx-auto flex items-center justify-center py-4 h-screen text-sm ">

                <h1 className='text-center lg:text-2xl'>Hostel not found</h1>
                <div className="mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                    {/* Lottie animation */}
                    <Lottie options={defaultOptions} height={300} width={300} />
                </div>
            </div>;
        </div>
    }

    const roomData = [
        {
            image: hostelImage1,
            title: 'Bed in 8 Bed Mixed Dormitory with Balcony',
            guests: 1,
            originalPrice: 522,
            discountedPrice: 339,
            discountLabel: '35% OFF',
            duration: '1 Night',
            description: 'Spacious 216 sq ft room with comfy bunk beds',
            soldOut: true,
            addBed: true
        },
        {
            image: hostelImage3,
            title: 'Private Room with Sea View',
            guests: 2,
            originalPrice: 1200,
            discountedPrice: 900,
            discountLabel: '25% OFF',
            duration: '2 Nights',
            description: 'Enjoy a private room with a sea view and balcony',
            soldOut: false,
            addBed: true
        },
        {
            image: hostelImage1,
            title: 'Bed in 6 Bed Mixed Dormitory with Balcony',
            guests: 1,
            originalPrice: 522,
            discountedPrice: 339,
            discountLabel: '35% OFF',
            duration: '1 Night',
            description: 'Spacious 216 sq ft room with comfy bunk beds',
            soldOut: true,
            addBed: true
        },
        {
            image: hostelImage1,
            title: 'Bed in 4 Bed Dormitory ',
            guests: 1,
            originalPrice: 522,
            discountedPrice: 339,
            discountLabel: '35% OFF',
            duration: '1 Night',
            description: 'Spacious 216 sq ft room with comfy bunk beds',
            soldOut: true,
            addBed: true
        },
        {
            image: hostelImage4,
            title: 'Private Room with Sea View',
            guests: 2,
            originalPrice: 1200,
            discountedPrice: 900,
            discountLabel: '25% OFF',
            duration: '2 Nights',
            description: 'Enjoy a private room with a sea view and balcony',
            soldOut: false,
            addBed: false
        },

    ];


    return (
        <div className="container mx-auto py-4 lg:p-0 p-2">
            <nav className="text-gray-600 mb-4 text-sm" aria-label="Breadcrumb">
                <ol className="list-reset flex">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className="mx-2"> / </span>
                    </li>


                    <li className="text-gray-800 font-semibold">{selectedHostel.title}</li>
                </ol>
            </nav>
            <h1 className="text-3xl font-bold mb-4">{selectedHostel.title}</h1>

            <div className="grid grid-cols-1 py-4 lg:grid-cols-4 gap-4">
                {/* Main Image (takes 3/4 width on large screens) */}
                <div className="lg:col-span-3">
                    <img
                        src={selectedHostel.image}
                        alt={selectedHostel.title}
                        className="w-full h-full aspect-video object-cover rounded"
                    />
                </div>

                {/* Side Images in vertical stack */}
                 <div className="flex flex-col gap-4">
    {selectedHostel.rooms?.map((room, i) => (
      <img
        key={i}
        src={room.image}
        alt={room.title}
        className="w-full aspect-video object-cover rounded"
      />
    ))}
  </div>
            </div>

            <div className="flex flex-wrap py-2 lg:w-9/12">
                <p className="text-gray-700 p-1">{selectedHostel.details}</p>

                <div
                    className={`transition-all duration-500 origin-top ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
                        }`}
                >
                    {selectedHostel.moreDetails.split('\n').map((line, idx) =>
                        line.trim() ? (
                            <p key={idx} className="text-gray-700 p-1">
                                {line.trim()}
                            </p>
                        ) : null
                    )}
                </div>
            </div>

            <div className="py-2">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-gray-100 rounded px-4 py-2 hover:text-blue-800 transition"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>

            <div className="mt-4 text-xl font-semibold py-3">{selectedHostel.price}</div>



            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-4xl'>Availablity</h1>

                    <AvailabilityHeader />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="col-span-1 space-y-4">
                    {roomData.map((room, index) => (
                        <Card key={index} {...room} />
                    ))}
                </div>


                <div className="col-span-1 relative">
                    <div className="sticky top-4">
                        <img src={summary} alt="Summary" className="w-full rounded-lg shadow-md" />
                        {/* <Cart /> */}
                    </div>
                </div>
            </div>


            <div className='py-3'>
                <h1 className='text-3xl py-2'>Similar Properties</h1>
                <SimilarProperties />

            </div>
        </div>
    );
}

export default SelectedRoomsDetails;

