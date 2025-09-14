import React from "react";
import Layout from "../Components/Layout";
import reelVideo from "/src/assets/reelbg.mp4";
import reelBgTransparent from "/src/assets/reel.png"; 


const WatchReel = () => {
  const customBackground = (
    <div className="absolute inset-0 bg-black">
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes sofaFadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        
        @keyframes sofaGlow {
          0%, 100% {
            filter: drop-shadow(0 15px 30px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(34,197,94,0.2));
          }
          50% {
            filter: drop-shadow(0 15px 30px rgba(0,0,0,0.6)) drop-shadow(0 0 25px rgba(34,197,94,0.4));
          }
        }
        
        .sofa-animate {
          animation: sofaFadeUp 1.5s ease-out, sofaGlow 3s ease-in-out infinite;
        }
        
        .sofa-shadow-animate {
          animation: sofaFadeUp 1.5s ease-out;
        }
        
        .sofa-reflection-animate {
          animation: sofaFadeUp 1.8s ease-out;
        }
      `}</style>

      {/* Video Wall - Responsive heights */}
      <div className="absolute top-0 left-0 w-full h-[85vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src={reelVideo}
          autoPlay
        //  muted
          loop
          playsInline
        />
        {/* Video glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        {/* Video border at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-[#0b8001]"></div>
      </div>

      {/* Transparent background image at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[110vh] md:h-[100vh] lg:h-[120vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={reelBgTransparent}
            alt="transparent background"
            className="object-cover w-full h-full"
            style={{
              filter: 'brightness(0.7) contrast(1.2)',
            }}
          />
        </div>
        </div>
        

    </div>
  );

  return (
    <Layout custom={customBackground}>
  
    </Layout>
  );
};

export default WatchReel;
