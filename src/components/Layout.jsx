import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa";

function Layout() {
   const [isVisible, setIsVisible] = useState(false);

  // Show button after 300px scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='flex justify-between flex-col relative'>
      <div className='shadow-lg '>
        <div>
          <Navbar />
        </div>
        <div className='pt-[100px]'>
          <Outlet />
        </div>
      </div>

      <div>
        <Footer />
      </div>
       {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 z-50 bg-yellow-300 p-3 rounded-full cursor-pointer shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out opacity-100"
          title="Back to top"
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  )
}

export default Layout
