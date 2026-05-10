import React, { useState } from "react";
import { Link } from "react-router";

const Sheba = () => {
  const [showFullText, setShowFullText] = useState(false);

  const content = {
    banner: "সেবা দিয়ে মহাজগতের সাথে যুক্ত হওয়া যায়",
    title: "প্রতিষ্ঠাতা ও পরিচালকের বার্তা",
    shortText:
      "মানবসেবা শুধু একটি কাজ নয়, এটি একটি জীবনদর্শন। যে সমাজে সহমর্মিতা, দায়িত্ববোধ ও নৈতিকতা স্থান পায়, সে সমাজই সত্যিকারের অর্থে মানবিক হয়ে ওঠে। এই বিশ্বাস আমাদের লক্ষ্য কেবল অসহায় মানুষদের পাশে দাঁড়ানো নয়, বরং একটি মূল্যবোধনির্ভর সমাজ নির্মাণ করা, যেখানে প্রত্যেকে সেবার প্রতি দায়বদ্ধ থাকবে। আমাদের স্বেচ্ছাসেবীরা আজ শুধু সহায়তা দেয় না, তারা একেকজন মানবিক দূত, যারা সমাজের গভীরে গিয়ে .......",
    fullText:
      "মানবসেবা শুধু একটি কাজ নয়, এটি একটি জীবনদর্শন। যে সমাজে সহমর্মিতা, দায়িত্ববোধ ও নৈতিকতা স্থান পায়, সে সমাজই সত্যিকারের অর্থে মানবিক হয়ে ওঠে। এই বিশ্বাস আমাদের লক্ষ্য কেবল অসহায় মানুষদের পাশে দাঁড়ানো নয়, বরং একটি মূল্যবোধনির্ভর সমাজ নির্মাণ করা, যেখানে প্রত্যেকে সেবার প্রতি দায়বদ্ধ থাকবে। আমাদের স্বেচ্ছাসেবীরা আজ শুধু সহায়তা দেয় না, তারা একেকজন মানবিক দূত, যারা সমাজের গভীরে গিয়ে ইতিবাচক পরিবর্তন নিয়ে আসে এবং প্রতিটি মানুষের মুখে হাসি ফোটানোর জন্য নিরলস কাজ করে যাচ্ছে।",
  };

  return (
    <div className="mt-10 w-11/12 mx-auto">
      {/* Banner */}
      <h2 className="text-center text-3xl font-bold mb-10 text-blue-700">
        {content.banner}
      </h2>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Image (LEFT) */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="https://i.ibb.co.com/xS7StCCz/side1.jpg"
            alt="Founder"
            className="w-[90%] md:w-full max-h-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text (RIGHT) */}
        <div className="w-full md:w-7/12 md:pl-6">
          <h3 className="text-2xl text-center font-bold text-red-700 mb-5">
            {content.title}
          </h3>

          <p className="text-gray-700 text-lg leading-16 text-justify mb-6">
            {showFullText ? content.fullText : content.shortText}
          </p>

          <Link to="/ShebaDetails">
            <button className="bg-red-600 w-full hover:bg-red-700 text-white px-8 py-3 rounded-md transition duration-300">
              আরও পড়ুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sheba;
