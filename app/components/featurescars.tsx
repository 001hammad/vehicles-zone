import React from 'react';
import Image from 'next/image';

const ImageScroll = () => {
  return (
    <div className="bg-black py-10">
      <h2 className="text-3xl text-center text-white mb-6 font-bold">
        Explore Our Collection
      </h2>
      <div className="overflow-x-auto flex space-x-4 px-4">
        {/* Image Cards */}
        {[
          '/f1.jpg',
          '/f2.jpg',
          '/f3.jpg',
          '/f4.jpg',
          '/f5.jpg',
          '/f6.jpg',
          '/f7.jpg',
          '/f8.jpg',
          '/f9.jpg',
          '/f10.jpg',
          '/f11.jpg',
          '/f12.jpg',
          '/f13.jpg',
          '/f2.jpg',
          '/f3.jpg',
          '/f4.jpg',
          '/f5.jpg',
          '/f6.jpg',
        ].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-40 rounded-lg shadow-md bg-gray-800 relative">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
