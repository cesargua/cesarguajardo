// "use client"
// import { Geo } from 'next/font/google';
// import About from './About'

// import React, {useState} from "react";

// const geo = Geo({ subsets: ['latin'], weight: '400' }); //Specify the correct weight

// import { IconButton, IconButtonProps } from "@material-tailwind/react"; 
// import { CgMail } from "react-icons/cg";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import ResumeLogo from './projects/SVGLogos/ResumeLogo'


// interface MyComponentProps {
//   about: boolean; // Define the 'about' prop type
//   handleAbout: void;
// }


// const Intro: React.FC<{ about: boolean; handleAbout: () => void }> = ({ about, handleAbout }) => {
//     const user = "cesarguajardo16";
//     const email_domain = "gmail.com"
//     const email = `${user}@${email_domain}`
//   return (
//     <div
//       className={`flex justify-center items-center min-h-screen px-4 transition-all duration-[2000ms] ease-in-out`}>
//       {/* Profile Picture Section */}
//       <div className={`flex flex-col items-center text-center transition-transform duration-[2000ms] ${
//           about ? "translate-x-[50%]" : "translate-x-[150%]"
//         }`}>
//         <img
//           onClick={handleAbout}
//           src="/images/pfp_pro.jpeg"
//           alt="Profile Picture"
//           className="w-60 h-60 md:w-30 md:h-60 lg:w-80 lg:h-80 rounded-full cursor-pointer"
//         />
//         <h1 className="mt-4 text-6xl font-bold font-geo text-white text-customGray">
//           Cesar Guajardo
//         </h1>
//         <h2 className="mt-4 text-2xl font-bold font-geo text-white text-customGray">
//           Full-Stack Software Developer
//         </h2>
//         <div className="p-3 flex space-x-4">
//         <IconButton
//           placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...({} as IconButtonProps)} // ✅ Explicitly cast to correct type
//           size="lg"
//           variant="filled"
//           onClick={() => { window.location.href = `mailto:${email}`; } }
//           className="hover:opacity-80 transition-opacity duration-200"            >
//               <CgMail className="text-2xl hover:opacity-80 transition-opacity duration-200"  />
//             </IconButton>
//             <IconButton
//             placeholder={undefined}
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             {...({} as IconButtonProps)} // ✅ Explicitly cast to correct type
//             size="lg"
//             variant="filled"
//             color="black"
//             onClick={() => window.open("https://www.linkedin.com/in/cesarpro/", "_blank")}
//             className="hover:opacity-80 transition-opacity duration-200"
//           >
//             <FaLinkedin className="text-2xl" />
//           </IconButton>

//           <IconButton
//             placeholder={undefined}
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             {...({} as IconButtonProps)}
//             size="lg"
//             variant="filled"
//             color="black"
//             onClick={() => window.open("https://github.com/cesargua", "_blank")}
//             className="hover:opacity-80 transition-opacity duration-200"
//           >
//             <FaGithub className="text-2xl" />
//           </IconButton>

//           <IconButton
//             placeholder={undefined}
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             {...({} as IconButtonProps)}
//             size="lg"
//             variant="filled"
//             color="gray"
//             onClick={() =>
//               window.open(
//                 "https://docs.google.com/document/d/e/2PACX-1vRohL9n3VFHynaUChowbqo7i6ghrEZb_YbqPsE3Mhef19F0sAz0UhHGIb1dAfoO8lA4hlv-WeIMC6s1/pub",
//                 "_blank"
//               )
//             }
//             className="hover:opacity-80 transition-opacity duration-200"
//           >
//             <ResumeLogo />
//           </IconButton>


//         </div>
//       </div>

//       {/* About Me Section */}
//         <div className="ml-15 max-w-md">
//           <About about={about} />
//         </div>
      
//     </div>
//   );
// };

// export default Intro;

"use client";

import { Geo } from "next/font/google";
import About from "./About";
import React from "react";
import { IconButton } from "@material-tailwind/react";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ResumeLogo from "./projects/SVGLogos/ResumeLogo";

const geo = Geo({ subsets: ["latin"], weight: "400" });

interface IntroProps {
  about: boolean;
  handleAbout: () => void;
}

export default function Intro({ about, handleAbout }: IntroProps) {
  const email = `cesarguajardo16@gmail.com`;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ─── PROFILE PANEL ─── */}
      <div
        className={`
          absolute inset-0
          flex items-center justify-center
          transform transition-transform duration-1000 ease-out
          ${about ? "-translate-x-[25%]" : "translate-x-0"}
        `}
      >
        <div className="flex flex-col items-center text-center px-4">
          <img
            src="/images/pfp_pro.jpeg"
            alt="Profile Picture"
            onClick={handleAbout}
            className=" rounded-full
                    w-40 h-40         /* base (mobile) */
                    sm:w-48 sm:h-48   /* ≥640px */
                    md:w-60 md:h-60   /* ≥768px */
                    lg:w-72 lg:h-72   /* ≥1024px */
                    xl:w-80 xl:h-80   /* ≥1280px */
                    cursor-pointer
                  "
          />
          <h1 className={`
              mt-4 
              text-6xl 
              font-bold 
              ${geo.className} 
              text-white`}>
            Cesar Guajardo
          </h1>
          <h2 className={`mt-2 text-2xl font-semibold ${geo.className} text-customGray`}>
            Full-Stack Software Developer
          </h2>
          <div className="flex space-x-4 mt-4">
            <IconButton
              size="lg"
              variant="filled"
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="hover:opacity-80 transition-opacity"
            >
              <CgMail className="text-2xl" />
            </IconButton>
            <IconButton
              size="lg"
              variant="filled"
              color="black"
              onClick={() => window.open("https://www.linkedin.com/in/cesarpro/", "_blank")}
            >
              <FaLinkedin className="text-2xl" />
            </IconButton>
            <IconButton
              size="lg"
              variant="filled"
              color="black"
              onClick={() => window.open("https://github.com/cesargua", "_blank")}
            >
              <FaGithub className="text-2xl" />
            </IconButton>
            <IconButton
              size="lg"
              variant="filled"
              color="gray"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vRohL9n3VFHynaUChowbqo7i6ghrEZb_YbqPsE3Mhef19F0sAz0UhHGIb1dAfoO8lA4hlv-WeIMC6s1/pub",
                  "_blank"
                )
              }
            >
              <ResumeLogo />
            </IconButton>
          </div>
        </div>
      </div>

      {/* ─── ABOUT PANEL ─── */}
      <div
        className={`
          absolute inset-0
          flex items-center justify-center
          transform transition-all duration-500 ease-out
          ${about ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          pointer-events-none
        `}
      >
        <div className="pointer-events-auto max-w-md px-4">
          <About about={about} />
        </div>
      </div>
    </div>
  );
}
