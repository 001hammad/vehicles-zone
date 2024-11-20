'use client'

import React from 'react'
import Navbar from '../../Navbar'
import { FaAngleDown } from "react-icons/fa";
import Footer from '../Footer'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Contact from '@/app/components/contact';

const BusPage = () => {


  const [showOffer, setShowOffer] = useState(true); // State to manage offer message visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(false); // Automatically hide the offer after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


  return (
    <div>
        <Navbar/>
        <div className='bg-black hidden sm:block shadow-inner shadow-gray-500 bg-opacity-20'>
  <ul className='flex justify-around sm:p-6 cursor-pointer'>
    <li className="flex">45 Department<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    
    <li className="flex">CR Department<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">Online Appointment<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">Sustainability<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">(+92-21)-117-363-987<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">Loyality Club<FaAngleDown className="sm:mt-1 text-red-800"/></li>
  </ul>
</div>
      <section className="text-gray-100 body-font bg-gradient-to-r from-black via-black to-red-500">
  <div className="container px-5 py-24 mx-auto">
  {showOffer && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white sm:px-6 sm:py-3 rounded-md mt-10 sm:mt-32  shadow-lg">
          <p className="text-lg font-bold">Limited Time Offer! Latest DIEWOO  at pkr 260lac (Save pkr 9lac!)</p>
        </div>
      )}

<h3
  className='sm:p-9 mb-10 sm:mb-72 sm:mt-52  sm:text-red-700 text-sm sm:text-4xl flex justify-center cursor-default items-center bg-opacity-10 bg-black transition duration-500 ease-in-out hover:text-white'
>
  --------------Explore Our Latest DIEWOO Models------------
</h3>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus1.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus2.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>

        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus3.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
   className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus4.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
   className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus5.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus6.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus7.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus8.png"
    width={500} // Add width for Next.js Image component
    height={500} // Add height for Next.js Image component
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus9.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus10.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus11.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus12.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>

        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus13.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus14.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus15.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden  group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus16.png"
    width={500} // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/bus17.png"
    width={500}  // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/c6.png"
    width={500}  // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/c14.png"
    width={500}  // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="#" className="block relative h-48 rounded overflow-hidden group">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
    src="/c2.png"
    width={500}  // Width specify karein
    height={500} // Height specify karein
  />
</Link>
        <div className="mt-4">
          <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
<Contact/>
<Footer/>
    </div>
  )
}

export default BusPage
