import React from "react";
import { Link, useParams } from "react-router";


const ServiceDetails = () => {
  const { id } = useParams();

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
  // id string → number
  const service = services.find((item) => item.id === parseInt(id));

  if (!service) {
    return (
      <h2 className="text-center mt-10 text-red-500">Service not found ❌</h2>
    );
  }

  return (
    <div className="max-w-5xl h-96 mx-auto px-4 mt-44">


      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{service.title}</h2>

      {/* Short Description */}
      {/* <p className="text-gray-600 mb-3">{service.description}</p> */}

      {/* Full Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Back Button */}
      <Link to="/">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
          ← ফিরে যান
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
