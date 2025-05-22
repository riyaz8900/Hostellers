import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../../robot-animation.json'; 

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: animationData, // Lottie JSON data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-500 to-yellow-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate__animated animate__fadeInUp">404</h1>
        <p className="text-2xl font-semibold mb-6 animate__animated animate__fadeInUp">Oops! Page Not Found</p>
        <div className="mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          {/* Lottie animation */}
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          The page you are looking for might have been moved or deleted or in-progress.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-lg bg-white text-blue-700 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
