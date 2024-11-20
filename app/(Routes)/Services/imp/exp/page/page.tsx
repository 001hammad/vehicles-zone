import Navbar from '@/app/components/navbar';
import React from 'react';
import Image from 'next/image';

const OurImport = () => {
  return (
    
    <div className="max-w-4xl mx-auto p-4 bg shadow-lg rounded-lg">
        <Navbar/>
      <h1 className="text-4xl font-bold text-center mb-6">Our Imported Vehicles</h1>

      <p className="text-lg mb-4">
        At Carzone, we pride ourselves in bringing the finest quality vehicles to Pakistan. Our cars, buses, and bikes are sourced directly from Japan, a country renowned for its cutting-edge automotive technology and impeccable build quality. 
      </p>
      
      <Image
        src="/blogpic.jpg"
        alt="Imported cars from Japan"
        className=" object-cover rounded-lg mb-4"
        width={900} height={400}
      />

      <p className="text-lg mb-4">
        The vehicles we import from Japan are thoroughly inspected and reconditioned to meet the highest standards. This ensures that our customers receive vehicles that are not only durable but also efficient and stylish. Whether you're looking for a luxurious car, a reliable bike, or a sturdy bus, we have you covered.
      </p>

      <p className="text-lg mb-4">
        Our cars are equipped with the latest technology, designed to offer comfort, safety, and fuel efficiency. Japanese cars are widely considered some of the best in the world for their longevity and value for money. We also import buses and bikes from Japan, perfect for both personal and commercial use.
      </p>

      <p className="text-lg mb-4">
        If youre interested in any of these imported vehicles, feel free to explore our <a href="/cars" className="text-blue-500 hover:underline">car collection</a>, <a href="/bikes" className="text-blue-500 hover:underline">bike models</a>, or <a href="/buses" className="text-blue-500 hover:underline">buses</a> for more details. We’re here to help you find the perfect vehicle to meet your needs.
      </p>

      <Image
        src="/blogpic2.jpg"
        alt="Japanese buses and bikes"
        className=" object-cover rounded-lg mb-4"
        height={200}width={900}
      />

      <p className="text-lg mb-4">
        Join the Carzone family today and experience the unmatched quality of vehicles imported directly from Japan.
      </p>
    </div>
  );
}

export default OurImport;
