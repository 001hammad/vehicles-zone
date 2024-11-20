'use client'

import { FaAngleDown } from "react-icons/fa";
import React from 'react'
import Navbar from '../../Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer';
import Contact from "@/app/components/contact";

const CarsPage = () => {

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
<select id="sustainability" name="sustainability" className="bg-black bg-opacity-20 text-red-600">
    <option value="eco-friendly" >Want Antique Model ?</option>
    <option value="carbon-neutral">M: 1988</option>
    <option value="recyclable-materials">M: 1899</option>
    <option value="energy-efficient">M: 2004</option>
</select>
    <li className="flex">Sustainability<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">(+92-21)-117-363-987<FaAngleDown className="sm:mt-1 text-red-800"/></li>
    <li className="flex">Loyality Club<FaAngleDown className="sm:mt-1 text-red-800"/></li>
  </ul>
</div>
      <section className="text-gray-100 body-font bg-gradient-to-r from-black via-black to-red-500">
  <div className="container px-5 py-24 mx-auto">
  {showOffer && (
        <div className="fixed top-5 left-1/2 hidden sm:block transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-md sm:mt-32 shadow-lg">
          <p className="text-lg font-bold">Limited Time Offer! New Model Bikes at pkr 6lac (Save pkr 2lac!)</p>
        </div>
      )}
  <h3
  className='sm:p-9 mb-10 sm:mb-72 sm:mt-52 sm:text-red-700 sm:text-4xl flex justify-center cursor-default items-center bg-opacity-10 bg-black transition duration-500 ease-in-out hover:text-white'
>
  -------------Explore Our Latest Bikes Models-----------
</h3>

    <div className="flex flex-wrap -m-4">

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
      width={500} // Width specify karein
      height={500} // Height specify karein
    />
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
      Model: 2024
    </h3>
    <h2 className="text-gray-300 title-font text-lg font-medium">
      Toyota Corolla
    </h2>
    <p className="mt-1">PKR 30 lac </p>
  </div>
</div>


<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (2).png"
      width={500} // Width specify karein
      height={500} // Height specify karein
    />
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
      Model: 2025
    </h3>
    <h2 className="text-gray-300 title-font text-lg font-medium">
    Hyundai Tucson
    </h2>
    <p className="mt-1">PKR 55 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (3).png"
      width={500} // Width specify karein
      height={500} // Height specify karein
    />
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
      Model: 2022
    </h3>
    <h2 className="text-gray-300 title-font text-lg font-medium">
    Audi Q7
    </h2>
    <p className="mt-1">PKR 85 lac</p>
  </div>
</div>


<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (4).png"
      width={500} // Width specify karein
      height={500} // Height specify karein
    />
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
      Model: 2005
    </h3>
    <h2 className="text-gray-300 title-font text-lg font-medium">
    Audi Q7
    </h2>
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (3).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>


<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (4).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
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
    <p className="mt-1">PKR 23 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (2).png"
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
    <p className="mt-1">PKR 77 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (4).png"
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
    <p className="mt-1">PKR 2 Crore</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (4).png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/c15.png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (3).png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>


<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (1).png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/c8.png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (2).png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/c14.png"
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
    <p className="mt-1">PKR 50 lac</p>
  </div>
</div>

<div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-500 bg-opacity-25 rounded-xl">
  <Link href="#" className="block relative h-48 rounded overflow-hidden group">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
      src="/b1 (2).png"
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
    <p className="mt-1">PKR 50 lac</p>
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

export default CarsPage
