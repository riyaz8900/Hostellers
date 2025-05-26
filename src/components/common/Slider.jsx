import React, { useEffect } from 'react';
import image1 from '../../assets/filteration_btn/hostel1.webp';
import image2 from '../../assets/filteration_btn/hostel19.webp';
import image3 from '../../assets/filteration_btn/hostel14.webp';
import image4 from '../../assets/filteration_btn/hostel7.jpeg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slider() {
  useEffect(() => {
    // Initialize Owl Carousel
    window.$('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false, // disable default nav
      dots: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    // Custom Nav Handlers
    const owl = window.$('.owl-carousel');
    document.getElementById('customPrev').addEventListener('click', () => owl.trigger('prev.owl.carousel'));
    document.getElementById('customNext').addEventListener('click', () => owl.trigger('next.owl.carousel'));
  }, []);

  return (
    <div className=''>
        <div className='flex justify-between items-center py-1'>
            <div className='text-2xl font-semibold py-1'>What Is It Famous For?</div>
             <div className='flex items-center justify-end gap-2 mb-3'>
        <div id="customPrev" className='bg-yellow-300 p-2 rounded-full cursor-pointer'>
          <FaArrowLeft />
        </div>
        <div id="customNext" className='bg-yellow-300 p-2 rounded-full cursor-pointer'>
          <FaArrowRight />
        </div>
      </div>
        </div>
     

      <div className="owl-carousel owl-theme">
        <div className="item"><img className="w-64 h-56 rounded" src={image1} alt="img1" /></div>
        <div className="item"><img className="w-64 h-56 rounded" src={image2} alt="img2" /></div>
        <div className="item"><img className="w-64 h-56 rounded" src={image3} alt="img3" /></div>
        <div className="item"><img className="w-64 h-56 rounded" src={image4} alt="img4" /></div>
      </div>
    </div>
  );
}

export default Slider;
