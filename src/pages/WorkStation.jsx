import React from 'react'
import image1 from '../assets/filteration_btn/ws.jpeg'
import Form from '../components/common/Form'
import image2 from '../assets/filteration_btn/ws12.webp'
function WorkStation() {
  return (
    <>
      <div className='container mx-auto lg:p-0 p-2'>
        <div className=' grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 gap-3 py-4'>
          <div className='flex flex-col items-center justify-center '>
            <div>
              <div>
                <h1 className='text-4xl font-extrabold'>Work, relax, repeat</h1>
                <h4 className='font-bold py-2'>Book for 7+ nights and get 15% off</h4>
                <p>Trade your office walls for the breathtaking beauty of blue skies, indigo rivers, and lush green forests! Whether you're in the vibrant tech city of Bangalore or the peaceful retreat of Kareri, our hostels are strategically located for your extended stays. Stay productive with our high-speed Wi-Fi, satisfy your hunger at our cafe, and relax with evening strolls in the serene surroundings. Intrigued?</p>

              </div>
              <div className=' py-1'>
                <div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={image1} alt="" />
          </div>

        </div>
        {/* ---------------------------------- */}
        <div className=' grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 gap-3 py-4'>
          <div className=''>
            <img src={image2} alt="" />
          </div>
          <div>
           <div>
             <h1 className='text-2xl font-extrabold py-2'>
              Escape the routine</h1>
            <p className='py-2'>Why feel trapped in the same old 9-5 work routine every day? Break free and send emails from the hills, the deserts, the middle of tea plantations, or even by the beach. You get the drift.</p>
            <p>Blend work and play—level up your work life, de-stress your mind, and get those creative juices flowing. With 55+ stunning destinations and all the modern amenities, your friendly neighbourhood backpacker hostel is all set to give you the ultimate workation. Pack your laptop and let's get this work-play party started!

            </p>
           </div>
           <div className='py-2'>
            <button className='bg-yellow-300  rounded px-3 py-2 font-semibold p-1'>Popular hostels</button>
           </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default WorkStation
