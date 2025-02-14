// "use client";

// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Carousel,
//   Dialog,
//   DialogHeader,
//   Avatar,
//   DialogBody,
//   DialogFooter
// } from "@material-tailwind/react";
// import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
// import {
//   DiReact,
//   DiPostgresql,
//   DiAws,
//   DiJsBadge,
//   DiCss3,
//   DiNodejs
// } from "react-icons/di";
// import ExpressLogo from "./SVGLogos/ExpressLogo";

// import {useState} from 'react'
// import { motion } from "framer-motion";

// interface Props {
//   handleOpen: () => void;
//   image: boolean;
// }

// const AtelierCard: React.FC<Props> = ({handleOpen, image}) => {


//   return (
//     <div className="flex items-center justify-center px-4 lg:px-12">
//       <Card className="w-full h-full object-cover max-w-[64rem] h-[32rem] flex flex-row bg-[#5c6a56] shadow-lg"
//       onClick={handleOpen}>
//         {/* Card Header */}
//         <CardHeader
//             shadow={false}
//             floated={false}
//             className="m-0 w-1/2 shrink-0 rounded-r-none"
//           >
//             <Carousel>
//               <img
//                 src="/AtelierScreenshot/Atelier1.png"
//                 alt="Card image"
//                 className="h-full w-full object-cover"
//                 onClick={handleOpen}
//               />
//               <img
//                 src="/AtelierScreenshot/Atelier2.png"
//                 alt="Card image"
//                 className="h-full w-full object-cover object-left"
//               />
//               <img
//                 src="/AtelierScreenshot/Atelier3.png"
//                 alt="Card image"
//                 className="h-full w-full object-cover object-left"
//               />
//                <img
//                 src="/AtelierScreenshot/Atelier4.png"
//                 alt="Card image"
//                 className="h-full w-full object-cover object-left"
//               />
//                <img
//                 src="/AtelierScreenshot/Atelier5.png"
//                 alt="Card image"
//                 className="h-full w-full object-cover object-left"
//               />
//             </Carousel>
//           </CardHeader>

//         {/* Card Body */}
//         <CardBody className="flex flex-col justify-center text-left px-6">
//           {/* Title with GitHub Icon */}
//           <div className="flex items-center space-x-3 mb-4">
//             <Typography
//               variant="h5"
//               className="text-white text-4xl font-bold font-lato"
//             >
//               Atelier
//             </Typography>
//             <a
//               href="https://github.com/cesargua/AtelierAPI" // Replace with your GitHub URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//             <FaGithub className="text-black hover:text-gray-300 transition-colors duration-200"
//             title="Back-End Repo" />
//             </a>
//             <a
//               href="https://github.com/cesargua/Atelier" // Replace with your GitHub URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <FaGithub className="hover:text-gray-300 transition-colors duration-200" 
//               title="Front-End Repo" />
              
//             </a>
//           </div>

//           {/* Description */}
//           <Typography className="text-white text-sm font-lato mb-4">
//           A concept e-commerce application that showcases a variety of products and offers key features to enhance the user experience. It includes a Related Items section that displays products similar to the one currently being viewed, helping users discover relevant options. 
//           The application also features an Outfit List, allowing users to save and organize their favorite items for future reference. A Q&A section provides a platform for users to ask and answer questions about products, while the Ratings and Reviews section enables users to leave feedback and read reviews to make informed purchasing decisions.
//           </Typography>

//           {/* Tech Logos */}
//           <div className="flex items-center space-x-4">
//           {/* React */}
//           <a
//             href="https://react.dev/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-3xl"
//           >
//             <DiReact
//               className="text-5xl text-blue-500 hover:text-blue-300 transition-colors duration-200"
//               title="React"
//             />
//           </a>

//           {/* PostgreSQL */}
//           <a
//             href="https://www.postgresql.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-3xl"
//           >
//             <DiPostgresql
//               className="text-5xl text-[#336791] hover:text-blue-300 transition-colors duration-200"
//               title="PostgreSQL"
//             />
//           </a>

