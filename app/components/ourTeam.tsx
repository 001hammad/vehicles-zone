import React from 'react';
import Image from 'next/image'; // Importing Image from Next.js for optimized image handling

const OurTeam = () => {
  const teamMembers = [
    { name: 'Elon Musk', position: 'CEO of Tesla &amp; SpaceX' },
    { name: 'Jeff Bezos', position: 'Founder of Amazon' },
    { name: 'Bill Gates', position: 'Co-founder of Microsoft' },
    { name: 'Warren Buffett', position: 'CEO of Berkshire Hathaway' },
    { name: 'Mark Zuckerberg', position: 'Founder of Facebook' },
    { name: 'Tim Cook', position: 'CEO of Apple' },
    { name: 'Sundar Pichai', position: 'CEO of Google' },
    { name: 'Richard Branson', position: 'Founder of Virgin Group' },
    { name: 'Larry Ellison', position: 'Co-founder of Oracle' },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-gray-600 body-font"
      style={{
        backgroundImage: "url('/feedbackpic.jpg')",
      }}
    >
      {/* Overlay for better visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container px-5 py-24 mx-auto z-10">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Meet the visionary leaders who inspire and drive our company&apos;s success.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {/* Individual Team Cards */}
          {teamMembers.map((member, index) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-black bg-opacity-50">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/elonmusk.jpg"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {member.name}
                  </h2>
                  <p className="text-red-500">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
