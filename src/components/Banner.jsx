import React from 'react';
import Button from './Button';
import events from '../assets/filteration_btn/events.svg';
import CityDateDropdown from './CityDateDropdown';

const filterButtons = [
  { text: "Events", icon: events },
  { text: "Hostels", icon: events },
  { text: "Work stations", icon: events },
  { text: "Colive", icon: events },
  { text: "Commune", icon: events },
  { text: "Groups", icon: events },
];

function Banner() {
  return (
    <section className="relative py-5">
      <div className="flex flex-wrap gap-3 py-3">
        {filterButtons.map((btn, index) => (
          <Button
            key={index}
            text={btn.text}
            iconSrc={btn.icon}
            iconAlt={`${btn.text} icon`}
            className="flex items-center gap-2 rounded bg-white px-4 py-2 shadow-sm hover:shadow-md transition"
            onClick={() => console.log(`${btn.text} clicked`)}
          />
        ))}
      </div>

      <div className="mt-6">
        <CityDateDropdown />
      </div>
    </section>
  );
}

export default Banner;
