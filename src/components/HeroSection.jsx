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
    <section className="relative min-h-[350px] w-full overflow-hidden sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]">
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25"></div>

      {/* ============================== */}
      {/* HERO CONTENT */}
      {/* ============================== */}
      <div className="relative z-10 mx-auto flex min-h-[520px] w-11/12 max-w-7xl items-center py-20 sm:min-h-[560px] sm:py-24 md:min-h-[600px] md:py-28 lg:min-h-[650px] lg:py-32 xl:min-h-[750px]">
        <div className="w-full max-w-4xl text-left text-white">
          {/* Main Heading */}
          <h1
            className="text-2xl font-extrabold leading-[1.5] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px]"
            style={{
              fontFamily: "'Noto Serif Bengali', serif",
              textShadow: "2px 3px 8px rgba(0, 0, 0, 0.75)",
            }}
          >
            <span className="block font-extrabold text-white">
              ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-5 max-w-3xl text-sm font-medium leading-8 tracking-wide text-white sm:mt-6 sm:text-base sm:leading-9 md:mt-7 md:text-lg md:leading-10 lg:text-xl lg:leading-[1.9]"
            style={{
              fontFamily: "'Noto Serif Bengali', serif",
              textShadow: "1px 2px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র একটি অরাজনৈতিক, অলাভজনক ও
            মানবকল্যাণমূলক প্রতিষ্ঠান। মানুষের কল্যাণে নিবেদিত সেবামূলক
            কার্যক্রমের মাধ্যমে একটি সুন্দর, মানবিক ও কল্যাণময় সমাজ গড়তে আমরা
            কাজ করে যাচ্ছি।
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4 md:mt-9">
            {/* More Info Button */}
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-5 py-3 text-sm font-extrabold tracking-wide text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-800/25 sm:w-[150px] sm:text-[15px]"
            >
              আরও জানুন
            </button>

            {/* Activities Button */}
            <button
              type="button"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border-2 border-blue-700 bg-transparent px-7 py-3 text-base font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white sm:w-[150px]"
            >
              কার্যক্রমসমূহ
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
