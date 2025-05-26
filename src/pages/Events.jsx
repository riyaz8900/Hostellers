import React from 'react'
import EventsHappens from '../components/common/EventsHappens'
import image1 from '../assets/filteration_btn/hoistel10.webp'
import { Link } from 'react-router-dom';


function Events() {

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
    image:image1,
    title: "Indigo Jazz and Blues Festival",
    description: "An international music festival showcasing jazz and blues artists.",
    time: "18 December, 2025",
  },
  {
    image: image1,
    title: "Japan Habba",
    description: "Celebrate Japanese culture with performances, food, and crafts.",
    time: "20 December, 2025",
  },
  {
    image: image1,
    title: "Strawberry Fields",
    description: "An annual music festival by NLSIU showcasing indie bands.",
    time: "21 December, 2025",
  },
  {
    image:image1,
    title: "Bengaluru Open",
    description: "An ATP Challenger Tour tennis tournament in the heart of the city.",
    time: "22 December, 2025",
  },
  {
    image: image1,
    title: "Sky Lantern Festival",
    description: "An enchanting night of lights, music, and celebration.",
    time: "23 December, 2025",
  },
  {
    image: image1,
    title: "Bengaluru Theatre Festival",
    description: "Plays and performances by legendary artists like Naseeruddin Shah.",
    time: "24 December, 2025",
  },
  {
    image: image1,
    title: "Shaan Live in Concert",
    description: "A magical musical evening with Bollywood singer Shaan.",
    time: "25 December, 2025",
  },
  {
    image: image1,
    title: "Harsh Gujral Live",
    description: "Stand-up comedy that will leave you in splits.",
    time: "27 December, 2025",
  },
  {
    image:image1,
    title: "Excon 2025",
    description: "India’s largest construction equipment and technology event.",
    time: "28 December, 2025",
  },
  {
    image: image1,
    title: "Grand New Year Carnival",
    description: "Countdown to 2026 with music, food, and fun at Underdoggs Hebbal.",
    time: "31 December, 2025",
  },
  {
    image: image1,
    title: "Shaan Live in Concert",
    description: "A magical musical evening with Bollywood singer Shaan.",
    time: "25 December, 2025",
  },
  {
    image: image1,
    title: "Harsh Gujral Live",
    description: "Stand-up comedy that will leave you in splits.",
    time: "27 December, 2025",
  },
  {
    image:image1,
    title: "Excon 2025",
    description: "India’s largest construction equipment and technology event.",
    time: "28 December, 2025",
  },
  {
    image: image1,
    title: "Grand New Year Carnival",
    description: "Countdown to 2026 with music, food, and fun at Underdoggs Hebbal.",
    time: "31 December, 2025",
  },
];


  return (
    <div className=' container mx-auto  lg:p-0 p-2'>
      <nav className="text-gray-600 mb-4 text-sm" aria-label="Breadcrumb">
                <ol className="list-reset flex px-1">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className="mx-2"> / </span>
                    </li>
                </ol>
            </nav>
      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 gap-3 py-4'>

      {
        eventsDetails.map((items)=>{
          return (
            <>
             <EventsHappens
              image={items.image}
              title={items.title}
              description={items.description}
              time={items.time}
             />
            </>
          )
        })
      }
     
    </div>
    </div>
  )
}

export default Events
