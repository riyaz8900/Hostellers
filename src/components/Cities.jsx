import React from 'react'
import { Link, useParams } from 'react-router-dom';
import image1 from '../assets/filteration_btn/hoistel10.webp'
import image2 from '../assets/filteration_btn/hostel14.webp'
import image3 from '../assets/filteration_btn/hostel7.jpeg'
import SimilarProperties from './SimilarProperties';
import Slider from './common/Slider';
import CityCard from './common/CityCard';
import imagearray from '../assets/filteration_btn/colive.svg'

function Cities() {
  const destinations = [
    {
      "id": "Agra",
      "title": "Agra",
      "description": "Famous for its vibrant atmosphere and historic landmarks.Agra is situated on the banks of the Yamuna and has a rich history that is etched in the many tombs and structures. Located around 200 km from the capital city of Delhi, Agra is famous for one of the seven wonders of the world, the Taj Mahal. Agra offers endless options for foodies and shopaholics.Agra is situated on the banks of the Yamuna and has a rich history that is etched in the many tombs and structures. Located around 200 km from the capital city of Delhi, Agra is famous for one of the seven wonders of the world, the Taj Mahal. Agra offers endless options for foodies and shopaholics.",
      "time": "3-5 Days",
      "price": "987",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Goa",
      "title": "Goa",
      "description": "Renowned for spiritual experiences and rich history.Goa proudly stretches along a stunning 104-kilometre coastline, where the golden sands meet the shimmering waters of the Arabian Sea, offering a paradise for beach lovers and adventure seekers alike. Apart from beaches, Goa is home to Centuries-old churches that echo its Portuguese past, lively night markets showcase artistic flair, and bustling cafes exude city energy.",
      "time": "4-6 Days",
      "price": "887",
      "mainImage": image3,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Manali",
      "title": "Manali",
      "description": "Famous for its vibrant atmosphere and historic landmarks.Surrounded by mammoth Himalayan peaks, a gushing Beas river and several hills— Manali is the ultimate destination for adventure lovers, nature lovers and history buffs alike. The town is charming and full of cafes, markets, heritage monuments, winter sports and hikes to check out.",
      "time": "1-2 Days",
      "mainImage": image2,
      "images": [
        image3,
        image1,
        image2
      ]
    },
    {
      "id": "Udaipur",
      "title": "Udaipur",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Jaipur",
      "title": "Jaipur",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3-5 Days",
      "mainImage": image2,
      "images": [
        image3,
        image1,
        image2
      ]
    },
    {
      "id": "Delhi",
      "title": "Delhi",
      "description": "Famous for its vibrant atmosphere and historic landmarks.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Mumbai",
      "title": "Mumbai",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Chennai",
      "title": "Chennai",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Bangalore",
      "title": "Bangalore",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Hyderabad",
      "title": "Hyderabad",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Kolkata",
      "title": "Kolkata",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Pune",
      "title": "Pune",
      "description": "Famous for its vibrant atmosphere and historic landmarks.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Amritsar",
      "title": "Amritsar",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Varanasi",
      "title": "Varanasi",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Shimla",
      "title": "Shimla",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Mussoorie",
      "title": "Mussoorie",
      "description": "Offers a perfect blend of tradition, architecture, and nature.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Leh",
      "title": "Leh",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Rishikesh",
      "title": "Rishikesh",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Jodhpur",
      "title": "Jodhpur",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Jaisalmer",
      "title": "Jaisalmer",
      "description": "Famous for its vibrant atmosphere and historic landmarks.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Mysore",
      "title": "Mysore",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Ooty",
      "title": "Ooty",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Munnar",
      "title": "Munnar",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Alleppey",
      "title": "Alleppey",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Kochi",
      "title": "Kochi",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Hampi",
      "title": "Hampi",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Gokarna",
      "title": "Gokarna",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Lonavala",
      "title": "Lonavala",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Mahabaleshwar",
      "title": "Mahabaleshwar",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Mount Abu",
      "title": "Mount Abu",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Nainital",
      "title": "Nainital",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Kodaikanal",
      "title": "Kodaikanal",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Ranikhet",
      "title": "Ranikhet",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Bhopal",
      "title": "Bhopal",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Indore",
      "title": "Indore",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Chandigarh",
      "title": "Chandigarh",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Bhubaneswar",
      "title": "Bhubaneswar",
      "description": "A beautiful destination known for its cultural heritage and scenic beauty.",
      "time": "2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Puri",
      "title": "Puri",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Srinagar",
      "title": "Srinagar",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Gulmarg",
      "title": "Gulmarg",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Darjeeling",
      "title": "Darjeeling",
      "description": "Offers a perfect blend of tradition, architecture, and nature.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Gangtok",
      "title": "Gangtok",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Shillong",
      "title": "Shillong",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Tawang",
      "title": "Tawang",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Kaziranga",
      "title": "Kaziranga",
      "description": "A popular spot for nature lovers and adventure seekers.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Bikaner",
      "title": "Bikaner",
      "description": "Famous for its vibrant atmosphere and historic landmarks.",
      "time": "2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Ajmer",
      "title": "Ajmer",
      "description": "Famous for its vibrant atmosphere and historic landmarks.",
      "time": "4-6 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Dwarka",
      "title": "Dwarka",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "2-3 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Ranakpur",
      "title": "Ranakpur",
      "description": "Renowned for spiritual experiences and rich history.",
      "time": "1-2 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    },
    {
      "id": "Chittorgarh",
      "title": "Chittorgarh",
      "description": "A serene getaway with lush landscapes and peaceful surroundings.",
      "time": "3-5 Days",
      "mainImage": image1,
      "images": [
        image2,
        image1,
        image3
      ]
    }
  ]
  const destination = [
    {
      "id": "Desert palace",
      "title": "Desert palace",
      "description": "Famous for its vibrant atmosphere and historic landmarks.Agra is situated on the banks of the Yamuna and has a rich history that is etched in the many tombs and structures. Located around 200 km from the capital city of Delhi, Agra is famous for one of the seven wonders of the world, the Taj Mahal. Agra offers endless options for foodies and shopaholics.Agra is situated on the banks of the Yamuna and has a rich history that is etched in the many tombs and structures. Located around 200 km from the capital city of Delhi, Agra is famous for one of the seven wonders of the world, the Taj Mahal. Agra offers endless options for foodies and shopaholics.",
      "time": "3-5 Days",
      "price": "987",
      "mainImage": image1,
      "images": [
        imagearray,
        imagearray,
        imagearray
      ]
    },
    {
      "id": "Peach beach grew",
      "title": "Peach beach grew",
      "description": "Renowned for spiritual experiences and rich history.Goa proudly stretches along a stunning 104-kilometre coastline, where the golden sands meet the shimmering waters of the Arabian Sea, offering a paradise for beach lovers and adventure seekers alike. Apart from beaches, Goa is home to Centuries-old churches that echo its Portuguese past, lively night markets showcase artistic flair, and bustling cafes exude city energy.",
      "time": "4-6 Days",
      "price": "887",
      "mainImage": image3,
      "images": [
        imagearray,
        imagearray,
        imagearray
      ]
    },
    {
      "id": "Manali",
      "title": "Coffee day House",
      "description": "Famous for its vibrant atmosphere and historic landmarks.Surrounded by mammoth Himalayan peaks, a gushing Beas river and several hills— Manali is the ultimate destination for adventure lovers, nature lovers and history buffs alike. The town is charming and full of cafes, markets, heritage monuments, winter sports and hikes to check out.",
      "time": "1-2 Days",
      "price": "1807",
      "mainImage": image2,
      "images": [
        imagearray,
        imagearray,
        imagearray
      ]
    },]

  const { id } = useParams();
  const city = destinations.find(i => i.id.toLocaleLowerCase() === id.toLocaleLowerCase())
  if (!city) {
    return (
      <>
        <div className='text-center h-screen'>
          <h1 className='text-3xl text-red-400'>City not found</h1>
        </div>
      </>
    )
  }

  return (
    <div className='container mx-auto py-5 p-2 lg:p-0 md:p-0'>
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


          <li className="text-gray-800 font-semibold">{city.title}</li>
        </ol>
      </nav>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div>
          <img src={city.mainImage} alt={city.title} className="w-full h-[600px] object-cover rounded-xl" />

        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <div>
              <h1 className='py-3 text-sm lg:text-4xl font-extrabold'>{city.title}</h1>
            </div>
            <p className="text-gray-700">{city.description}</p>
            <div className='py-2'>
              <button className='p-2 bg-yellow-300 rounded'>Explore More</button>
            </div>
          </div>
          <div >
            <Slider />
          </div>
        </div>

      </div>



      <div className='py-3'>
        <div>
          <h1 className='text-3xl font-semibold py-2'>Availablity Near by place...</h1>
        </div>
        {
          destination.map((items) => {
            return (
              <>
                <CityCard
                  key={items.id}
                  image={items.mainImage}
                  logoImages={items.images}
                  title={items.title}
                  description={items.description}
                  price={items.price}
                />
              </>
            )
          })
        }


      </div>
      <div>
        <div>
          <h1 className='py-3 text-sm lg:text-3xl'>Similar Properties</h1>
        </div>
        <SimilarProperties />
      </div>
    </div>
  )
}

export default Cities