//             {/* AWS (EC2) */}
//             <a
//               href="https://aws.amazon.com/ec2/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <DiAws
//                 className="text-5xl text-[#FF9900] hover:text-blue-300 transition-colors duration-200"
//                 title="Amazon Web Services (EC2)"
//               />
//             </a>

//             {/* JavaScript */}
//             <a
//               href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <DiJsBadge
//                 className="text-5xl text-yellow-400 hover:text-blue-300 transition-colors duration-200"
//                 title="JavaScript"
//               />
//             </a>

//             {/* Node.js */}
//             <a
//               href="https://nodejs.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <DiNodejs
//                 className="text-7xl text-[#339933] hover:text-blue-300 transition-colors duration-200"
//                 title="Node.js"
//               />
//             </a>

//             {/* CSS3 */}
//             <a
//               href="https://developer.mozilla.org/en-US/docs/Web/CSS"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <DiCss3
//                 className="text-5xl text-[#264DE4] hover:text-blue-300 transition-colors duration-200"
//                 title="CSS3"
//               />
//             </a>

//             {/* Express.js (Custom ExpressLogo Component) */}
//             <a
//               href="https://expressjs.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-3xl"
//             >
//               <ExpressLogo />
//             </a>
//           </div>

//         </CardBody>
//       </Card>


//      {/* Modal for Image Popup */}
//     {/* Modal for Image Popup */}
//     <Dialog size="xl" open={image} handler={handleOpen}>
//         <DialogHeader className="justify-between">
//           <div className="flex items-center gap-3">
//             <Avatar
//               size="sm"
//               variant="circular"
//               alt="User Avatar"
//               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//             />
//             <div className="-mt-px flex flex-col">
//               <Typography variant="small" color="blue-gray" className="font-medium">
//                 Cesar Guajardo
//               </Typography>
//               <Typography variant="small" color="gray" className="text-xs font-normal">
//                 @cesargua
//               </Typography>
//             </div>
//           </div>
//         </DialogHeader>

//         <DialogBody>
//           <img
//             alt="Atelier Expanded"
//             className="h-[48rem] w-full rounded-lg object-cover object-center"
//             src="/AtelierScreenshot/Atelier1.png"
//           />
//         </DialogBody>

//         <DialogFooter className="justify-between">
//           <div className="flex items-center gap-16">
//             <div>
//               <Typography variant="small" color="gray" className="font-normal">
//                 Views
//               </Typography>
//               <Typography color="blue-gray" className="font-medium">
//                 44,082,044
//               </Typography>
//             </div>
//             <div>
//               <Typography variant="small" color="gray" className="font-normal">
//                 Downloads
//               </Typography>
//               <Typography color="blue-gray" className="font-medium">
//                 553,031
//               </Typography>
//             </div>
//           </div>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default AtelierCard;


"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Carousel,
  Dialog,
  DialogHeader,
  Avatar,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { DiReact, DiPostgresql, DiAws, DiJsBadge, DiCss3, DiNodejs } from "react-icons/di";
import ExpressLogo from "./SVGLogos/ExpressLogo";

interface Props {
  handleOpen: (imageUrl:string) => void;
}

