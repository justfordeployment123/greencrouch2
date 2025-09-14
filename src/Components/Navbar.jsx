import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Enhanced CSS for smooth ambient lighting with bulb glow
const ambientLightStyles = `
  @keyframes ambientGlow {
    0%, 100% { 
      opacity: 0.3;
      transform: scale(1);
    }
    50% { 
      opacity: 0.6;
      transform: scale(1.02);
    }
  }
  
  @keyframes subtlePulse {
    0%, 100% { 
      opacity: 0.2;
    }
    50% { 
      opacity: 0.4;
    }
  }
  
  @keyframes bulbGlow {
    0%, 100% { 
      opacity: 0.6;
      transform: scale(1);
      filter: blur(20px);
    }
    50% { 
      opacity: 0.9;
      transform: scale(1.1);
      filter: blur(25px);
    }
  }
  
  @keyframes innerGlow {
    0%, 100% { 
      opacity: 0.8;
      transform: scale(0.95);
    }
    50% { 
      opacity: 1;
      transform: scale(1.05);
    }
  }
  
  @keyframes outerGlow {
    0%, 100% { 
      opacity: 0.4;
      transform: scale(1.2);
    }
    50% { 
      opacity: 0.7;
      transform: scale(1.3);
    }
  }
  
  .ambient-glow {
    animation: ambientGlow 4s ease-in-out infinite;
  }
  
  .subtle-pulse {
    animation: subtlePulse 3s ease-in-out infinite;
  }
  
  .bulb-glow {
    animation: bulbGlow 3s ease-in-out infinite;
  }
  
  .inner-glow {
    animation: innerGlow 2.5s ease-in-out infinite;
  }
  
  .outer-glow {
    animation: outerGlow 4s ease-in-out infinite;
  }
`;

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/About" },
  { label: "REEL", path: "/WatchReel" },
  { label: "OUR WORK", path: "/Ourwork" },
  { label: "BIOS", path: "/Bios" },
  { label: "PARTNERS", path: "/Partners" },
  { label: "CONTACT US", path: "/Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  return (
    <>
      {/* Inject ambient lighting styles */}
      <style dangerouslySetInnerHTML={{ __html: ambientLightStyles }} />
      
      <div className="relative h-full md:h-auto">
      {/* ------------------ Mobile Header ------------------ */}
      <div className="flex items-center justify-between px-4 pt-0 pb-2 md:hidden bg-black/20 backdrop-blur-sm">
        {/* Mobile Menu Button on the left */}
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-green-200 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-green-200 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-green-200 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile Logo on the right with enhanced glow */}
        <div className="relative flex items-center justify-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] mt-0">
          {/* Multiple glow layers for mobile */}
          <div className="absolute inset-0 bg-gradient-radial from-[#319d0a]/60 via-[#319d0a]/30 to-transparent rounded-full blur-xl outer-glow"></div>
          <div className="absolute inset-2 bg-gradient-radial from-[#319d0a]/80 via-[#319d0a]/40 to-transparent rounded-full blur-lg inner-glow"></div>
          <div className="absolute inset-1 bg-gradient-radial from-white/30 via-[#319d0a]/50 to-transparent rounded-full blur-md bulb-glow"></div>
          
          <img
            src="/src/assets/updatedlogonav.png"
            alt="Mobile Logo"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* ------------------ Desktop Sidebar ------------------ */}
      <div className="relative hidden md:flex md:flex-col md:items-center md:p-4 lg:p-6 md:h-full md:w-full lg:w-auto">
        
        {/* Ambient Light Glow Effects */}
        {/* Top area glow from bulb */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#319d0a]/20 via-[#319d0a]/10 to-transparent rounded-full blur-3xl ambient-glow"></div>
        </div>
        
        {/* Navigation area ambient glow */}
        <div className="absolute top-1/3 right-0 w-24 h-64 md:w-32 md:h-80 lg:w-40 lg:h-96 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#319d0a]/15 via-[#319d0a]/8 to-transparent rounded-full blur-2xl subtle-pulse"></div>
        </div>
        
        {/* Soft side glow */}
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-20 lg:w-24 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-[#319d0a]/10 to-transparent blur-xl subtle-pulse"></div>
        </div>

        {/* Logo fixed at top with enhanced bulb glow */}
        <div className="absolute -translate-x-1/2 -top-6 md:-top-8 lg:-top-10 left-1/2">
          <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]">
            
            {/* Outer glow layer */}
            <div className="absolute -inset-8 md:-inset-10 lg:-inset-12 bg-gradient-radial from-[#319d0a]/40 via-[#319d0a]/20 to-transparent rounded-full blur-3xl outer-glow pointer-events-none"></div>
            
            {/* Middle glow layer */}
            <div className="absolute -inset-6 md:-inset-8 lg:-inset-10 bg-gradient-radial from-[#319d0a]/60 via-[#319d0a]/30 to-transparent rounded-full blur-2xl inner-glow pointer-events-none"></div>
            
            {/* Inner glow layer */}
            <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-gradient-radial from-white/40 via-[#319d0a]/50 to-transparent rounded-full blur-xl bulb-glow pointer-events-none"></div>
            
            {/* Bright center glow */}
            <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 bg-gradient-radial from-white/60 via-[#319d0a]/70 to-transparent rounded-full blur-lg inner-glow pointer-events-none"></div>
            
            {/* Very bright core */}
            <div className="absolute inset-0 bg-gradient-radial from-white/30 via-[#319d0a]/40 to-transparent rounded-full blur-md bulb-glow pointer-events-none"></div>
            
            <img
              src="/src/assets/updatedlogonav.png"
              alt="Halo Logo"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] lg:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Links */}
        <nav className="w-full mt-32 md:mt-36 lg:mt-40 xl:mt-44 relative z-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            {navItems.map((item, index) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block w-full text-center text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 
                     tracking-wide leading-relaxed font-normal uppercase 
                     py-1 md:py-1.5 lg:py-2 px-2 lg:px-3 
                     transition-colors duration-200 
                     no-underline decoration-none
                     ${isActive
                        ? "text-[#319d0a]"
                        : "text-white/90" 
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* ------------------ Mobile Menu ------------------ */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-black/30 backdrop-blur-sm ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        {/* Logo fixed at top (same as desktop) */}
        <div className="relative -translate-x-1/2 left-1/2">
         
        </div>

        {/* Links below logo */}
        <nav className="px-4 py-2">
          <div className="space-y-0">
            {navItems.map((item, index) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-center text-[14px] sm:text-[16px] 
                     font-normal tracking-wider uppercase leading-tight 
                     py-2.5 px-3 
                     transition-colors duration-200
                     no-underline decoration-none
                     ${isActive
                        ? "text-[#319d0a]"
                        : "text-white/90"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
      </div>
    </>
  );
};

export default Navbar;