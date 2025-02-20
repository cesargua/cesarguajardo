// import AtelierCard from "./projects/AtelierCard"
// import ViceroyCard from "./projects/ViceroyCard"
// import { Carousel } from "@material-tailwind/react"
// import { useState } from "react"

// export default function Projects() {
//   const [image, setImage] = useState<boolean>(false); // State for modal

//   const handleOpen = () => setImage((prev) => !prev);

//   return (
//     <>
//       <div className="flex items-center justify-center mt-24 py-10" id="Projects">
//         <h1 className="text-6xl font-bold font-geo text-white text-customGray">
//           Projects
//         </h1>
//       </div>

//       <div>
//         <Carousel transition={{ duration: 2 }} className="rounded-xl">
//           {/* Pass the state and handler correctly */}
//           <AtelierCard handleOpen={handleOpen} image={image} />
//           <ViceroyCard handleOpen={handleOpen} />
//         </Carousel>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import AtelierCard from "./projects/AtelierCard";
import ViceroyCard from "./projects/ViceroyCard";
import { Carousel, Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

const cards = [
 {
    name: "Atelier",
    github_icons: [{},{}],
    descriptions: "A concept e-commerce application that showcases a variety of products and offers key features to enhance the user experience. It includes a Related Items section that displays products similar to the one currently being viewed, helping users discover relevant options. The application also features an Outfit List, allowing users to save and organize their favorite items for future reference. A Q&A section provides a platform for users to ask and answer questions about products, while the Ratings and Reviews section enables users to leave feedback and read reviews to make informed purchasing decisions.",
    images: [],
    icons: [{},{}]

 },
 
 {


 }

]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal and set the clicked image
  const handleOpen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-24 py-10" id="Projects">
        <h1 className="text-6xl font-bold font-geo text-white text-customGray">
          Projects
        </h1>
      </div>

      <div className="py-5">
        <Carousel transition={{ duration: 2 }} className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <AtelierCard handleOpen={handleOpen} />
          <ViceroyCard handleOpen={handleOpen} />
        </Carousel>
      </div>

      {/* Fullscreen Modal for Image */}
      {selectedImage && (
         <Dialog size="xl" open={Boolean(selectedImage)} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <img
                    alt="Project Image Expanded"
                    className="h-auto max-h-[48rem] w-full rounded-lg object-contain"
                    src={selectedImage}
                  />
                </DialogBody>
        </Dialog>
      
      )}
    </>
  );
}
