import React from 'react';
import heroImage from '../../../assets/email_market_hero_section.png'; // Import the image

function HeroSection() {
  return (
    <div className="bg-black text-white px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl text-center">
        <img src={heroImage} alt="Email Marketing Hero" className="mx-auto mb-8" /> {/* Add the image */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Elevate Your Email Marketing
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Reach your audience with precision and impact.
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
