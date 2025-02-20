"use client";

import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiDocker, SiTailwindcss, SiCplusplus, SiFirebase, SiAwslambda } from "react-icons/si";
import MUILogo from "./projects/SVGLogos/MUILogo";
import ExpressLogo from "./projects/SVGLogos/ExpressLogo";

const techStack = [
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  // { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  // { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  // { name: "React", icon: <FaReact />, color: "text-blue-400" },
  // { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  // { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  // { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
];

const progLang = [
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
]

const frontEnd = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
  {name: "Material UI", icon: <MUILogo />, color:""}
  //Material Tailwind
]

const backEnd = [
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  // { name: "Next.js", icon: < />, color: "text-green-600" },
  // { name: "MySQL", icon: <Fa/>, color: "text-green-600" },
  { name: "Express", icon: <ExpressLogo />, color: "" },
  { name: "Firebase", icon: <SiFirebase/>, color: "text-orange-400" },
  { name: "AWS", icon: <SiAwslambda/>, color: "text-orange-400" },
]

// Duplicate the tech stack to make it appear infinite
const duplicatedTechStack = [...techStack];

export default function SkillsV2() {
  return (
    <div className="flex flex-col items-center justify-center py-20 overflow-hidden">
      <h2 className="text-6xl font-bold text-white mb-10">Tech Stack.</h2>

      {/* Carousel Wrapper */}
      {/* <Carousel loop autoplay autoplayDelay={10000} className="w-full max-w-6xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> */}
      <h3 className="text-3xl font-bold text-white mb-10 ">Programming Languages</h3>
      <motion.div
        className="flex space-x-20 justify-center flex-wrap"
      >
        {progLang.map((tech, index) => (
          <motion.div
            key={index}
            className="relative group"
            animate={{
              y: ["0px", "-10px", "0px"], // Moves up and down
            }}
            transition={{
              duration: 2, // Adjust speed of floating
              repeat: Infinity, // Loops forever
              repeatType: "mirror", // Moves back and forth smoothly
              ease: "easeInOut",
            }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-all duration-800"></div>

            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gray-900 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition-all duration-300">
              <span className={`${tech.color} text-6xl`}>{tech.icon}</span>
            </div>

            {/* Tech Name */}
            <p className="text-center text-gray-300 mt-2">{tech.name}</p>
          </motion.div>
          ))}
        </motion.div>

        {/*frontend */}
        <h3 className="text-3xl font-bold text-white mb-10 pt-20">Front End Stack</h3>
        <motion.div className="flex space-x-20 justify-center flex-wrap">
          {frontEnd.map((tech, index) => (
              <motion.div
                key={index}
                className="relative group"
                animate={{
                  y: ["0px", "-10px", "0px"], // Moves up and down
                }}
                transition={{
                  duration: 2, // Adjust speed of floating
                  repeat: Infinity, // Loops forever
                  repeatType: "mirror", // Moves back and forth smoothly
                  ease: "easeInOut",
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-all duration-800"></div>

                {/* Icon Circle */}
                <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gray-900 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition-all duration-300">
                  <span className={`${tech.color} text-6xl`}>{tech.icon}</span>
                </div>

                {/* Tech Name */}
                <p className="text-center text-gray-300 mt-2">{tech.name}</p>
              </motion.div>
              ))}
          </motion.div> 

        <h3 className="text-3xl font-bold text-white mb-10 pt-20">Back End Stack</h3>
          <motion.div className="flex space-x-20 justify-center flex-wrap">
            {backEnd.map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  animate={{
                    y: ["0px", "-10px", "0px"], // Moves up and down
                  }}
                  transition={{
                    duration: 2, // Adjust speed of floating
                    repeat: Infinity, // Loops forever
                    repeatType: "mirror", // Moves back and forth smoothly
                    ease: "easeInOut",
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-all duration-800"></div>

                  {/* Icon Circle */}
                  <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gray-900 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition-all duration-300">
                    <span className={`${tech.color} text-6xl`}>{tech.icon}</span>
                  </div>

                  {/* Tech Name */}
                  <p className="text-center text-gray-300 mt-2">{tech.name}</p>
                </motion.div>
                ))}
            </motion.div> 
      </div>
  );
}
