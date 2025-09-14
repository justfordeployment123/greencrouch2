import React, { useState, useRef, useEffect } from "react";
import tvFrame from "/src/assets/tv.png";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVolumePrompt, setShowVolumePrompt] = useState(false);
  const videoRef = useRef(null);
  const overlayTimeoutRef = useRef(null);
  const restartTimeoutRef = useRef(null);
  const hasUserInteracted = useRef(false);

  // Initialize video on component mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configure video for autoplay
    video.playsInline = true;
    video.loop = false;
    video.volume = 1.0; // Set volume to maximum
    video.muted = true; // Must start muted for autoplay
    
    // Show olive screen initially
    setShowOverlay(true);
    
    // Attempt to play video immediately after component mounts
    const attemptPlay = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        video.load();
        
        await new Promise((resolve) => {
          if (video.readyState >= 3) {
            resolve();
          } else {
            video.addEventListener('canplay', resolve, { once: true });
          }
        });
        
        await video.play();
        console.log("Video autoplay successful");
        
        // Show volume prompt after video starts
        setTimeout(() => {
          if (!hasUserInteracted.current) {
            setShowVolumePrompt(true);
          }
        }, 500);
        
      } catch (error) {
        console.log("Autoplay failed:", error.name);
        setTimeout(() => {
          video.play().catch(console.log);
        }, 1000);
      }
    };
    
    attemptPlay();

    // Add interaction listeners for unmuting
    const handleFirstInteraction = () => {
      if (video && video.muted && !hasUserInteracted.current) {
        video.muted = false;
        setIsMuted(false);
        setShowVolumePrompt(false);
        hasUserInteracted.current = true;
        console.log("Audio unmuted on user interaction");
      }
    };

    // Listen for any user interaction on the page
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
      if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
    };
  }, []);

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setIsTransitioning(true);
    
    if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    overlayTimeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 300);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoEnded = () => {
    setShowOverlay(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      setTimeout(() => {
        video.play().catch(console.log);
      }, 500);
    }
  };

  const handleUserClick = async () => {
    const video = videoRef.current;
    if (!video) return;
    
    // Always unmute on click
    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setShowVolumePrompt(false);
      hasUserInteracted.current = true;
    }
    
    try {
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.log("Click play failed:", error);
    }
  };

  const handleVideoError = (e) => {
    console.error("Video error:", e.target.error);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 0.7;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        .video-container {
          cursor: pointer;
          position: relative;
        }

        .video-element {
          transition: opacity 0.6s ease-in-out;
        }

        .volume-prompt {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 14px;
          z-index: 100;
          animation: fadeInOut 2s ease-in-out infinite, bounce 2s ease-in-out infinite;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        /* Mobile text using viewport units for better scaling */
        @media (max-width: 768px) {
          .mobile-brand-text {
            font-size: clamp(2.5rem, 12vw, 4rem) !important;
            line-height: 1 !important;
          }
          
          .mobile-tagline-text {
            font-size: clamp(0.75rem, 3vw, 1rem) !important;
            letter-spacing: 0.12em !important;
          }
        }

        @media (max-width: 640px) {
          .mobile-brand-text {
            font-size: clamp(2.25rem, 13vw, 3.5rem) !important;
          }
          
          .mobile-tagline-text {
            font-size: clamp(0.7rem, 3.2vw, 0.9rem) !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-brand-text {
            font-size: clamp(2rem, 14vw, 3rem) !important;
          }
          
          .mobile-tagline-text {
            font-size: clamp(0.65rem, 3.5vw, 0.85rem) !important;
          }
        }

        /* Mobile TV container scaling */
        @media (max-width: 768px) {
          .tv-wrapper {
            transform: scale(1.2);
            transform-origin: center center;
            margin: 2rem 0;
          }
        }

        @media (max-width: 640px) {
          .tv-wrapper {
            transform: scale(1.15);
          }
        }

        @media (max-width: 480px) {
          .tv-wrapper {
            transform: scale(1.1);
          }
        }

        /* Ensure desktop remains unchanged */
        @media (min-width: 769px) {
          .tv-wrapper {
            transform: none !important;
          }
          
          .mobile-brand-text {
            font-size: inherit !important;
          }
          
          .mobile-tagline-text {
            font-size: inherit !important;
          }
        }
      `}</style>

      <section className="relative grid min-h-screen pt-2 bg-transparent place-items-center md:pt-6">
        <div className="relative mx-auto w-full px-2 sm:px-4 lg:px-8 max-w-[90vw] sm:max-w-[95vw] md:max-w-[55rem] lg:max-w-[70rem] xl:max-w-[80rem] lg:translate-x-[4%]">
          
          {/* Header text with viewport-based sizing for mobile */}
          <div className="absolute top-4 sm:top-8 md:top-4 lg:top-2 xl:top-4 z-30 w-full px-2 sm:px-4 text-center text-white -translate-x-1/2 left-1/2">
            <h1 className="mb-1 sm:mb-2 text-5xl sm:text-6xl md:text-8xl lg:text-[130px] xl:text-[140px] font-bold tracking-tight sm:tracking-normal font-sans leading-tight max-md:text-[clamp(2.5rem,12vw,4rem)]">
              <span className="text-[#319d0a] font-bold">green</span>
              <span className="font-bold text-white">couch</span>
            </h1>
            <h2 className="text-[10px] sm:text-[10px] md:text-[16px] lg:text-lg xl:text-xl font-normal tracking-[0.15em] sm:tracking-[0.2em] opacity-95 font-sans max-md:text-[clamp(0.75rem,3vw,1rem)]">
              ENTERTAINING THE WORLD
            </h2>
          </div>

          {/* TV & Video with wrapper for mobile scaling */}
          <div className="relative flex items-center justify-center mt-16 sm:mt-24 md:mt-16 lg:mt-20 xl:pt-8">
            <div className="tv-wrapper w-full">
              <div
                className="relative w-full mx-auto
                           max-w-[100vw] 
                           sm:max-w-[90vw] 
                           md:max-w-[800px] 
                           lg:max-w-[1000px]
                           xl:max-w-[1200px]"
              >
                {/* VIDEO inside TV window */}
                <div
                  className="absolute z-10"
                  style={{
                    top: "26.5%",
                    left: "27.5%",
                    width: "32%",
                    height: "38%",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}
                  onClick={handleUserClick}
                >
                  {/* Olive screen overlay - shows initially */}
                  <img
                    src="/src/assets/tv_screen_only.png"
                    alt="TV Screen"
                    className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-500 ${
                      showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  />
                  
                  <video
                    ref={videoRef}
                    className="video-element object-cover w-full h-full brightness-110 contrast-110"
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoLoadedData}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnded}
                    onError={handleVideoError}
                  >
                    <source src="/src/assets/homevideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* SOFT WHITE GLOW AROUND TV */}
                <div
                  className="absolute inset-0 pointer-events-none z-5"
                  style={{
                    top: "0%",
                    left: "0%",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    filter: "blur(25px)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                  }}
                />
                
                {/* ENHANCED TV BORDER GLOW */}
                <div
                  className="absolute inset-0 pointer-events-none z-6"
                  style={{
                    top: "1%",
                    left: "1%",
                    width: "98%",
                    height: "98%",
                    background:
                      "radial-gradient(circle, rgba(50,157,10,0.6) 0%, rgba(50,157,10,0.3) 40%, transparent 70%)",
                    filter: "blur(15px)",
                    animation: "pulseGlow 3s ease-in-out infinite 0.5s",
                  }}
                />

                {/* TV FRAME */}
                <img
                  src={tvFrame}
                  alt="Green TV Frame"
                  className="relative z-20 block w-full h-auto pointer-events-none"
                />

                {/* FLOOR GLOW */}
                <div
                  className="absolute z-10 -translate-x-1/2 pointer-events-none opacity-50 sm:opacity-70 left-1/2"
                  style={{
                    bottom: "-2%",
                    width: "62%",
                    height: "32px sm:64px",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.35), transparent 80%)",
                    borderRadius: "50%",
                    filter: "blur(8px) sm:blur(12px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Volume prompt for user interaction */}
        {showVolumePrompt && (
          <div 
            className="volume-prompt"
            onClick={handleUserClick}
          >
            🔊 Click anywhere to enable sound
          </div>
        )}
      </section>
    </>
  );
};

export default Home;