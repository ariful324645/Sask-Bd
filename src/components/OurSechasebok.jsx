import React from "react";

const OurSechasebok = () => {
  const data = [
    {
      id: 1,
      name: "মনিরুল ইসলাম",
      jila: "সিরাজগঞ্জ জেলা",
      image: "https://i.ibb.co.com/n8RNcBzj/p1.jpg",
    },
    {
      id: 2,
      name: "সোহেল রানা",
      jila: "মাদারীপুর জেলা",
      image: "https://i.ibb.co.com/3YFC4H4C/p2.jpg",
    },
    {
      id: 3,
      name: "মোফাজ্জল হোসেন",
      jila: "সিরাজগঞ্জ জেলা",
      image: "https://i.ibb.co.com/Wp2jJ7Zn/p3.jpg",
    },
    {
      id: 4,
      name: "ইনামুল হাসান",
      jila: "মাদারীপুর জেলা",
      image: "https://i.ibb.co.com/SwywQtjn/p4.jpg",
    },
    {
      id: 5,
      name: "হাসানুজ্জামান",
      jila: "নাটোর জেলা",
      image: "https://i.ibb.co.com/2YR7h6D9/p5.jpg",
    },
    {
      id: 6,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center bg-gray-700 py-6 text-white">
        স্বেচ্ছাসেবক তালিকা
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((person) => (
          <div
            key={person.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition">
                {person.name}
              </h2>

              {/* Jila (moved here) */}
              <p className="mt-2 inline-block bg-red-100 text-red-600 text-lg px-3 py-1 rounded-full">
                {person.jila}
              </p>

              <p className="text-sm text-gray-500 mt-2">স্বেচ্ছাসেবক সদস্য</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSechasebok;
