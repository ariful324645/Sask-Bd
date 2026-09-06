// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const HeroSection = () => {
//   const images = [
//     "https://i.ibb.co.com/LdkFXH0r/img6.jpg",
//     "https://i.ibb.co.com/Z6tTjS3H/img5.jpg",
//     "https://i.ibb.co.com/wFvhbH64/img4.jpg",
//     "https://i.ibb.co.com/jdMDjHZ/img3.jpg",
//     "https://i.ibb.co.com/B2XTwxST/img7.jpg",
//     "https://i.ibb.co.com/S76f4QZS/img8.jpg",
//     "https://i.ibb.co.com/1fBp3GzV/img11.jpg",
//   ];

//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState("right"); // track direction

//   const prevSlide = () => {
//     setDirection("left");
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setDirection("right");
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   return (
//     <div className="relative w-11/12 mx-auto h-[500px] md:h-[700px] overflow-hidden">
//       {/* Slider Wrapper */}
//       <div
//         className="flex h-full transition-transform duration-500"
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="slider"
//             className="w-full h-full object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Left Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full z-10"
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Right Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full z-10"
//       >
//         <FaChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               current === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import { FaArrowRight, FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden md:min-h-[700px]">
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/LdkFXH0r/img6.jpg"
        alt="Fashion Collection"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] w-11/12 max-w-7xl items-center md:min-h-[700px]">
        <div className="max-w-2xl text-left text-white">
          {/* Main Heading */}
          <h1 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-4xl lg:text-4xl">
            ডাঃ শামসুল হুদা ও
            <span className="mt-1 block font-bold text-white/90">
              আঞ্জুমান আরা সেবাকেন্দ্র
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base font-normal leading-7 tracking-wide text-white/80 sm:text-lg md:leading-8">
            মানুষের জন্য ভালোবাসা, মানবতার জন্য অঙ্গীকার। সহমর্মিতা ও সেবার
            মাধ্যমে মানুষের পাশে দাঁড়িয়ে গড়ে তুলি একটি সুন্দর, মানবিক ও কল্যাণময়
            আগামী।
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* More Info Button */}
            <button className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-normal tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200">
              আরও জানুন
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Activities Button */}
            <button className="flex items-center gap-3 rounded-full border border-white/70 bg-white/10 px-7 py-3.5 font-normal tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
              <FaPlay className="text-xs" />
              আমাদের কার্যক্রম
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;