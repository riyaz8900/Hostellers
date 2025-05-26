import React from 'react'
import { Link, } from 'react-router-dom';

function Destination() {
    const destinations = [
        {
            "id": "Agra",
            "title": "Agra",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?agra",
            "images": [
                "https://source.unsplash.com/400x300/?agra,1",
                "https://source.unsplash.com/400x300/?agra,2",
                "https://source.unsplash.com/400x300/?agra,3"
            ]
        },
        {
            "id": "Goa",
            "title": "Goa",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?goa",
            "images": [
                "https://source.unsplash.com/400x300/?goa,1",
                "https://source.unsplash.com/400x300/?goa,2",
                "https://source.unsplash.com/400x300/?goa,3"
            ]
        },
        {
            "id": "Manali",
            "title": "Manali",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?manali",
            "images": [
                "https://source.unsplash.com/400x300/?manali,1",
                "https://source.unsplash.com/400x300/?manali,2",
                "https://source.unsplash.com/400x300/?manali,3"
            ]
        },
        {
            "id": "Udaipur",
            "title": "Udaipur",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?udaipur",
            "images": [
                "https://source.unsplash.com/400x300/?udaipur,1",
                "https://source.unsplash.com/400x300/?udaipur,2",
                "https://source.unsplash.com/400x300/?udaipur,3"
            ]
        },
        {
            "id": "Jaipur",
            "title": "Jaipur",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?jaipur",
            "images": [
                "https://source.unsplash.com/400x300/?jaipur,1",
                "https://source.unsplash.com/400x300/?jaipur,2",
                "https://source.unsplash.com/400x300/?jaipur,3"
            ]
        },
        {
            "id": "Delhi",
            "title": "Delhi",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?delhi",
            "images": [
                "https://source.unsplash.com/400x300/?delhi,1",
                "https://source.unsplash.com/400x300/?delhi,2",
                "https://source.unsplash.com/400x300/?delhi,3"
            ]
        },
        {
            "id": "Mumbai",
            "title": "Mumbai",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?mumbai",
            "images": [
                "https://source.unsplash.com/400x300/?mumbai,1",
                "https://source.unsplash.com/400x300/?mumbai,2",
                "https://source.unsplash.com/400x300/?mumbai,3"
            ]
        },
        {
            "id": "Chennai",
            "title": "Chennai",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?chennai",
            "images": [
                "https://source.unsplash.com/400x300/?chennai,1",
                "https://source.unsplash.com/400x300/?chennai,2",
                "https://source.unsplash.com/400x300/?chennai,3"
            ]
        },
        {
            "id": "Bangalore",
            "title": "Bangalore",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "2 Days",
            "mainImage": "https://source.unsplash.com/featured/?bangalore",
            "images": [
                "https://source.unsplash.com/400x300/?bangalore,1",
                "https://source.unsplash.com/400x300/?bangalore,2",
                "https://source.unsplash.com/400x300/?bangalore,3"
            ]
        },
        {
            "id": "Hyderabad",
            "title": "Hyderabad",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?hyderabad",
            "images": [
                "https://source.unsplash.com/400x300/?hyderabad,1",
                "https://source.unsplash.com/400x300/?hyderabad,2",
                "https://source.unsplash.com/400x300/?hyderabad,3"
            ]
        },
        {
            "id": "Kolkata",
            "title": "Kolkata",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?kolkata",
            "images": [
                "https://source.unsplash.com/400x300/?kolkata,1",
                "https://source.unsplash.com/400x300/?kolkata,2",
                "https://source.unsplash.com/400x300/?kolkata,3"
            ]
        },
        {
            "id": "Pune",
            "title": "Pune",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?pune",
            "images": [
                "https://source.unsplash.com/400x300/?pune,1",
                "https://source.unsplash.com/400x300/?pune,2",
                "https://source.unsplash.com/400x300/?pune,3"
            ]
        },
        {
            "id": "Amritsar",
            "title": "Amritsar",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "2 Days",
            "mainImage": "https://source.unsplash.com/featured/?amritsar",
            "images": [
                "https://source.unsplash.com/400x300/?amritsar,1",
                "https://source.unsplash.com/400x300/?amritsar,2",
                "https://source.unsplash.com/400x300/?amritsar,3"
            ]
        },
        {
            "id": "Varanasi",
            "title": "Varanasi",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?varanasi",
            "images": [
                "https://source.unsplash.com/400x300/?varanasi,1",
                "https://source.unsplash.com/400x300/?varanasi,2",
                "https://source.unsplash.com/400x300/?varanasi,3"
            ]
        },
        {
            "id": "Shimla",
            "title": "Shimla",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?shimla",
            "images": [
                "https://source.unsplash.com/400x300/?shimla,1",
                "https://source.unsplash.com/400x300/?shimla,2",
                "https://source.unsplash.com/400x300/?shimla,3"
            ]
        },
        {
            "id": "Mussoorie",
            "title": "Mussoorie",
            "description": "Offers a perfect blend of tradition, architecture, and nature.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?mussoorie",
            "images": [
                "https://source.unsplash.com/400x300/?mussoorie,1",
                "https://source.unsplash.com/400x300/?mussoorie,2",
                "https://source.unsplash.com/400x300/?mussoorie,3"
            ]
        },
        {
            "id": "Leh",
            "title": "Leh",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?leh",
            "images": [
                "https://source.unsplash.com/400x300/?leh,1",
                "https://source.unsplash.com/400x300/?leh,2",
                "https://source.unsplash.com/400x300/?leh,3"
            ]
        },
        {
            "id": "Rishikesh",
            "title": "Rishikesh",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?rishikesh",
            "images": [
                "https://source.unsplash.com/400x300/?rishikesh,1",
                "https://source.unsplash.com/400x300/?rishikesh,2",
                "https://source.unsplash.com/400x300/?rishikesh,3"
            ]
        },
        {
            "id": "Jodhpur",
            "title": "Jodhpur",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?jodhpur",
            "images": [
                "https://source.unsplash.com/400x300/?jodhpur,1",
                "https://source.unsplash.com/400x300/?jodhpur,2",
                "https://source.unsplash.com/400x300/?jodhpur,3"
            ]
        },
        {
            "id": "Jaisalmer",
            "title": "Jaisalmer",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?jaisalmer",
            "images": [
                "https://source.unsplash.com/400x300/?jaisalmer,1",
                "https://source.unsplash.com/400x300/?jaisalmer,2",
                "https://source.unsplash.com/400x300/?jaisalmer,3"
            ]
        },
        {
            "id": "Mysore",
            "title": "Mysore",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?mysore",
            "images": [
                "https://source.unsplash.com/400x300/?mysore,1",
                "https://source.unsplash.com/400x300/?mysore,2",
                "https://source.unsplash.com/400x300/?mysore,3"
            ]
        },
        {
            "id": "Ooty",
            "title": "Ooty",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?ooty",
            "images": [
                "https://source.unsplash.com/400x300/?ooty,1",
                "https://source.unsplash.com/400x300/?ooty,2",
                "https://source.unsplash.com/400x300/?ooty,3"
            ]
        },
        {
            "id": "Munnar",
            "title": "Munnar",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?munnar",
            "images": [
                "https://source.unsplash.com/400x300/?munnar,1",
                "https://source.unsplash.com/400x300/?munnar,2",
                "https://source.unsplash.com/400x300/?munnar,3"
            ]
        },
        {
            "id": "Alleppey",
            "title": "Alleppey",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "2 Days",
            "mainImage": "https://source.unsplash.com/featured/?alleppey",
            "images": [
                "https://source.unsplash.com/400x300/?alleppey,1",
                "https://source.unsplash.com/400x300/?alleppey,2",
                "https://source.unsplash.com/400x300/?alleppey,3"
            ]
        },
        {
            "id": "Kochi",
            "title": "Kochi",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?kochi",
            "images": [
                "https://source.unsplash.com/400x300/?kochi,1",
                "https://source.unsplash.com/400x300/?kochi,2",
                "https://source.unsplash.com/400x300/?kochi,3"
            ]
        },
        {
            "id": "Hampi",
            "title": "Hampi",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?hampi",
            "images": [
                "https://source.unsplash.com/400x300/?hampi,1",
                "https://source.unsplash.com/400x300/?hampi,2",
                "https://source.unsplash.com/400x300/?hampi,3"
            ]
        },
        {
            "id": "Gokarna",
            "title": "Gokarna",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?gokarna",
            "images": [
                "https://source.unsplash.com/400x300/?gokarna,1",
                "https://source.unsplash.com/400x300/?gokarna,2",
                "https://source.unsplash.com/400x300/?gokarna,3"
            ]
        },
        {
            "id": "Lonavala",
            "title": "Lonavala",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?lonavala",
            "images": [
                "https://source.unsplash.com/400x300/?lonavala,1",
                "https://source.unsplash.com/400x300/?lonavala,2",
                "https://source.unsplash.com/400x300/?lonavala,3"
            ]
        },
        {
            "id": "Mahabaleshwar",
            "title": "Mahabaleshwar",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?mahabaleshwar",
            "images": [
                "https://source.unsplash.com/400x300/?mahabaleshwar,1",
                "https://source.unsplash.com/400x300/?mahabaleshwar,2",
                "https://source.unsplash.com/400x300/?mahabaleshwar,3"
            ]
        },
        {
            "id": "Mount Abu",
            "title": "Mount Abu",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?mount abu",
            "images": [
                "https://source.unsplash.com/400x300/?mount abu,1",
                "https://source.unsplash.com/400x300/?mount abu,2",
                "https://source.unsplash.com/400x300/?mount abu,3"
            ]
        },
        {
            "id": "Nainital",
            "title": "Nainital",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?nainital",
            "images": [
                "https://source.unsplash.com/400x300/?nainital,1",
                "https://source.unsplash.com/400x300/?nainital,2",
                "https://source.unsplash.com/400x300/?nainital,3"
            ]
        },
        {
            "id": "Kodaikanal",
            "title": "Kodaikanal",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?kodaikanal",
            "images": [
                "https://source.unsplash.com/400x300/?kodaikanal,1",
                "https://source.unsplash.com/400x300/?kodaikanal,2",
                "https://source.unsplash.com/400x300/?kodaikanal,3"
            ]
        },
        {
            "id": "Ranikhet",
            "title": "Ranikhet",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?ranikhet",
            "images": [
                "https://source.unsplash.com/400x300/?ranikhet,1",
                "https://source.unsplash.com/400x300/?ranikhet,2",
                "https://source.unsplash.com/400x300/?ranikhet,3"
            ]
        },
        {
            "id": "Bhopal",
            "title": "Bhopal",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?bhopal",
            "images": [
                "https://source.unsplash.com/400x300/?bhopal,1",
                "https://source.unsplash.com/400x300/?bhopal,2",
                "https://source.unsplash.com/400x300/?bhopal,3"
            ]
        },
        {
            "id": "Indore",
            "title": "Indore",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?indore",
            "images": [
                "https://source.unsplash.com/400x300/?indore,1",
                "https://source.unsplash.com/400x300/?indore,2",
                "https://source.unsplash.com/400x300/?indore,3"
            ]
        },
        {
            "id": "Chandigarh",
            "title": "Chandigarh",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?chandigarh",
            "images": [
                "https://source.unsplash.com/400x300/?chandigarh,1",
                "https://source.unsplash.com/400x300/?chandigarh,2",
                "https://source.unsplash.com/400x300/?chandigarh,3"
            ]
        },
        {
            "id": "Bhubaneswar",
            "title": "Bhubaneswar",
            "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
            "time": "2 Days",
            "mainImage": "https://source.unsplash.com/featured/?bhubaneswar",
            "images": [
                "https://source.unsplash.com/400x300/?bhubaneswar,1",
                "https://source.unsplash.com/400x300/?bhubaneswar,2",
                "https://source.unsplash.com/400x300/?bhubaneswar,3"
            ]
        },
        {
            "id": "Puri",
            "title": "Puri",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?puri",
            "images": [
                "https://source.unsplash.com/400x300/?puri,1",
                "https://source.unsplash.com/400x300/?puri,2",
                "https://source.unsplash.com/400x300/?puri,3"
            ]
        },
        {
            "id": "Srinagar",
            "title": "Srinagar",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?srinagar",
            "images": [
                "https://source.unsplash.com/400x300/?srinagar,1",
                "https://source.unsplash.com/400x300/?srinagar,2",
                "https://source.unsplash.com/400x300/?srinagar,3"
            ]
        },
        {
            "id": "Gulmarg",
            "title": "Gulmarg",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?gulmarg",
            "images": [
                "https://source.unsplash.com/400x300/?gulmarg,1",
                "https://source.unsplash.com/400x300/?gulmarg,2",
                "https://source.unsplash.com/400x300/?gulmarg,3"
            ]
        },
        {
            "id": "Darjeeling",
            "title": "Darjeeling",
            "description": "Offers a perfect blend of tradition, architecture, and nature.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?darjeeling",
            "images": [
                "https://source.unsplash.com/400x300/?darjeeling,1",
                "https://source.unsplash.com/400x300/?darjeeling,2",
                "https://source.unsplash.com/400x300/?darjeeling,3"
            ]
        },
        {
            "id": "Gangtok",
            "title": "Gangtok",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?gangtok",
            "images": [
                "https://source.unsplash.com/400x300/?gangtok,1",
                "https://source.unsplash.com/400x300/?gangtok,2",
                "https://source.unsplash.com/400x300/?gangtok,3"
            ]
        },
        {
            "id": "Shillong",
            "title": "Shillong",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "3 Days",
            "mainImage": "https://source.unsplash.com/featured/?shillong",
            "images": [
                "https://source.unsplash.com/400x300/?shillong,1",
                "https://source.unsplash.com/400x300/?shillong,2",
                "https://source.unsplash.com/400x300/?shillong,3"
            ]
        },
        {
            "id": "Tawang",
            "title": "Tawang",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?tawang",
            "images": [
                "https://source.unsplash.com/400x300/?tawang,1",
                "https://source.unsplash.com/400x300/?tawang,2",
                "https://source.unsplash.com/400x300/?tawang,3"
            ]
        },
        {
            "id": "Kaziranga",
            "title": "Kaziranga",
            "description": "A popular spot for nature lovers and adventure seekers.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?kaziranga",
            "images": [
                "https://source.unsplash.com/400x300/?kaziranga,1",
                "https://source.unsplash.com/400x300/?kaziranga,2",
                "https://source.unsplash.com/400x300/?kaziranga,3"
            ]
        },
        {
            "id": "Bikaner",
            "title": "Bikaner",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "2 Days",
            "mainImage": "https://source.unsplash.com/featured/?bikaner",
            "images": [
                "https://source.unsplash.com/400x300/?bikaner,1",
                "https://source.unsplash.com/400x300/?bikaner,2",
                "https://source.unsplash.com/400x300/?bikaner,3"
            ]
        },
        {
            "id": "Ajmer",
            "title": "Ajmer",
            "description": "Famous for its vibrant atmosphere and historic landmarks.",
            "time": "4-6 Days",
            "mainImage": "https://source.unsplash.com/featured/?ajmer",
            "images": [
                "https://source.unsplash.com/400x300/?ajmer,1",
                "https://source.unsplash.com/400x300/?ajmer,2",
                "https://source.unsplash.com/400x300/?ajmer,3"
            ]
        },
        {
            "id": "Dwarka",
            "title": "Dwarka",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "2-3 Days",
            "mainImage": "https://source.unsplash.com/featured/?dwarka",
            "images": [
                "https://source.unsplash.com/400x300/?dwarka,1",
                "https://source.unsplash.com/400x300/?dwarka,2",
                "https://source.unsplash.com/400x300/?dwarka,3"
            ]
        },
        {
            "id": "Ranakpur",
            "title": "Ranakpur",
            "description": "Renowned for spiritual experiences and rich history.",
            "time": "1-2 Days",
            "mainImage": "https://source.unsplash.com/featured/?ranakpur",
            "images": [
                "https://source.unsplash.com/400x300/?ranakpur,1",
                "https://source.unsplash.com/400x300/?ranakpur,2",
                "https://source.unsplash.com/400x300/?ranakpur,3"
            ]
        },
        {
            "id": "Chittorgarh",
            "title": "Chittorgarh",
            "description": "A serene getaway with lush landscapes and peaceful surroundings.",
            "time": "3-5 Days",
            "mainImage": "https://source.unsplash.com/featured/?chittorgarh",
            "images": [
                "https://source.unsplash.com/400x300/?chittorgarh,1",
                "https://source.unsplash.com/400x300/?chittorgarh,2",
                "https://source.unsplash.com/400x300/?chittorgarh,3"
            ]
        }
    ]

    return (
        <div className='p-2 lg:p-0'>
            <div className="flex items-center my-2 py-3">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Destinations</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className='grid grid-cols-3 p-2 lg:p-0 lg:grid-cols-8 md:grid-cols-4 gap-1'>

                {
                    destinations.map((item) => {
                        return (
                            <>
                                <Link to={`destination/cities/${item.id}`}>
                                    <li className='list-none cursor-pointer hover:underline '>{item.title}</li>

                                </Link>
                                {/* <li className='list-none cursor-pointer hover:underline '>{item}</li> */}
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Destination
