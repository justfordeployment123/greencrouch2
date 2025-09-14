import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative text-white sm:h-auto sm:overflow-auto md:h-screen md:overflow-hidden lg:m-0 lg:p-0">
      {/* Background image only for mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/src/assets/sofaabt.png" 
          alt="Background Sofa"
          className="object-contain w-full h-full opacity-10"
        />
      </div>

      {/* Content overlay */}
      <div className="relative flex items-center justify-center h-full">
        <div className="w-full max-w-3xl p-6 rounded-lg sm:p-8 md:p-12 lg:ml-48 lg:-mr-16">
          <motion.div
            className="space-y-4 text-sm md:text-[13px] leading-relaxed px-4 text-center md:text-justify"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-semibold md:text-xl">
                Green Couch Entertainment
              </span>{" "}
              is an award-winning production company, specializing in non-scripted content for streamers, networks, and brands. The brains behind the operation are Scott Weiner and Paul Reaney, real-life husbands who love to create content and tell stories. Whether a global game format, thought-provoking documentary, or a brand partnership, Green Couch Entertainment brings decades of experience to the couch, with an emphasis on collaboration.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our award-winning documentary feature,{" "}
              <span className="font-bold">THE DEPORTED</span>, followed the lives of families in the throes of deportation and, upon release, quickly become one of YouTube Originals' most-watched docs ever. The trailer alone reached 39 million people and featured a soundtrack from Belly, Meek Mill, and M.I.A., earning a Humanitarian Award and Best Documentary at several film festivals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We created and produced the first-ever wholly brand-funded syndicated game show{" "}
              <span className="font-bold">SAVE TO WIN</span>, with partners including: Coca-Cola, Kellogg's, SC Johnson, P&G, and Unilever. It won both a Reggie and Telly award after debuting on The CW and quickly sold to multiple territories, cementing GCE as global creators.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Our enduring partnerships with Time Inc, Meredith Corporation, and Dotdash have led to a string of headline-driven documentaries, including{" "}
              <span className="font-bold">PEOPLE PRESENTS: HARRY AND MEGHAN, A ROYAL REBELLION</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Prior to the couch, Scott and Paul contributed to global formats like{" "}
              GOT TALENT, SATURDAY NIGHT TAKEAWAY, THE WENDY WILLIAMS SHOW, HOLE IN THE WALL, THE CHASE, and LET'S MAKE A DEAL.
              <p className="mt-2">
                But Scott and Paul's best production is their son Louie - and if Green Couch can entertain him, we can entertain the world.
              </p>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

