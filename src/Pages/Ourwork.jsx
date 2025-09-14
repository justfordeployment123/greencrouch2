import React from "react";
import { motion } from "framer-motion";

const Ourwork = () => {
  return (
    <div className="flex flex-col min-h-screen px-2 py-8 text-white lg:px-0 lg:-mr-0">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
          most successful hits from the{" "}
          <span className="text-[#319d0a] lowercase">green</span>{" "}
          <span className="text-white">couch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#319d0a] to-[#38c903] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {/* SAVE TO WIN */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/src/assets/w1.png"
            alt="Save to Win"
            className="object-contain w-full h-auto max-h-[250px] sm:max-h-[300px] mb-4"
          />
          <p className="text-justify text-white text-xs sm:text-sm leading-relaxed mb-4 px-2">
            <strong>SAVE TO WIN</strong> is a fun and fast-paced play-along game show where savvy shoppers can win big cash by showcasing their knowledge of their favorite household brands. Two teams of two compete head to head as they play shopping-themed games in our studio store that resembles one of the country's largest retail chains. Contestants compete in three rounds testing their brand knowledge, and culminates in an exciting final bonus round where picking the right items off our product-themed prize wall can result in one team walking away with the jackpot.
          </p>
          {/* Awards - Adjusted sizes */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <img
              src="/src/assets/savetowin1.png"
              alt="Telly Award"
              className="object-contain h-[60px] w-auto"
            />
            <img
              src="/src/assets/savetowin.jpg"
              alt="Reggie Award"
              className="object-contain h-[60px] w-auto"
            />
          </div>
        </motion.div>

        {/* THE DEPORTED */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/src/assets/w2.jpg"
            alt="The Deported"
            className="object-contain w-full h-auto max-h-[250px] sm:max-h-[300px] mb-4"
          />
          <p className="text-justify text-white text-xs sm:text-sm leading-relaxed mb-4 px-2">
            <strong>THE DEPORTED</strong> follows four families with a family member who is in the final days of the deportation process. The documentary examines the stress, fear, denial and fatalism of various friends, family and community members, and the specific individual. Each family must make a drastic decision: to self deport, to accept deportation, to continue a legal battle, or to go into hiding.
          </p>
          {/* Awards - Adjusted sizes and layout */}
          <div className="bg-white rounded-lg px-3 py-2 mt-2">
            <div className="grid grid-cols-2 gap-2">
              <img
                src="/src/assets/deported1.png"
                alt="Beverly Hills Film Festival"
                className="object-contain h-[55px] w-auto mx-auto"
              />
              <img
                src="/src/assets/deportedr2.webp"
                alt="Film Festival Award"
                className="object-contain h-[55px] w-auto mx-auto"
              />
              <img
                src="/src/assets/deportedc1.png"
                alt="Official Selection 2019"
                className="object-contain h-[55px] w-auto mx-auto"
              />
              <img
                src="/src/assets/deportedc24.png"
                alt="Film Festival Award"
                className="object-contain h-[55px] w-auto mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* HARRY & MEGHAN */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/src/assets/w3.png"
            alt="Harry & Meghan"
            className="object-contain w-full h-auto max-h-[250px] sm:max-h-[300px] mb-4"
          />
          <p className="text-justify text-white text-xs sm:text-sm leading-relaxed mb-4 px-2">
            <strong>PEOPLE PRESENTS: HARRY & MEGHAN, A ROYAL REBELLION</strong> is the first in a series of youth-facing and brand-sponsored documentaries featuring the English Royals. A revealing special that explores Prince Harry and Meghan Markle's bold break from royal tradition, uncovering their personal struggles, cultural clashes, and defining choices that shook the monarchy and reshaped the future of the royal family.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Ourwork;