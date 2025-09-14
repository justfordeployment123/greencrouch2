
// import React from "react";
// import Navbar from "./Navbar";

// const Layout = ({ children, bgImage, bgVideo, custom }) => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Agar koi custom layout bhejna ho (jaise WatchReel) */}
//       {custom ? (
//         custom
//       ) : (
//         <>
//           {/* ✅ Normal Background */}
//           {bgVideo && (
//             <video
//               className="absolute inset-0 object-cover w-full h-full"
//               src={bgVideo}
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           )}

//           {!bgVideo && bgImage && (
//             <div
//               className="absolute inset-0 bg-center bg-cover"
//               style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                   // backgroundSize: bgImage?.includes("Partnerbg") ? "contain" : "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           )}

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/30"></div>
//         </>
//       )}

//       {/* Main content + Navbar */}
//       <div className="relative z-10 h-full">
//         {/* Mobile */}
//         <div className="flex flex-col h-full md:hidden">
//           <div className="flex-shrink-0">
//             <Navbar />
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto text-white">
//             {children}
//           </div>
//         </div>

//         {/* Desktop */}
//         <div className="hidden h-full md:flex">
//           <div className="flex-1 p-2 text-white">{children}</div>
//           <div className="w-59.5">
//             <Navbar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, bgImage, bgVideo, custom }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Agar koi custom layout bhejna ho (jaise WatchReel) */}
      {custom ? (
        custom
      ) : (
        <>
          {/* ✅ Normal Background */}
          {bgVideo && (
            <video
              className="absolute inset-0 object-cover w-full h-full"
              src={bgVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {!bgVideo && bgImage && (
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </>
      )}

      {/* Main content + Navbar */}
      <div className="relative z-10 h-full">
        {/* Mobile */}
        <div className="flex flex-col h-full md:hidden">
          <div className="flex-shrink-0">
            <Navbar />
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-white">
            {children}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden h-full md:flex">
          {/* 👇 Shifted 20px to right */}
          <div className="flex-1 p-2 text-white ml-[20px]">
            {children}
          </div>
          <div className="w-59.5">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;



// import React from "react";
// import Navbar from "./Navbar";

// const Layout = ({ children, bgImage, bgVideo, custom }) => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Agar koi custom layout bhejna ho (jaise WatchReel) */}
//       {custom ? (
//         custom
//       ) : (
//         <>
//           {/* ✅ Normal Background */}
//           {bgVideo && (
//             <video
//               className="absolute inset-0 object-cover w-full h-full"
//               src={bgVideo}
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           )}

//           {!bgVideo && bgImage && (
//             <div
//               className="absolute inset-0 bg-center bg-cover"
//               style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           )}

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/30"></div>
//         </>
//       )}

//       {/* Main content + Navbar */}
//       <div className="relative z-10 h-full">
//         {/* Mobile */}
//         <div className="flex flex-col h-full md:hidden">
//           <div className="flex-shrink-0">
//             <Navbar />
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto text-white">
//             {children}
//           </div>
//         </div>

//         {/* Desktop */}
//         <div className="hidden h-full md:block">
//           {/* ✅ Children centered relative to full screen */}
//           <div className="absolute inset-0 flex items-center justify-center p-3 text-white">
//             {children}
//           </div>

//           {/* ✅ Navbar fixed on right */}
//           <div className="absolute top-0 right-0 h-full w-[240px]">
//             <Navbar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
