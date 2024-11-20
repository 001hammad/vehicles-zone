import React from 'react';

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/aboutpic.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60" id='about'></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 bg-black bg-opacity-25">
        <h1 className="text-5xl font-bold mb-4">About Our Showroom</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Established in <span className="text-red-600 font-bold">1995</span>, our showroom has been a trusted destination for premium vehicles. 
          With over <span className="text-red-600 font-bold">25 years</span> of excellence, we pride ourselves on delivering unmatched service 
          and quality to our customers.
        </p>
        <p className="mt-4 text-lg">
          Discover the legacy of innovation and trust that makes us a leader in the automotive industry.
        </p>
      </div>
    </div>
  );
};

export default About;
