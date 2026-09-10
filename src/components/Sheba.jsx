

import React, { useState } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
    <section className="relative w-11/12 mx-auto overflow-hidden bg-[#f8f7f1] py-6 mt-6 ">
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#e8d9ad]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d9e5ee]/40 blur-3xl"></div>

      <div className="relative mx-auto w-11/12 max-w-7xl">
        {/* Top Banner */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold leading-relaxed text-blue-700 md:text-3xl">
            {content.banner}
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-[#d5a928]"></span>
            <span className="h-2 w-2 rounded-full bg-blue-700"></span>
            <span className="h-1 w-16 rounded-full bg-[#d5a928]"></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex justify-center">
            {/* Golden Decorative Border */}
            <div className="absolute -left-3 -top-3 h-32 w-32 rounded-tl-[2rem] border-l-4 border-t-4 border-[#e0b52f] md:-left-6 md:-top-6"></div>

            <div className="absolute -bottom-3 -right-3 h-32 w-32 rounded-br-[2rem] border-b-4 border-r-4 border-[#e0b52f] md:-bottom-6 md:-right-6"></div>

            {/* Image */}
            <div className="relative z-10 w-full max-w-[540px] overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
              <img
                src="https://i.ibb.co.com/xS7StCCz/side1.jpg"
                alt="Founder"
                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent"></div>
            </div>

            {/* Founder Name Card */}
            <div className="absolute -bottom-8 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-2xl border-b-4 border-[#d9aa27] bg-gradient-to-r from-[#092d59] to-[#124b82] px-5 py-4 text-center shadow-xl md:w-[85%] md:px-8">
              <h3 className="text-xl font-extrabold text-white md:text-2xl">
                অধ্যাপক ড. রেবেকা সুলতানা
              </h3>

              <p className="mt-1 text-sm font-medium text-blue-100 md:text-base">
                প্রতিষ্ঠাতা ও পরিচালক
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="pt-8 lg:pt-0">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-[#e8f0f7] px-5 py-2">
              <span className="h-3 w-1 rounded-full bg-[#d9aa27]"></span>

              <span className="text-sm font-bold text-blue-800 md:text-base">
                প্রতিষ্ঠাতার বার্তা
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-6 text-2xl font-extrabold leading-relaxed text-blue-900 md:text-4xl">
              {content.title}
            </h3>

            {/* Quote */}
            <div className="relative mb-7 border-l-4 ">
              <FaQuoteLeft className="mb-2 text-2xl text-[#d9aa27]" />

              <p className="text-2xl font-bold leading-relaxed text-[#b47d08] md:text-2xl">
                মানুষের জন্য কিছু করার মধ্যেই জীবনের প্রকৃত সার্থকতা।
              </p>
              <FaQuoteRight className="mb-2 text-2xl text-[#d9aa27]" />
            </div>

            {/* Description */}
            <p className="mb-8 text-justify text-base leading-9 text-slate-700 md:text-lg">
              {showFullText ? content.fullText : content.shortText}
            </p>

            {/* Read More Button */}
            <Link to="/ShebaDetails">
              <button className="group inline-flex items-center gap-3 rounded-lg border-2 border-blue-700 bg-transparent px-7 py-3 text-base font-bold text-blue-700 transition duration-300 hover:bg-blue-800 hover:text-white md:px-9">
                বিস্তারিত পড়ুন
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Shape */}
      <div className="absolute -bottom-20 right-[-80px] h-48 w-[45%] rotate-[-8deg] rounded-tl-full bg-blue-900/10"></div>
    </section>
  );
};

export default Sheba;