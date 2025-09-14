import React, { useState } from "react";
import { motion } from "framer-motion";
// Import all images
import ns1Image from "/src/assets/ns1.jpg";
import ns2Image from "/src/assets/ns2.webp";
import ns3Image from "/src/assets/ns3.jpg";
import ns5Image from "/src/assets/ns5.jpg";
import ns6Image from "/src/assets/ns6.png";
import ns7Image from "/src/assets/ns7.jpg";
import ns8Image from "/src/assets/ns8.png";
import b1Image from "/src/assets/Brandlogofcompress/b1.jpg";
import b2Image from "/src/assets/Brandlogofcompress/b2.jpg";
import b3Image from "/src/assets/b3.jpg";
import b4Image from "/src/assets/b4.jpg";
import b5Image from "/src/assets/Brandlogofcompress/b5.jpg";
import b6Image from "/src/assets/b6.jpg";
import b7Image from "/src/assets/Brandlogofcompress/b7.jpg";
import b8Image from "/src/assets/b8.png";
import b9Image from "/src/assets/b9.jpeg";
import d1Image from "/src/assets/d1.webp";
import d3Image from "/src/assets/d3.jpg";
import d4Image from "/src/assets/d4.png";
import d4JpgImage from "/src/assets/d4.jpg";
import d5Image from "/src/assets/d5.jpg";
import partnerBgImage from "/src/assets/Partnerbgimg.png";

// Working Marquee component with actual animation
const Marquee = ({ children, speed = 50, direction = "left" }) => {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .marquee-content {
          display: flex;
          animation: ${direction === "left" ? "scroll-left" : "scroll-right"} ${100 / speed}s linear infinite;
        }
        
        .marquee-item-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
        }
      `}</style>
      
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item-group">{children}</div>
          <div className="marquee-item-group">{children}</div>
        </div>
      </div>
    </>
  );
};

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
    <div className="w-full h-screen overflow-hidden">
      {/* desktop and larger  */}
      <div className="hidden md:block ml-[290px] mt-[80px] pr-8">
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

      {/* ✅ Mobile & Tablet (Marquee Layout with Background Image) */}
      <div className="relative flex flex-col px-2 py-16 space-y-8 md:hidden sm:px-4">
        {/* Background Image with Blur/Opacity */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 blur-sm"
          style={{
            backgroundImage: `url(${partnerBgImage})`,
          }}
        />

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <h2 className="mb-8 text-3xl font-semibold text-center text-white sm:text-4xl">
            Our Premium <span className="text-[#319d0a]">Partners</span>
          </h2>

          {/* Streamers - Moving LEFT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">
              Networks & Streamers
            </h3>
            <div className="relative w-full">
              <Marquee speed={25} direction="left">
                {partnerImages.streamers.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={imgSrc}
                      alt={`Streamer ${i + 1}`}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Brands - Moving LEFT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">Brands</h3>
            <div className="relative w-full">
              <Marquee speed={30} direction="left">
                {partnerImages.brands.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand ${i + 1}`}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Distributors - Moving RIGHT */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-center text-gray-300">
              Distributors
            </h3>
            <div className="relative w-full">
              <Marquee speed={28} direction="right">
                {partnerImages.distributors.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center justify-center h-16 w-28 mx-3"
                  >
                    <img
                      src={imgSrc}
                      alt={`Distributor ${i + 1}`}
                      className="h-full w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </Marquee>
              {/* Gradient overlays */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;