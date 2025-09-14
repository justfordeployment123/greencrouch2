import React, { useState } from "react";
import { motion } from "framer-motion";
import Founder1 from "/src/assets/f22.png";
import Founder2 from "/src/assets/f2.png";

const Bios = () => {
  const [showPaulFull, setShowPaulFull] = useState(false);
  const [showScottFull, setShowScottFull] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      scaleX: -1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      scaleX: -1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen px-4 py-4 mx-0 mt-20 overflow-y-hidden sm:mt-0 lg:-mr-0">
      <motion.div
        className="flex flex-col items-center justify-center max-w-5xl mx-auto space-y-8 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile Layout */}
        <div className="block space-y-20 sm:hidden">
          {/* Paul Reaney */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={cardVariants}
          >
            <motion.img
              src={Founder2}
              alt="Paul Reaney"
              className="w-full max-w-[300px] aspect-square object-cover shadow-lg"
              variants={imageVariants}
              whileHover="hover"
            />

            <motion.div className="px-4 text-center mt-8" variants={textVariants}>
              <motion.p
                className="leading-relaxed text-white text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <strong className="text-white">Paul Reaney</strong> is an
                international TV development executive with more than 20 years
                of experience working with multi-national production companies.{" "}
                {showPaulFull ? (
                  <>
                    Heading up the development slate for his past two companies,
                    he has helped launch successful series including Live From
                    The Other Side with Tyler Henry (Netflix) Best Time Ever
                    with Neil Patrick Harris (NBC), The Chase (FOX, GSN), Rich
                    Kids of Beverly Hills (E!), America’s Got Talent (NBC), Take
                    Me Out (ABC daytime, FOX), Let’s Make A Deal (CBS), Hole In
                    The Wall (FOX) and Kirstie Alley’s Big Life (A&E). In his
                    capacity as Senior Vice President at ITV Studios , he
                    oversaw the delivery of shows from pitch to air-able pilots
                    including Surprise Surprise with Jenny McCarthy (NBC), On
                    Your Mind with Mo’Nique (ABC daytime) and MoneyPump (CBS).
                    Along with 7 years as Vice President at FremantleMedia, he
                    has overseen and produced more than 45 pilots and
                    presentations for the US market - producing them both in the
                    States and throughout the world, including the UK, Holland,
                    France and Israel. A well-rounded exec with experience in
                    ALL genres of TV development and production from game,
                    dating, hidden camera to syndicated talk and docureality
                    (both celebrity and non-celebrity). And and Paul was also
                    the oncamera royal correspondent for The Insider!
                  </>
                ) : (
                  <>... </>
                )}
              </motion.p>
              <button
                onClick={() => setShowPaulFull(!showPaulFull)}
                 className="mt-1 text-[#319d0a] underline text-[9px]"
              >
                {showPaulFull ? "See Less" : "See More"}
              </button>
            </motion.div>
          </motion.div>

          {/* Scott Weiner */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={cardVariants}
          >
            <motion.img
              src={Founder1}
              alt="Scott Weiner"
              className="w-full max-w-[300px] aspect-square object-cover transform shadow-lg scale-x-[-1]"
              variants={imageVariants}
              whileHover="hover"
            />

            <motion.div className="px-4 text-center mt-8" variants={textVariants}>
              <motion.p
                className="leading-relaxed text-white text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                is a television programming and marketing professional who began
                his career with Buena Vista Television's LIVE with Regis and
                Kathie Lee. .{" "}
                {showScottFull ? (
                  <>
                    {" "}
                    He continued his career with CBS, NBC and the WB’s marketing
                    and promotion teams, where he created and produced Emmy
                    Award winning station image campaigns. After, branching out
                    on his own, he created a hybrid ad agency and entertainment
                    packaging company. Green Couch soon segued its focus to
                    become the goto company for creating, developing and
                    packaging non-scripted content across all platforms for many
                    of the leading television and digital companies around the
                    world.
                  </>
                ) : (
                  <>... </>
                )}
              </motion.p>
              <button
                onClick={() => setShowScottFull(!showScottFull)}
                 className="mt-1 text-[#319d0a] underline text-[9px]"
              >
                {showScottFull ? "See Less" : "See More"}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:block">
            <motion.div
              className="flex flex-col space-y-12 sm:flex-row sm:space-y-0 sm:space-x-12 lg:space-x-10"
              variants={containerVariants}
            >
            {/* Paul Reaney */}
            <motion.div
              className="flex flex-col items-end flex-1 space-y-4"
              variants={cardVariants}
            >
               <motion.img
                 src={Founder2}
                 alt="Paul Reaney"
                 className="self-end w-full max-w-sm aspect-square object-cover shadow-lg scale-x-[-1]"
                 variants={imageVariants}
                 whileHover="hover"
               />
              <motion.div
                className="w-full text-justify mt-8"
                variants={textVariants}
              >
                <motion.p
                   className="leading-relaxed text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <strong className="text-white">Paul Reaney</strong> is an international TV development executive with more than 20 years of experience working with multi-national production companies. Heading up the development slate for his past two companies, he has helped launch successful series including Live From The Other Side with Tyler Henry (Netflix), Best Time Ever with Neil Patrick Harris (NBC), The Chase (FOX, GSN), Rich Kids of Beverly Hills (E!), America's Got Talent (NBC), Take Me Out (ABC daytime, FOX), Let's Make A Deal (CBS), Hole In The Wall (FOX) and Kirstie Alley's Big Life (A&E). In his capacity as Senior Vice President at ITV Studios, he oversaw the delivery of shows from pitch to air-able pilots including Surprise Surprise with Jenny McCarthy (NBC), On Your Mind with Mo'Nique (ABC daytime) and MoneyPump (CBS). Along with 7 years as Vice President at FremantleMedia, he has overseen and produced more than 45 pilots and presentations for the US market - producing them both in the States and throughout the world, including the UK, Holland, France and Israel. A well-rounded exec with experience in ALL genres of TV development and production from game, dating, hidden camera to syndicated talk and docureality (both celebrity and non-celebrity). And Paul was also the on-camera royal correspondent for The Insider!
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Scott Weiner */}
            <motion.div
              className="flex flex-col items-start flex-1 space-y-4"
              variants={cardVariants}
            >
               <motion.img
                 src={Founder1}
                 alt="Scott Weiner"
                 className="self-start w-full max-w-sm aspect-square object-cover shadow-lg scale-x-[-1]"
                 variants={imageVariants}
                 whileHover="hover"
               />
              <motion.div
                className="w-full text-justify mt-8"
                variants={textVariants}
              >
                <motion.p
                   className="leading-relaxed text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <strong className="text-white">Scott Weiner</strong> is a television programming and marketing professional who began his career with Buena Vista Television's LIVE with Regis and Kathie Lee. He continued his career with CBS, NBC and the WB's marketing and promotion teams, where he created and produced Emmy Award winning station image campaigns. After, branching out on his own, he created a hybrid ad agency and entertainment packaging company. Green Couch soon segued its focus to become the goto company for creating, developing and packaging non-scripted content across all platforms for many of the leading television and digital companies around the world.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bios;
