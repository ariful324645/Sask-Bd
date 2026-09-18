import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  // ==============================
  // BUTTON NAVIGATION
  // ==============================

  const navigate = useNavigate();

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
  // ==============================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[350px] w-full overflow-hidden sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]">
      {/* ==============================
          BACKGROUND IMAGE SLIDER
      ============================== */}

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

      {/* ==============================
          IMAGE DARK OVERLAY
          Image থাকবে dark, বেশি light হবে না
      ============================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      {/* Bottom subtle shadow */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* ==============================
          HERO CONTENT
      ============================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[520px]
          w-[92%]
          max-w-7xl
          items-center
          py-12

          sm:min-h-[560px]
          sm:w-11/12
          sm:py-16

          md:min-h-[600px]
          md:py-20

          lg:min-h-[650px]
          lg:py-24

          xl:min-h-[750px]
          xl:py-28
        "
      >
        <div className="w-full max-w-4xl text-left text-white">
          {/* ==============================
              MAIN HEADING
          ============================== */}
          <h1
            className="
    max-w-full
    text-[20px]
    font-bold
    leading-[1.4]
    tracking-normal
    text-[#E5E7EB]

    sm:whitespace-nowrap
    sm:text-2xl
    sm:leading-[1.4]

    md:text-3xl
    md:leading-[1.45]

    lg:text-4xl
    lg:leading-[1.5]

    xl:text-[45px]
    xl:leading-[1.5]
  "
            style={{
              textShadow:
                "0 2px 5px rgba(0,0,0,0.75), 0 1px 2px rgba(0,0,0,0.85)",
            }}
          >
            ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র
          </h1>

          {/* ==============================
    DESCRIPTION
============================== */}

          <div
            className="
    mt-4
    w-full
    max-w-3xl

    sm:mt-5
    md:mt-6
  "
          >
            <p
              className="
      text-[16px]
      font-normal
      leading-[1.65]
      tracking-normal
      text-[#D1D5DB]

      sm:text-[18px]
      sm:leading-[1.7]

      md:text-lg
      md:leading-[1.8]

      lg:text-xl
      lg:leading-[1.85]
    "
            >
              ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র একটি অরাজনৈতিক, অলাভজনক
              ও মানবকল্যাণমূলক প্রতিষ্ঠান। মানুষের কল্যাণে নিবেদিত সেবামূলক
              কার্যক্রমের মাধ্যমে একটি সুন্দর, মানবিক ও কল্যাণময় সমাজ গড়তে আমরা
              কাজ করে যাচ্ছি।
            </p>
          </div>

          {/* ==============================
              BUTTONS
          ============================== */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-3

              sm:mt-7
              sm:flex-row
              sm:gap-4

              md:mt-8
            "
          >
            {/* MORE INFO BUTTON */}

            <button
              type="button"
              onClick={() => navigate("/identity")}
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-blue-700
                bg-blue-700
                px-5
                py-2.5
                text-sm
                font-bold
                tracking-wide
                text-white
                shadow-lg
                shadow-blue-900/25
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-800
                hover:shadow-xl
                hover:shadow-blue-900/40

                sm:h-12
                sm:w-[150px]
                sm:text-[15px]
              "
            >
              আরও জানুন
            </button>

            {/* ACTIVITIES BUTTON */}

            <button
              type="button"
              onClick={() => navigate("/activity")}
              className="
                inline-flex
                h-11
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                border-2
                border-blue-600
                bg-black/10
                px-7
                py-2.5
                text-sm
                font-bold
                text-white
                backdrop-blur-[1px]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-700
                hover:text-white
                hover:shadow-lg
                hover:shadow-blue-900/40

                sm:h-12
                sm:w-[150px]
                sm:text-base
              "
            >
              কার্যক্রমসমূহ
            </button>
          </div>
        </div>
      </div>

      {/* ==============================
          SLIDER DOTS
      ============================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          gap-2

          sm:bottom-6
        "
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-8 bg-white shadow-md"
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
