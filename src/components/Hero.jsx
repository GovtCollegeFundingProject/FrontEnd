import { NearMe } from "@mui/icons-material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/image4.png";

// const Hero = () => {
//   return (
//     <div
//       id="home"
//       className="bg-cover bg-center h-96 w-full"
//       style={{ backgroundImage: `url(${img})` }}
//     >
//       <div className="flex flex-col items-center justify-center gap-3 pt-3">
//         <div>
//           <h1 className="text-3xl font-bold text-[#06038D] text-center pt-20 pl-5">
//             Contribute to the collective endeavor to enable
//           </h1>
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold text-[#06038D] text-center">
//             junior colleges with lab infrastructure
//           </h1>
//         </div>
//         <div className="flex justify-center">
//           <button className="border-[#06038D] border-4 rounded-md text-[#06038D] font-semibold py-2 px-4 mt-9 ml-2">
//             <a href="#contributors">
//               Contribute <NearMe className="text-[#06038D] text-sm ml-2" />
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// const Hero = () => {
//   return (
//     <div id="home" className="h-screen w-full bg-cover bg-center">
//       {/* Carousel section */}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         className="relative"
//       >
//         <div className="h-screen flex items-center justify-center overflow-hidden">
//           <img
//             src={"https://srisaichaitanyajr.com/img/photos/lab-3.jpg"}
//             alt="carousel-image-1"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="h-screen flex items-center justify-center overflow-hidden">
//           <img
//             src={"https://www.kcmt.in/images/infra-chemistry.jpg"}
//             alt="carousel-image-2"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="h-screen flex items-center justify-center overflow-hidden">
//           <img
//             src={"https://www.kcmt.in/admin/uploads/2c26j2.jpg"}
//             alt="carousel-image-3"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//       </Carousel>

//       {/* Text and Button Section */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-3">
//         <div className="px-4 text-center">
//           <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
//             Contribute to the collective endeavor to enable
//           </h1>
//           <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
//             junior colleges with lab infrastructure
//           </h1>
//         </div>

//         <div className="flex justify-center mt-5">
//           <button className="border-white border-4 rounded-md text-white font-semibold py-2 px-4 md:py-3 md:px-6 mt-5">
//             <a href="#contributors">
//               Contribute <NearMe className="text-white text-sm ml-2" />
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// const Hero = () => {
//   return (
//     <div id="home" className="w-full bg-cover bg-center">
//       {/* Carousel section */}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         className="relative"
//       >
//         <div className="flex items-center justify-center overflow-hidden h-1/2 md:h-screen">
//           <img
//             src={"https://srisaichaitanyajr.com/img/photos/lab-3.jpg"}
//             alt="carousel-image-1"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="flex items-center justify-center overflow-hidden h-1/2 md:h-screen">
//           <img
//             src={"https://www.kcmt.in/images/infra-chemistry.jpg"}
//             alt="carousel-image-2"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="flex items-center justify-center overflow-hidden h-1/2 md:h-screen">
//           <img
//             src={"https://www.kcmt.in/admin/uploads/2c26j2.jpg"}
//             alt="carousel-image-3"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="flex items-center justify-center overflow-hidden h-1/2 md:h-screen">
//           <img
//             src={
//               "https://th-i.thgim.com/public/incoming/4otwh7/article65256346.ece/alternates/FREE_1200/5935_24_3_2022_18_55_20_1_24032022APSERMC.JPG"
//             }
//             alt="carousel-image-3"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//         <div className="flex items-center justify-center overflow-hidden h-1/2 md:h-screen">
//           <img
//             src={
//               "https://bbhegdecollege.com/assets/uploads/page_file/page_file-1649068948-1-ecs.jpeg"
//             }
//             alt="carousel-image-3"
//             className="h-full w-full object-cover filter grayscale"
//           />
//         </div>
//       </Carousel>

//       {/* Text and Button Section */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-3">
//         <div className="px-4 text-center">
//           <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
//             Contribute to the collective endeavor to enable
//           </h1>
//           <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
//             junior colleges with lab infrastructure
//           </h1>
//         </div>

//         <div className="flex justify-center mt-5">
//           <button className="border-white border-4 rounded-md text-white font-semibold py-2 px-4 md:py-3 md:px-6 mt-5">
//             <a href="#contributors">
//               Contribute <NearMe className="text-white text-sm ml-2" />
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div id="home" className="w-full h-auto md:h-screen bg-cover bg-center">
      {/* Carousel section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="relative"
      >
        <div className="h-96 md:h-screen flex items-center justify-center overflow-hidden">
          <img
            src={"https://srisaichaitanyajr.com/img/photos/lab-3.jpg"}
            alt="carousel-image-1"
            className="h-full w-full object-cover filter grayscale"
          />
        </div>
        <div className="h-96 md:h-screen flex items-center justify-center overflow-hidden">
          <img
            src={"https://www.kcmt.in/images/infra-chemistry.jpg"}
            alt="carousel-image-2"
            className="h-full w-full object-cover filter grayscale"
          />
        </div>
        <div className="h-96 md:h-screen flex items-center justify-center overflow-hidden">
          <img
            src={"https://www.kcmt.in/admin/uploads/2c26j2.jpg"}
            alt="carousel-image-3"
            className="h-full w-full object-cover filter grayscale"
          />
        </div>
      </Carousel>

      {/* Text and Button Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-3">
        <div className="px-4 text-center">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
            Contribute to the collective endeavor to enable
          </h1>
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
            junior colleges with lab infrastructure
          </h1>
        </div>

        <div className="flex justify-center mt-5">
          <button className="border-white border-4 rounded-md text-white font-semibold py-2 px-4 md:py-3 md:px-6 mt-5">
            <a href="#contributors">
              Contribute <NearMe className="text-white text-sm ml-2" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
