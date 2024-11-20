'use client'

import React from 'react';
import { useState, useEffect } from 'react';

const Hero = () => {


  const [showOffer, setShowOffer] = useState(true); // State to manage offer message visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(false); // Automatically hide the offer after 5 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


  return (
    <div
      className="bg-[url('/heropic.jpg')] bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundAttachment: 'fixed', // Background remains fixed
      }}
    >
      {showOffer && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 bg-opacity-55 text-white sm:px-6 sm:py-3  rounded-md sm:mt-32 shadow-lg animate-pulse">
          <p className="text-lg font-bold sm:text-3xl">-----This Website Is Under Developement-----</p>
        </div>
      )}
      <div className="text-white text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-5xl font-bold">Drive Your Dream</h1>
        <p className="mt-4 text-lg">
          Discover the latest models and exclusive offers on your favorite cars.
        </p>
      </div>
    </div>
  );
};

export default Hero;
