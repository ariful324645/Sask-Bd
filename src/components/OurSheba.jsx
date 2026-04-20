import React from "react";
import { Link } from "react-router";

const OurSheba = () => {
  const services = [
    {
      id: 1,
      title: "শীতবস্ত্র বিতরণ কর্মসূচি",
      description:
        "ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের উদ্যোগে দেশের বিভিন্ন অঞ্চলের শীতার্ত ও দুস্থ মানুষকে শীতবস্ত্র বিতরণ করা হয়। শীতপ্রধান অঞ্চলগুলোর মধ্যে অন্যতম উত্তরবঙ্গের বিভিন্ন জেলায় উন্নতমানের শীতবস্ত্র বিতরণ করা",
      image: "https://i.ibb.co.com/6JBcCVgg/20240823-183822-1-scaled.jpg",
    },
    {
      id: 2,
      title: "শীতবস্ত্র বিতরণ কর্মসূচি",
      description:
        "ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের উদ্যোগে দেশের বিভিন্ন অঞ্চলের শীতার্ত ও দুস্থ মানুষকে শীতবস্ত্র বিতরণ করা হয়। শীতপ্রধান অঞ্চলগুলোর মধ্যে অন্যতম উত্তরবঙ্গের বিভিন্ন জেলায় উন্নতমানের শীতবস্ত্র বিতরণ করা",
      image: "https://i.ibb.co.com/LdBrTJ4v/img8.jpg",
    },
    {
      id: 3,
      title: "অসহায় মানুষের পাশে চাল ডাল সামগ্রি",
      description:
        "অসহায় ও হতদরিদ্র মানুষদের পাশে দাঁড়ানো আজ সময়ের দাবি। তারা প্রতিদিনের আহারের জন্যও যুদ্ধ করে যাচ্ছে। একটু চাল, ডাল কিংবা সামান্য অনুদানও তাদের মুখে হাসি ফোটাতে পারে। আসুন, মানবতার হাত বাড়িয়ে দেই।",
      image: "https://i.ibb.co.com/YFrQkNx8/ok.jpg",
    },
    {
      id: 4,
      title: "অসহায় মানুষের পাশে চাল ডাল সামগ্রি",
      description:
        "অসহায় ও হতদরিদ্র মানুষদের পাশে দাঁড়ানো আজ সময়ের দাবি। তারা প্রতিদিনের আহারের জন্যও যুদ্ধ করে যাচ্ছে। একটু চাল, ডাল কিংবা সামান্য অনুদানও তাদের মুখে হাসি ফোটাতে পারে। আসুন, মানবতার হাত বাড়িয়ে দেই।",
      image: "https://i.ibb.co.com/YFrQkNx8/ok.jpg",
    },
    {
      id: 5,
      title: "অসহায় মানুষের পাশে চাল ডাল সামগ্রি",
      description:
        "অসহায় ও হতদরিদ্র মানুষদের পাশে দাঁড়ানো আজ সময়ের দাবি। তারা প্রতিদিনের আহারের জন্যও যুদ্ধ করে যাচ্ছে। একটু চাল, ডাল কিংবা সামান্য অনুদানও তাদের মুখে হাসি ফোটাতে পারে। আসুন, মানবতার হাত বাড়িয়ে দেই।",
      image: "https://i.ibb.co.com/YFrQkNx8/ok.jpg",
    },
    {
      id: 6,
      title: "অসহায় মানুষের পাশে চাল ডাল সামগ্রি",
      description:
        "অসহায় ও হতদরিদ্র মানুষদের পাশে দাঁড়ানো আজ সময়ের দাবি। তারা প্রতিদিনের আহারের জন্যও যুদ্ধ করে যাচ্ছে। একটু চাল, ডাল কিংবা সামান্য অনুদানও তাদের মুখে হাসি ফোটাতে পারে। আসুন, মানবতার হাত বাড়িয়ে দেই।",
      image: "https://i.ibb.co.com/YFrQkNx8/ok.jpg",
    },
  ];

  return (
    <div className="mt-16 w-11/12 mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        আমাদের সেবাসমূহ
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-700  mb-2">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-loose text-sm mb-4">
                {service.description}
              </p>

              <Link to={`/service/${service.id}`}>
                <button className="bg-red-600 w-full hover:bg-red-700 text-white px-8 py-3 rounded-md transition duration-300">
                  আরও পড়ুন
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSheba;
