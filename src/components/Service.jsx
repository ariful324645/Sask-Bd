import React from "react";
import { Link } from "react-router";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "অসহায় ও দুঃস্থদের মানবিক সহায়তা",
      description:
        "হঠাৎ কোনো দুর্ঘটনা, গুরুতর ব্যাধি কিংবা চরম অর্থনৈতিক সংকট যখন প্রান্তিক জনগোষ্ঠীর জীবনের স্বাভাবিক গতি থামিয়ে দেয়, তখন মৌলিক মানবিক সাহচর্যই হয়ে ওঠে বেঁচে থাকার প্রধান আলো । কোনো অসহায় পরিবার বা ব্যক্তি যেন প্রতিকূল পরিস্থিতির কাছে পরাজিত না হন..... ",
      image: "https://i.ibb.co.com/pvGbR4Lz/FB-IMG-1788676420596.jpg",
    },
    {
      id: 2,
      title: "জরুরি ত্রাণ সহায়তা প্রদান",
      description:
        "প্রাকৃতিক দুর্যোগ বা হঠাৎ নেমে আসা চরম দুর্যোগে সবচেয়ে বেশি ক্ষতিগ্রস্ত হয় উপকূলীয় ও প্রান্তিক এলাকার নিম্নআয়ের মানুষ। যেকোনো জাতীয় কিংবা স্থানীয় সংকটকালীন সময়ে চরম বিপদে পড়া এই অসহায় ও বিপর্যস্ত মানুষদের পাশে তাৎক্ষণিক সাহচর্য ও নির্ভরতা নিয়ে দাঁড়াতে ‘ডাঃ শামসুল হুদা ও আঞ্জুমান আরা..... ",
      image: "https://i.ibb.co.com/5XSM34mY/FB-IMG-1788682374550.jpg",
    },
    {
      id: 3,
      title: "নারী স্বাবলম্বিতা কর্মসূচি",
      description: `একটি সমাজ ও পরিবারের স্থায়ী সমাধানের মূল চাবিকাঠি হলো নারীদের অর্থনৈতিক আত্মনির্ভরশীলতা। সমাজে পিছিয়ে পড়া, স্বামীপরিত্যক্তা, বিধবা এবং অর্থনৈতিকভাবে চরম সংকটে থাকা প্রান্তিক নারীদের সম্মানের সাথে বেঁচে থাকার পথ সুগম করতে ‘ডাঃ শামসুল হুদা ও আঞ্জুমান আর সেবাকেন্দ্র’ পরিচালনা .....`,
      image: "https://i.ibb.co.com/tMzDc0PD/image-736103-1699027645.jpg",
    },
    {
      id: 4,
      title: "ফ্রি মেডিকেল ক্যাম্প",
      description: `স্বাস্থ্যসেবা পাওয়া মানুষের মৌলিক অধিকার হলেও অর্থনৈতিক সীমাবদ্ধতা ও ভৌগোলিক দূরত্বের কারণে গ্রামীণ প্রান্তিক জনগোষ্ঠীর এক বিশাল অংশ প্রয়োজনীয় চিকিৎসা সুবিধা থেকে বঞ্চিত হন। এই বাস্তবতা অনুধাবন করে গ্রাম ও প্রত্যন্ত অঞ্চলের অসহায়, দরিদ্র ও দুস্থ মানুষের দোরগোড়ায় মানসম্মত ও আধুনিক চিকিৎসাসেবা.......`,
      image: "https://i.ibb.co.com/rKLP0yYb/DSC03895.jpg",
    },
    {
      id: 5,
      title: "বৃক্ষরোপণ কর্মসূচি",
      description: `জলবায়ু পরিবর্তনের ক্ষতিকর প্রভাব মোকাবিলা, প্রাকৃতিক ভারসাম্য রক্ষা এবং সবুজ ও টেকসই পৃথিবী নিশ্চিত করতে ‘ডাঃ শামসুল হুদা ও আঞ্জুমান আর সেবা কেন্দ্র’ নিয়মিতভাবে পরিচালনা করে আসছে ‘বৃক্ষ রোপণ কর্মসূচি’।

কেবল বৃক্ষ রোপণই নয়, পরিবেশ সুরক্ষায় জনসচেতনতা তৈরি এবং তরুণ প্রজন্মকে প্রকৃতির প্রতি....`,
      image: "https://i.ibb.co.com/kdT1k5x/20240823-181133.jpg",
    },
    {
      id: 6,
      title: "শীতবস্ত্র বিতরণ কর্মসূচি",
      description: `শীতের তীব্রতা ও কনকনে ঠান্ডা বাংলাদেশের প্রত্যন্ত অঞ্চলের দুস্থ, অসহায় ও প্রবীণ মানুষের জীবনযাত্রাকে চরম দুর্ভোগের মুখে ফেলে দেয়। অর্থনৈতিক অসচ্ছলতার কারণে যাদের কাছে শীত নিবারণের ন্যূনতম গরম কাপড় থাকে না, সেইসব শীতার্ত মানুষের কষ্ট লাঘবে এবং তাঁদের পাশে উষ্ণতার পরশ নিয়ে দাঁড়াতে.....`,
      image: "https://i.ibb.co.com/wrrvpmry/1000206030.jpg",
    },
  ];

  return (
    <div className="mt-10 w-11/12 mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        আমাদের সেবাসমূহ
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
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

export default Service;
