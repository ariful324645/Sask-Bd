import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Gallery = () => {
  const images = [
    "https://i.ibb.co.com/B2g5KJ3C/img1.jpg",
    "https://i.ibb.co.com/q3qj34j3/img2.jpg",
    "https://i.ibb.co.com/ycHpSX3s/img3.jpg",
    "https://i.ibb.co.com/39wDXSht/img4.jpg",
    "https://i.ibb.co.com/LdnnkDcM/img5.jpg",
    "https://i.ibb.co.com/WvNScrvh/img6.jpg",
    "https://i.ibb.co.com/XZ31Yk4J/img7.jpg",
    "https://i.ibb.co.com/LdBrTJ4v/img8.jpg",
    "https://i.ibb.co.com/TMnj8M5Z/img9.jpg",
    "https://i.ibb.co.com/Kzzs5qbk/img10.jpg",
    "https://i.ibb.co.com/rR2mYTmj/img11.jpg",
    "https://i.ibb.co.com/TM9zPnJz/img12.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const prevImage = () => {
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
    );
  };

  const nextImage = () => {
    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <div className="my-10 w-11/12 mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        গ্যালারি
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            <FaTimes />
          </button>

          {/* Image Slider */}
          <div className="relative w-[90%] md:w-[60%] overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${selectedIndex * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="preview"
                  className="w-full h-[400px] md:h-[500px] object-cover flex-shrink-0 rounded"
                />
              ))}
            </div>

            {/* Left */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-3 rounded-full"
            >
              <FaChevronLeft />
            </button>

            {/* Right */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-3 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
