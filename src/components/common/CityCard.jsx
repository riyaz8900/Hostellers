import React from 'react'
function CityCard({ image, title, description, logoImages = [], price }) {
    return (
        <div>
            <div className='grid grid-cols-1  my-3 lg:grid-cols-2 md:grid-cols-2  shadow-lg'>
                <div>
                    <img
                        src={image}
                        alt="City"
                        className="rounded h-96 object-cover w-full"
                    />
                </div>
                <div className='p-2'>
                    <div>
                        <h1 className='font-extrabold py-2 text-3xl'>{title}</h1>
                        <div className='py-2'>
                            <p>{description}</p>
                        </div>
                        <div className='flex gap-2'>
                            {logoImages.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`logo-${index}`}
                                    className="h-8 w-8 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between items-center '>
                       <div>
                         <p className='font-semibold text-sm'>Starting @</p>
                        <div>
                            <h1 className='font-extrabold text-3xl'>₹{price}<span className='text-sm'>/night</span></h1>
                        </div>
                         </div>
                        <div>
                            <button className='px-5 py-2 bg-yellow-300 text-2xl rounded font-semibold'>Book Now</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityCard

