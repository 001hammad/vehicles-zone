import React from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '@/app/components/contact';
const Services = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-[url('/maintire.jpg')] bg-cover bg-center bg-fixed h-screen flex items-center justify-center text-white"
      >
        <h1 className="text-6xl text-red-600 font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
          Welcome to Our Services
        </h1>
        
      </div>
      
      <>
  <section className="text-gray-600 body-font bg-gradient-to-t to-red-500 from-black ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/Services/CarsPage' className="block relative h-48 rounded overflow-hidden group">
  <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/f6.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Cars Showroom</span>
  </div>
</Link>

          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
            The Latest Cars - Fresh Arrival
            </h2>
            <p className="mt-1 text-gray-400">Fresh Stock</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/Services/BusPage' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/busservice.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Bus Showroom</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
            The Latest Buses - Fresh Arrival
            </h2>
            <p className="mt-1 text-gray-300">Fresh Stock</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/Services/BikePage' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/bikeservice.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Bikes Showroom</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
            The Latest Bikes - Fresh Arrival
            </h2>
            <p className="mt-1 text-gray-300">Fresh Stock</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/carpartspic.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Cars Accesories</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
              Cars SpareParts Available
            </h2>
            <p className="mt-1 text-gray-300">Fresh Stock</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/maintainpic.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Bikes SpareParts</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
            Bikes SpareParts
            </h2>
            <p className="mt-1 text-gray-300">24/7 Service</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/Services/UsedCarPage' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/usecarpic.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Sale Your Cars</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
              Used cars Sale Now
            </h2>
            <p className="mt-1 text-gray-300">24/7 Service</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/Services/imp/exp/page' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/importpic.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Our Import/Export</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
              Import/Export Detailes
            </h2>
            <p className="mt-1 text-gray-300">Blogs</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='' className="block relative h-48 rounded overflow-hidden group">
        <Image
  alt="ecommerce"
  className="object-cover object-center w-full h-full block"
  src="/scooterservice.jpg"
  width={400}
  height={300}
/>

  {/* Overlay and Text */}
  <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-red-600 to-black opacity-0 group-hover:opacity-45 flex items-center justify-center text-white text-xl font-bold">
    <span className='font-bold text-4xl'>Scooties</span>
  </div>
</Link>
          <div className="mt-4">
            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-100 title-font text-lg font-medium">
              Scooties
            </h2>
            <p className="mt-1 text-gray-300">Fresh Stock</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<Contact/>
<Footer/>

    </div>
  );
};

export default Services;
