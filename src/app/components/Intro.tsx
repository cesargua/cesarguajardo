"use client"
import { Geo } from 'next/font/google';
import About from './About'

import React, {useState} from "react";

const geo = Geo({ subsets: ['latin'], weight: '400' }); //Specify the correct weight

import { IconButton } from "@material-tailwind/react";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ResumeLogo from './projects/SVGLogos/ResumeLogo'


interface MyComponentProps {
  about: boolean; // Define the 'about' prop type
  handleAbout: void;
}





const Intro: React.FC<{ about: boolean; handleAbout: () => void }> = ({ about, handleAbout }) => {
  
    const user = "cesarguajardo16";
    const email_domain = "gmail.com"
    const email = `${user}@${email_domain}`
  return (
    <div
      className={`flex items-center min-h-screen px-4 transition-all duration-[2000ms] ease-in-out`}>
      {/* Profile Picture Section */}
      <div className={`flex flex-col items-center text-center transition-transform duration-[2000ms] ${
          about ? "translate-x-[50%]" : "translate-x-[150%]"
        }`}>
        <img
          onClick={handleAbout}
          src="/images/pfp_pro.jpeg"
          alt="Profile Picture"
          className="w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full cursor-pointer"
        />
        <h1 className="mt-4 text-6xl font-bold font-geo text-white text-customGray">
          Cesar Guajardo
        </h1>
        <h2 className="mt-4 text-2xl font-bold font-geo text-white text-customGray">
          Full-Stack Software Developer
        </h2>
        <div className="p-3 flex space-x-4">
          <a href={`mailto:${email}`} >
            <IconButton >
              <CgMail className="text-2xl hover:opacity-80 transition-opacity duration-200"  />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/cesarpro/" target="_blank" >
            <IconButton >
              <FaLinkedin className="text-2xl hover:opacity-80 transition-opacity duration-200"/>
            </IconButton>
            </a>
            <a href="https://github.com/cesargua" target="_blank" >
            <IconButton >
              <FaGithub className="text-2xl hover:opacity-80 transition-opacity duration-200"/>
            </IconButton>
            </a>
          <a href='https://docs.google.com/document/d/e/2PACX-1vRohL9n3VFHynaUChowbqo7i6ghrEZb_YbqPsE3Mhef19F0sAz0UhHGIb1dAfoO8lA4hlv-WeIMC6s1/pub'
            target="_blank">
          <IconButton >
            <ResumeLogo />
          </IconButton>
          </a>
        </div>
      </div>

      {/* About Me Section */}
        <div className="ml-15 max-w-md">
          <About about={about} />
        </div>
      
    </div>
  );
};

export default Intro;