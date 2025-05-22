import React from 'react'
import { Link } from 'react-router-dom';

function Destination() {
    const destinations = [
  "Agra", "Amritsar", "Bangalore", "Bhandardara", "Bir", "Chakrata", "Chikmagalur", "Coorg",
  "Dalhousie", "Dehradun", "Delhi", "Fort Kochi", "Goa", "Gokarna", "Himachal", "Jaipur",
  "Jibhi", "Jodhpur", "Kareri", "Karnataka", "Kasar Devi", "Kasauli", "Kasol", "Kerala",
  "Khajjiar", "Kufri", "Lansdowne", "Leh", "Lonavala", "Maharashtra", "Manali", "Mcleodganj",
  "Mumbai", "Munnar", "Mussoorie", "Narkanda", "Ooty", "Panshet", "Rajasthan", "Rishikesh",
  "Shimla", "Udaipur", "Uttarakhand", "Wayanad"
];
    return (
        <div className='p-2 lg:p-0'>
            <div className="flex items-center my-2 py-3">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-4 text-gray-500 lg:text-2xl text-sm">Destinations</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className='grid grid-cols-3 p-2 lg:p-0 lg:grid-cols-8 md:grid-cols-4 gap-1'>
              
                    {
                        destinations.map((item)=>{
                            return (
                                <>
                              
                                <li className='list-none cursor-pointer hover:underline '>{item}</li>
                                </>
                            )
                        })
                    }
              
            </div>
        </div>
    )
}

export default Destination
