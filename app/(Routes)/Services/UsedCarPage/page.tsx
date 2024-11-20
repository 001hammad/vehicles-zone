import React from 'react';
import Contact from '@/app/components/contact';
import Footer from '../Footer';
import Navbar from '@/app/components/navbar';

const UsedCarPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/usepic.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full absolute top-0 left-0"></div>
        <div className="text-white text-center py-20 relative z-10">
          <h1 className="text-4xl font-bold">Buy & Sell Used Cars</h1>
          <p className="text-lg mt-4">
            Find the perfect car for your needs or sell your pre-loved vehicle with ease.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded">
            Browse Cars
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-red-500">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-red-500">Wide Range of Cars</h3>
            <p className="mt-2 text-gray-600">
              Explore a variety of used cars from trusted sellers near you.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-red-500">Sell Your Car Easily</h3>
            <p className="mt-2 text-gray-600">
              Post your car for sale and connect with potential buyers quickly.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-red-500">Secure Transactions</h3>
            <p className="mt-2 text-gray-600">
              We ensure a safe and hassle-free process for buying and selling.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white text-red-500 py-10 text-center">
        <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
        <p className="mt-4">
          Whether youre looking to buy or sell a car, weve got you covered!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600">
            Sell Your Car
          </button>
          <button className="px-6 py-3 bg-gray-100 text-red-500 font-bold rounded hover:bg-gray-200">
            Browse Cars
          </button>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
    </div>
  );
};

export default UsedCarPage;
