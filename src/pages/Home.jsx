import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import hostelImage1 from '../assets/filteration_btn/hoistel10.webp'
import hostelImage2 from '../assets/filteration_btn/hostel.webp'
import hostelImage3 from '../assets/filteration_btn/hostel5.webp'
import hostelImage4 from '../assets/filteration_btn/hostel1.webp'
import Offers from '../components/Offers'
import offer1 from '../assets/filteration_btn/hosterl13.webp'
import offer2 from '../assets/filteration_btn/hostel14.webp'
import offer3 from '../assets/filteration_btn/hostel18.webp'
import offer4 from '../assets/filteration_btn/hostel19.webp'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Destination from '../components/Destination'
import Accordian from '../components/Accordian'
import SimilarProperties from '../components/SimilarProperties'





function Home() {
    const [loading, setLoading] = useState(true);
    const [hostel, setHostels] = useState([]);
    hostel;
    useEffect(() => {
        setTimeout(() => {
            setHostels(data);
            setLoading(false);
        }, 1500);
    }, []);

    const data = [
        { title: 'What is your return policy?', content: 'We accept returns within 30 days of purchase.' },
        { title: 'How do I track my order?', content: 'Track it from your account section.' },
        { title: 'Do you offer support?', content: 'Yes, 24/7 via chat and email.' },
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])
    // if (loading) {
    //     return <Loader />

    // }


    const hostels = [
        {
            id: 'kormangla',
            image: hostelImage1,
            roomsView: [hostelImage1, hostelImage3, hostelImage4],
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage2,
            title: 'Indiranagar Hosteller Bangalore',
            roomsView: [hostelImage1, hostelImage2, hostelImage4],

            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage3,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage4,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage2,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage3,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage1,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage4,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage1,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage2,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage1,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage2,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage3,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage4,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage2,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage3,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage1,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage4,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
        {
            id: 'kormangla',
            image: hostelImage1,
            title: 'Kormangla Hosteller Bangalore',
            description: 'Affordable and cozy room with AC and Wi-Fi.',
            price: 'Starting @ ₹740/-'
        },
        {
            id: 'indiranagar',
            image: hostelImage2,
            title: 'Indiranagar Hosteller Bangalore',
            description: 'Spacious room with shared kitchen access.',
            price: 'Starting @ ₹840/-'
        },
    ];
    return (
        <div className=''>
            <div className='container-fluid mx-auto py-3 bg-yellow-300'>
                <div className='container mx-auto lg:p-0 p-2'>
                    <Banner />
                </div>

            </div>
            <div className="container mx-auto py-5">

                <div className="flex items-center my-2 py-3">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Hosteller</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <div className="grid grid-cols-1 p-2 lg:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading
                        ? Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
                        : hostels.map((hostel) => (
                            <Link to={`/hostel/${hostel.id}`} key={hostel.id}>
                                <Card
                                    image={hostel.image}
                                    title={hostel.title}
                                    description={hostel.description}
                                    price={hostel.price}
                                    roomsView={hostel.roomsView}
                                />
                            </Link>
                        ))}
                </div>


                <div className='mt-4'>
                    <h1 className='text-2xl px-2 py-2'>OFFERS FOR YOU</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <Offers image={offer1} />
                    <Offers image={offer2} />
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl px-2 py-2'>GROWTH WITH US</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <Offers image={offer3} />
                    <Offers image={offer4} />
                </div>
                <div>
                    <Destination />
                </div>

                <div>
                    <div className="flex items-center my-2 py-3">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Similar properties</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>
                    <SimilarProperties />
                </div>
                <div className="p-2 lg:p-0">
                    <Accordian items={data} />
                </div>
            </div>
        </div>
    )
}

export default Home

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
