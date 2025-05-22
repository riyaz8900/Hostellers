import React from 'react'

function Footer() {
  return (
    <div className='container-fluid mx-auto px-3 py-5 bg-black text-white h-full'>
      <div className='container mx-auto h-full'>
        <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2'>
          <div>
            <h2 className='text-yellow-300 text-2xl '>Accomodations</h2>

            <ul className='py-2'>
              <li>Destinations</li>
              <li>Bam hostels</li>
              <li>Hostels</li>
              <li>Workations</li>
              <li>Group bookings</li>
            </ul>
          </div>
          <div>
            <h2 className='text-yellow-300 text-2xl ' >Important links</h2>
            <ul className='py-2'>
              <li>Career</li>
              <li>Sitemap</li>
              <li>Volunteer</li>
              <li>Press mentions</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <h2 className='text-yellow-300 text-2xl '>Policies</h2>
            <ul className='py-2'>
              <li>Guest policy</li>
              <li>Privacy policy</li>
              <li>Refund policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
          <div>
            <h2 className='text-yellow-300 text-2xl '>Contact details</h2>
            
            <ul className='py-2 '>
              <li>Developers & owners</li>
              <li>Support centre</li>
              <li>Community</li>
              <li>Contact us</li>
              <li>Group bookings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
