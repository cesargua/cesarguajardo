"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Carousel
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import {
  DiReact,
  DiJsBadge,
  DiCss3,
  DiNodejs
} from "react-icons/di";
import FirebaseLogo from "./SVGLogos/FirebaseLogo";
import ViteLogo from "./SVGLogos/ViteLogo";
import MUILogo from "./SVGLogos/MUILogo";



interface Props {
  handleOpen: (imageUrl:string) => void;

}

const ViceroyCard: React.FC<Props> = ({handleOpen}) => {
  return (
    <div className="flex items-center justify-center px-4 lg:px-12">
      <Card className="w-full h-full object-cover max-w-[64rem] h-[32rem] flex flex-row bg-[#5c6a56] shadow-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {/* Card Header */}
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-1/2 shrink-0 rounded-r-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <Carousel placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <img
              src="/ViceroyScreenshots/Viceroy1.png"
              alt="Card image"
              className="h-full w-full object-cover"
              onClick={()=>handleOpen('/ViceroyScreenshots/Viceroy1.png')}
            />
            <img
              src="/ViceroyScreenshots/Viceroy2.png"
              alt="Card image"
              className="h-full w-full object-cover"
              onClick={()=>handleOpen("/ViceroyScreenshots/Viceroy2.png")}
            />
            <img
              src="/ViceroyScreenshots/Viceroy3.png"
              alt="Card image"
              className="h-full w-full object-cover"
              onClick={()=>handleOpen("/ViceroyScreenshots/Viceroy3.png")}
            />
          </Carousel>
        </CardHeader>

        {/* Card Body */}
        <CardBody className="flex flex-col justify-center text-left px-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {/* Title with GitHub Icon */}
          <div className="flex items-center space-x-3 mb-4">
            <Typography
              variant="h5"
              className="text-white text-4xl font-bold font-lato" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              ViceRoy
            </Typography>
            <a
              href="https://github.com/BleachedBlueOcean/ViceRoy" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FaGithub className="hover:text-gray-300 transition-colors duration-200" />
            </a>
          </div>

          {/* Description */}
          <Typography className="text-white text-sm font-lato mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          A concept e-commerce application designed for users to trade, sell, and exchange cryptocurrency seamlessly. 
          The platform offers real-time news and trends to help users stay informed about the crypto market. 
          Additionally, users can view interactive graphs displaying market trends and monitor their earnings in real-time, 
          enabling them to track their performance and maximize profits.
          </Typography>

          {/* Tech Logos */}
          <div className="flex items-center space-x-4">
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

  {/* Vite */}
  <a
    href="https://vitejs.dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl"
  >
    <ViteLogo />
  </a>

  {/* Material UI */}
  <a
    href="https://mui.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl"
  >
    <MUILogo  />
  </a>

  {/* Firebase */}
  <a
    href="https://firebase.google.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl"
  >
    <FirebaseLogo  />
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
</div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViceroyCard;
