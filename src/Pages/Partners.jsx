import React, { useState } from "react";
import { motion } from "framer-motion";
// Import all images
import ns1Image from "../assets/ns1.jpg";
import ns2Image from "../assets/ns2.webp";
import ns3Image from "../assets/ns3.jpg";
import ns5Image from "../assets/ns5.jpg";
import ns6Image from "../assets/ns6.png";
import ns7Image from "../assets/ns7.jpg";
import ns8Image from "../assets/ns8.png";
import b1Image from "../assets/Brandlogofcompress/b1.jpg";
import b2Image from "../assets/Brandlogofcompress/b2.jpg";
import b3Image from "../assets/b3.jpg";
import b4Image from "../assets/b4.jpg";
import b5Image from "../assets/Brandlogofcompress/b5.jpg";
import b6Image from "../assets/b6.jpg";
import b7Image from "../assets/Brandlogofcompress/b7.jpg";
import b8Image from "../assets/b8.png";
import b9Image from "../assets/b9.jpeg";
import d1Image from "../assets/d1.webp";
import d3Image from "../assets/d3.jpg";
import d4Image from "../assets/d4.png";
import d4JpgImage from "../assets/d4.jpg";
import d5Image from "../assets/d5.jpg";
import partnerBgImage from "../assets/Partnerbgimg.png";

const Partners = () => {
  const [clicked, setClicked] = useState(false);

  // Sample partner images data
  const partnerImages = {
    streamers: [
      ns1Image,
      ns2Image,
      ns3Image,
      ns5Image,
      ns6Image,
      ns8Image,
      ns7Image,
    ],
    brands: [
      b1Image,
      b2Image,
      b3Image,
      b4Image,
      b5Image,
      b6Image,
      b7Image,
      b8Image,
      b9Image,
    ],
    distributors: [
      d1Image,
      d4Image,
      d3Image,
      d4JpgImage,
      d5Image,
    ],
  };

  return (
    <div className="w-full">
      {/* desktop and larger - keeping exactly as is */}
      <div className="hidden md:block h-screen overflow-hidden">
        <div className="ml-[290px] mt-[80px] pr-8">
          {/* Network & streamers */}
          <h2 className="mb-5 text-xl font-semibold xl:text-2xl lg:text-[28px] lowercase">
            networks <span className="text-[#319d0a]">&</span> streamers
          </h2>
          <div className="flex flex-row items-center mb-14 gap-2">
            {partnerImages.streamers.map((imgSrc, i) => (
              <div key={i} className="h-[70px] overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`Streamer ${i + 1}`}
                  className="h-[70px] w-auto object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Brands */}
          <h2 className="mb-5 text-xl font-semibold xl:text-2xl lg:text-[28px] lowercase">
            brands
          </h2>
          <div className="flex flex-row items-center mb-14 gap-2">
            {partnerImages.brands.map((imgSrc, i) => (
              <div key={i} className="h-[70px] overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`Brand ${i + 1}`}
                  className="h-[70px] w-auto object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Distributors */}
          <h2 className="mb-5 font-semibold xl:text-2xl lg:text-[28px] lowercase">
            distributors
          </h2>
          <div className="flex flex-row items-center gap-2">
            {partnerImages.distributors.map((imgSrc, i) => (
              <div key={i} className="h-[70px] overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`Distributor ${i + 1}`}
                  className="h-[70px] w-auto object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile - Scrollable layout with scroll indicators */}
      <div className="md:hidden min-h-screen relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 blur-sm"
          style={{
            backgroundImage: `url(${partnerBgImage})`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 px-4 py-8">
          <h2 className="mb-8 text-2xl font-semibold text-center text-white">
            Our Premium <span className="text-[#319d0a]">Partners</span>
          </h2>

          {/* Streamers Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">
                Networks & Streamers
              </h3>
              <div className="flex items-center text-xs text-gray-400">
                <span>Swipe</span>
                <svg className="w-4 h-4 ml-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              {/* Gradient fade indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-4 w-max px-6">
                  {partnerImages.streamers.map((imgSrc, i) => (
                    <div key={i} className="flex-shrink-0">
                      <img
                        src={imgSrc}
                        alt={`Streamer ${i + 1}`}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Brands Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">
                Brands
              </h3>
              <div className="flex items-center text-xs text-gray-400">
                <span>Swipe</span>
                <svg className="w-4 h-4 ml-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              {/* Gradient fade indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-4 w-max px-6">
                  {partnerImages.brands.map((imgSrc, i) => (
                    <div key={i} className="flex-shrink-0">
                      <img
                        src={imgSrc}
                        alt={`Brand ${i + 1}`}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Distributors Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">
                Distributors
              </h3>
              <div className="flex items-center text-xs text-gray-400">
                <span>Swipe</span>
                <svg className="w-4 h-4 ml-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              {/* Gradient fade indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-4 w-max px-6">
                  {partnerImages.distributors.map((imgSrc, i) => (
                    <div key={i} className="flex-shrink-0">
                      <img
                        src={imgSrc}
                        alt={`Distributor ${i + 1}`}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Partners;