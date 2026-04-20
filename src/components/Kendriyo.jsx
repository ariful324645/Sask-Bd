import React from "react";

const Kendriyo = () => {
  return (
    <div className="min-h-screen  w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center bg-gray-700 py-6 text-white">
        লক্ষ্য ও উদ্দেশ্য
      </h1>

      <h1 className="text-3xl text-gray-800 text-center mt-10 font-bold leading-loose">
        প্রতিষ্ঠাতা ও পরিচালক ড. রেবেকা সুলতানা অধ্যাপক <br />
        দর্শন বিভাগ, ঢাকা বিশ্ববিদ্যালয়
      </h1>

      <div className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl">
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-16 px-5 rounded-2xl">
          <div className="max-w-6xl mx-auto grid rounded-2xl md:grid-cols-2 gap-10   items-center">
            {/* Text Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 leading-tight">
                প্রতিষ্ঠাতা ও পরিচালক
              </h1>

              <p className="text-gray-700 text-lg leading-10">
                ড. রেবেকা সুলতানা <br />
                অধ্যাপক, দর্শন বিভাগ, ঢাকা বিশ্ববিদ্যালয় <br />
                প্রতিষ্ঠাতা পরিচালক, ডা: শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র।
              </p>
            </div>

            {/* Image Section */}
            <div className="relative group">
              <img
                src="https://i.ibb.co.com/8DpB59WR/side1.jpg"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl transition duration-500 group-hover:scale-105"
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl group-hover:bg-black/20 transition duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-100 to-gray-300 mt-10 rounded-2xl">
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-16 px-5 rounded-2xl">
          <div className="max-w-6xl mx-auto grid rounded-2xl md:grid-cols-2 gap-10   items-center">
            {/* Image Section */}
            <div className="relative group">
              <img
                src="https://i.ibb.co.com/wZsq65pY/man-1.jpg"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl transition duration-500 group-hover:scale-105"
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl group-hover:bg-black/20 transition duration-500"></div>
            </div>
            {/* Text Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 leading-tight">
                প্রধান উপদদষ্টা
              </h1>

              <p className="text-gray-700 text-lg leading-10">
                এস এম ইমরান আজাদ <br /> আয়কর আইনজীবী, ঢাকা ট্যাক্সেস বার এসোসিয়েশন
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kendriyo;
