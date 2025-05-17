
"use client"

import { useState, useEffect, useRef } from "react";

const About: React.FC<{ about: boolean }> = ({ about }) => {
  const [visible, setVisible] = useState(false); // Controls whether the component is rendered
  const [startAnimation, setStartAnimation] = useState(false); // Controls the fade-in animation
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (about) {
      // Introduce a delay before showing the component
      setVisible(true);
      const delayTimer = setTimeout(() => {
        setStartAnimation(true); // Start fade-in after component is visible
      }, 600); // Delay in ms (e.g., 300ms)
      
      return () => clearTimeout(delayTimer); // Cleanup if `about` changes before timeout
    } else {
      setStartAnimation(false); // Trigger fade-out animation
      const hideTimer = setTimeout(() => {
        setVisible(false); // Remove component after fade-out
      }, 2000); // Matches the fade-out duration

      return () => clearTimeout(hideTimer); // Cleanup if `about` changes before timeout
    }
  }, [about]);

  return (
    visible && ( // Render only when visible is true
      <div
        ref={aboutRef}
        className={`p-3 bg-gray-800 rounded-lg w-full text-white transition-all duration-[1000ms] ease-in-out ${
          startAnimation ? "opacity-100 translate-x-[70%]" : "opacity-0 translate-x-[180%]"
        }`}
      >
        <h1 className="text-5xl font-geo font-bold">About Me</h1>
        <p className="font-geo text-xl">
            I’m a UC San Diego ’22 CS graduate (Go Tritons!) and Full‑Stack Developer who builds efficient, scalable applications with JavaScript, Python,
            SQL, and more. 
            <br/> I focus on simplicity and cohesion—writing intuitive, maintainable code—and thrive in collaborative, 
            team‑first environments. Whether I’m designing user‑first interfaces, optimizing databases, 
            or architecting back‑end services, my goal is to deliver impactful solutions that bring ideas to life!
        </p>
      </div>
    )
  );
};

export default About;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for better animations

// const About: React.FC<{ about: boolean }> = ({ about }) => {
//   const [visible, setVisible] = useState(false);
//   const aboutRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (about) {
//       setVisible(true); // Make component visible
//     } else {
//       // Set a timeout before hiding to allow fade-out animation
//       const timer = setTimeout(() => setVisible(false), 800);
//       return () => clearTimeout(timer);
//     }
//   }, [about]);

//   return (
//     visible && (
//       <motion.div
//         ref={aboutRef}
//         initial={{ opacity: 0, x: 100 }} // Start hidden & slightly off-screen
//         animate={{ opacity: 1, x: 0 }} // Fade in & slide to original position
//         exit={{ opacity: 0, x: 100 }} // Fade out & move out
//         transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
//         className="p-6 bg-gray-800 rounded-lg text-white shadow-lg flex flex-row items-center gap-8 max-w-4xl"
//       >
//         {/* Optional Profile Picture */}
//         <img
//           src="/profile.jpg" // Replace with actual image path
//           alt="Profile Picture"
//           className="w-32 h-32 rounded-full shadow-md"
//         />

//         {/* Text Content */}
//         <div>
//           <h1 className="text-4xl font-geo font-bold">About Me</h1>
//           <p className="mt-2 font-geo text-lg leading-relaxed">
//             Hi! I'm Cesar, a Full-Stack Software Developer with a passion for building efficient and scalable solutions and problem-solving.
//             I graduated from UC San Diego in 2022 with a degree in Computer Science, where I gained a strong foundation in core principles such 
//             as Data Structures, Database Development, and Full-Stack Engineering. During my academic journey, I also refined my ability to 
//             collaborate in teams, tackle complex problems, and develop software that balances functionality with simplicity.

//             <br /><br />
//             Throughout my career, I’ve worked on multiple projects across various roles, leveraging technologies such as JavaScript, Python, 
//             and SQL, among others. My engineering philosophy revolves around simplicity and cohesion—ensuring that solutions remain intuitive, 
//             maintainable, and efficient.

//             <br /><br />
//             Above all, I value collaboration and adopt a team-first mindset, believing that collective achievements are more meaningful than 
//             individual successes. Whether it's designing scalable applications, optimizing databases, or enhancing user experiences, I am 
//             dedicated to contributing to projects that make an impact. As a skilled Full-Stack Developer, I’m here to help bring ideas to life!
//           </p>
//         </div>
//       </motion.div>
//     )
//   );
// };

// export default About;


