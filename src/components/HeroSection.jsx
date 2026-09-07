import { useEffect, useState } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const HeroSection = () => {
  // ==============================
  // 5 DIFFERENT HERO IMAGES
  // ==============================
  const images = [
    "https://i.ibb.co.com/yBy3R68f/1.jpg",
    "https://i.ibb.co.com/dw672dX0/2.jpg",
    "https://i.ibb.co.com/F4DwVcJg/3.jpg",
    "https://i.ibb.co.com/gLwJmbNH/4.jpg",
    "https://i.ibb.co.com/r2Zm1bBD/5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // ==============================
  // AUTOMATIC SLIDER
  // RIGHT → LEFT
  // ==============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[450px] w-full overflow-hidden sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px]">
      {/* ============================== */}
      {/* BACKGROUND IMAGE SLIDER */}
      {/* ============================== */}

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero Slide ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
            currentImage === index
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

      {/* ============================== */}
      {/* HERO CONTENT */}
      {/* ============================== */}

      <div className="relative z-10 mx-auto flex min-h-[500px] w-11/12 max-w-7xl items-center sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px]">
        <div className="max-w-2xl text-left text-white">
          {/* Main Heading */}
          <h1 className="text-xl font-extrabold leading-[1.3] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
         
            <span className="mt-2 block font-bold text-white/90">
              ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm font-normal leading-6 tracking-wide text-white/80 sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8 lg:text-xl">
            ভালোবাসা, সহমর্মিতা ও সেবার মাধ্যমে মানুষের পাশে দাঁড়ানোই আমাদের
            অঙ্গীকার। একটি সুন্দর, মানবিক ও কল্যাণময় সমাজ গড়তে আমরা কাজ করে
            যাচ্ছি।
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4 md:mt-8">
            {/* More Info Button */}
            <button className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-normal tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-base">
              আরও জানুন
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 sm:text-sm" />
            </button>

            {/* Activities Button */}
            <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-5 py-3 text-sm font-normal tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black sm:gap-3 sm:px-7 sm:py-3.5 sm:text-base">
              <FaPlay className="text-[10px] sm:text-xs" />
              আমাদের কার্যক্রম
            </button>
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/* SLIDER DOTS */}
      {/* ============================== */}

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