const AtelierCard: React.FC<Props> = ({ handleOpen }) => {
  return (
    <div className="flex items-center justify-center px-4 lg:px-12">
      <Card
        className="w-full h-full object-cover max-w-[64rem] h-[32rem] flex flex-row bg-[#5c6a56] shadow-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {/* Card Header */}
        <CardHeader shadow={false} floated={false} className="m-0 w-1/2 shrink-0 rounded-r-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Carousel placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {/* Click the image to open modal */}
            <img
              src="/AtelierScreenshot/Atelier1.png"
              alt="Atelier Image 1"
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => handleOpen("/AtelierScreenshot/Atelier1.png")}
            />
            <img
              src="/AtelierScreenshot/Atelier2.png"
              alt="Atelier Image 2"
              className="h-full w-full object-cover object-left cursor-pointer"
              onClick={() => handleOpen("/AtelierScreenshot/Atelier2.png")}
            />
            <img
              src="/AtelierScreenshot/Atelier3.png"
              alt="Atelier Image 3"
              className="h-full w-full object-cover object-left cursor-pointer"
              onClick={() => handleOpen("/AtelierScreenshot/Atelier3.png")}
            />
             <img
              src="/AtelierScreenshot/Atelier4.png"
              alt="Atelier Image 4"
              className="h-full w-full object-cover object-left cursor-pointer"
              onClick={() => handleOpen("/AtelierScreenshot/Atelier4.png")}
            />
          </Carousel>
        </CardHeader>

        {/* Card Body */}
        <CardBody className="flex flex-col justify-center text-left px-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <div className="flex items-center space-x-3 mb-4">
            <Typography variant="h5" className="text-white text-4xl font-bold font-lato" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Atelier
            </Typography>
            <a href="https://github.com/cesargua/AtelierAPI" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <FaGithub className="text-black hover:text-gray-300 transition-colors duration-200" title="Back-End Repo" />
            </a>
            <a href="https://github.com/cesargua/Atelier" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <FaGithub className="hover:text-gray-300 transition-colors duration-200" title="Front-End Repo" />
            </a>
          </div>

                    {/* Description */}
           <Typography className="text-white text-sm font-lato mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          A concept e-commerce application that showcases a variety of products and offers key features to enhance the user experience. It includes a Related Items section that displays products similar to the one currently being viewed, helping users discover relevant options. 
           The application also features an Outfit List, allowing users to save and organize their favorite items for future reference. A Q&A section provides a platform for users to ask and answer questions about products, while the Ratings and Reviews section enables users to leave feedback and read reviews to make informed purchasing decisions.
           </Typography>

          {/* Tech Logos */}
           <div className="flex items-center space-x-4">
           {/* React */}
           <a
            href="https://react.dev/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-white text-3xl"
           >
            <DiReact
              className="text-5xl text-blue-500 hover:text-blue-300 transition-colors duration-200"
               title="React"
             />
           </a>

           {/* PostgreSQL */}
           <a
            href="https://www.postgresql.org/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-white text-3xl"
           >
             <DiPostgresql
               className="text-5xl text-[#336791] hover:text-blue-300 transition-colors duration-200"
               title="PostgreSQL"
             />
           </a>
             {/* AWS (EC2) */}
             <a
               href="https://aws.amazon.com/ec2/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white text-3xl"
             >
               <DiAws
                 className="text-5xl text-[#FF9900] hover:text-blue-300 transition-colors duration-200"
                 title="Amazon Web Services (EC2)"
               />
             </a>

             {/* JavaScript */}
             <a
               href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white text-3xl"
             >
            <DiJsBadge
                 className="text-5xl text-yellow-400 hover:text-blue-300 transition-colors duration-200"
                 title="JavaScript"
               />
             </a>

             {/* Node.js */}
             <a
               href="https://nodejs.org/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white text-3xl"
             >
               <DiNodejs
                 className="text-7xl text-[#339933] hover:text-blue-300 transition-colors duration-200"
                 title="Node.js"
               />
             </a>

             {/* CSS3 */}
             <a
               href="https://developer.mozilla.org/en-US/docs/Web/CSS"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white text-3xl"
             >
               <DiCss3
                className="text-5xl text-[#264DE4] hover:text-blue-300 transition-colors duration-200"
                 title="CSS3"
               />
             </a>

             {/* Express.js (Custom ExpressLogo Component) */}
             <a
               href="https://expressjs.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white text-3xl"
             >
               <ExpressLogo />
             </a>
           </div>

          </CardBody>
       </Card>

    </div>
  );
};

export default AtelierCard;

