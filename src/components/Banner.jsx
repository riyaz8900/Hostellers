import React from 'react'
import Button from './Button'
import events from '../assets/filteration_btn/events.svg'
import CityDateDropdown from './CityDateDropdown'
function Banner() {
    return (
       <div className='py-4'>
         <div className='py-3 flex flex-wrap gap-4'>
            <Button
                text="Events"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
             <Button
                text="Hostels"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
             <Button
                text="Work stations"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
             <Button
                text="Colive"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
             <Button
                text="Commune"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
              <Button
                text="Groups"
                iconSrc={events}
                iconAlt="Events icon"
                className="flex items-center gap-2 py-2 rounded bg-white px-3 py-1"
                onClick={() => console.log('Clicked!')}
            />
        </div>
        <div className='mb-4'>
           <CityDateDropdown/>
        </div>
       </div>
    )
}

export default Banner
