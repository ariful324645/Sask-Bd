import React from "react";

const Video = () => {
const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/embed/3jOuX5Y2rJs",
  },
  {
    id: 2,
    title: "Video 2",

    url: "https://www.youtube.com/embed/iAHWsJf8pCU",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://www.youtube.com/embed/3jOuX5Y2rJs",
  },
  {
    id: 4,
    title: "Video 4",

    url: "https://www.youtube.com/embed/gCxleZxBqsw",
  },
  {
    id: 5,
    title: "Video 5",
    url: "https://www.youtube.com/embed/Eeeo1Zg1bTg",
  },
  {
    id: 6,
    title: "Video 6",
    url: "https://www.youtube.com/embed/fxFr_OOVh00",
  },
];

  return (
    <div className=" w-11/12 mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        ভিডিও
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Video */}
            <div  className="w-full h-56">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Title */}
            {/* <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
