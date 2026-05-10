import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  const images = [
    "https://i.ibb.co.com/LdkFXH0r/img6.jpg",
    "https://i.ibb.co.com/Z6tTjS3H/img5.jpg",
    "https://i.ibb.co.com/wFvhbH64/img4.jpg",
    "https://i.ibb.co.com/jdMDjHZ/img3.jpg",
    "https://i.ibb.co.com/B2XTwxST/img7.jpg",
    "https://i.ibb.co.com/S76f4QZS/img8.jpg",
    "https://i.ibb.co.com/1fBp3GzV/img11.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right"); // track direction

  const prevSlide = () => {
    setDirection("left");
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-11/12 mx-auto h-[500px] md:h-[700px] overflow-hidden">
      {/* Slider Wrapper */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full z-10"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
