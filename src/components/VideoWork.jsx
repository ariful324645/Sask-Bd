import React, { useState } from "react";

const VideoWork = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const video = {
    id: 1,
    title: "আমাদের কার্যক্রম সম্পর্কে ভিডিও",
    videoId: "b1txe8Yct0U",
  };

  return (
    <section className="w-full bg-white py-8 md:pt-10">
      <div className="mx-auto flex w-full max-w-[620px] flex-col items-center px-4">
        {/* Small Badge */}
        <div className="mb-1 rounded-[2px] bg-emerald-100 px-2.5 py-[2px]">
          <span className="text-[10px]  font-medium text-gray-700">ভিডিও</span>
        </div>

        {/* Heading */}
        <h2 className="mb-5 text-center text-[22px] font-bold mt-4 leading-[1.35] text-[#222] md:text-[24px]">
          আমাদের কার্যক্রম সম্পর্কে ভিডিও
        </h2>

        {/* Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[9px] bg-black">
          {!isPlaying ? (
            <>
              {/* YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="ভিডিও চালু করুন"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[30px]
                  w-[30px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f45b69]
                  shadow-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-[#ef4b5c]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-[2px] h-[17px] w-[17px] fill-white"
                >
                  <path d="M8 5.14v13.72c0 .76.82 1.24 1.48.81l10.17-6.86a.97.97 0 0 0 0-1.62L9.48 4.33A.97.97 0 0 0 8 5.14Z" />
                </svg>
              </button>
            </>
          ) : (
            /* YouTube Video */
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoWork;
