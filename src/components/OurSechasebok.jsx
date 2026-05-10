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
    {
      id: 7,
      name: "জাকারিয়া আহমেদ মাসুম",
      jila: "নরসিংদী  জেলা",
      image: "https://i.ibb.co.com/TD47rMyf/7.jpg",
    },
    {
      id: 8,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 9,
      name: "ফজলুল করিম",
      jila: "সিলেট  জেলা",
      image: "https://i.ibb.co.com/fGnQcQcg/9.jpg",
    },
    {
      id: 10,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 11,
      name: "এ এম রিয়াজ কামাল হিরণ ",
      jila: "চট্টগ্রাম জেলা ",
      image: "https://i.ibb.co.com/Q3CVGxY8/A-M-Reaz-Kamal-Heron-11.jpg",
    },
    {
      id: 12,
      name: "রমজান আলী আবির",
      jila: "শরীয়তপুর জেলা",
      image: "https://i.ibb.co.com/N21WWJ9R/RAMJAN-ALI-ABIR-12.jpg",
    },
    {
      id: 13,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 14,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 15,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 16,
      name: "মোঃ রবিউল ইসলাম শাকিল",
      jila: "বগুড়া জেলা",
      image: "https://i.ibb.co.com/PzgKS4TX/MD-ROBIUL-ISLAM-SHAKIL-16.jpg",
    },
    {
      id: 17,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 18,
      name: "শাহাবুদ্দিন ",
      jila: "শরিয়তপুর  জেলা",
      image: "https://i.ibb.co.com/b5PktQFm/Shahabuddin-18.jpg",
    },
    {
      id: 19,
      name: "মোঃ সোহেল রানা ",
      jila: "বান্দরবান জেলা",
      image: "https://i.ibb.co.com/gbW2p5LV/Md-Shohel-Rana-19.jpg",
    },
    {
      id: 20,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 21,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 22,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 23,
      name: "ইনামুল হাসান ",
      jila: "মাদারীপুর  জেলা",
      image: "https://i.ibb.co.com/gbc30J2f/23.jpg",
    },
    {
      id: 24,
      name: "মো: রমজান সেক",
      jila: "টাংগাইল  জেলা",
      image: "https://i.ibb.co.com/zWt23dXX/24.jpg",
    },
    {
      id: 25,
      name: "মোঃ আসলাম গাজী",
      jila: "সাতক্ষীরা  জেলা",
      image: "https://i.ibb.co.com/7xsWtT4Z/25.jpg",
    },
    {
      id: 26,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 27,
      name: "ফারজানা ববি",
      jila: "গাজীপুর",
      image: "https://i.ibb.co.com/ZRz0ThKj/Farjana-boby-27.jpg",
    },
    {
      id: 28,
      name: "ইয়াসিন রোমান ",
      jila: "গাজীপুর  জেলা",
      image: "https://i.ibb.co.com/4QmmrSB/28.jpg",
    },
    {
      id: 29,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 30,
      name: "পাপিয়া ",
      jila: "শরীয়তপুর জেলা",
      image: "https://i.ibb.co.com/Td69dP4/30.jpg",
    },
    {
      id: 31,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 32,
      name: "মুহাম্মদ রাহাত মিয়া",
      jila: "হবিগঞ্জ",
      image: "https://i.ibb.co.com/ccn1MQCT/32.jpg",
    },
    {
      id: 33,
      name: "মোহাম্মদ হেলাল মুন্সী ",
      jila: "নড়াইল ",
      image: "https://i.ibb.co.com/DHQNQ3Yq/DSC05133-Md-Helal-Munsi-1.jpg",
    },
    {
      id: 34,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 35,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 36,
      name: "মল্লিকা রায়",
      jila: "রংপুর",
      image: "https://i.ibb.co.com/W42rXkDL/36.jpg",
    },
    {
      id: 37,
      name: "মোঃ মোরশেদুল হক",
      jila: "দিনাজপুর জেলা",
      image: "https://i.ibb.co.com/QvJttxqq/37.jpg",
    },
    {
      id: 38,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 39,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 40,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 41,
      name: "মোঃ ইয়াসিন",
      jila: "পিরোজপুর  জেলা",
      image: "https://i.ibb.co.com/qLDhsJf8/41.jpg",
    },
    {
      id: 42,
      name: "দীপক রায় ",
      jila: "পঞ্চগড় জেলা",
      image: "https://i.ibb.co.com/LdMkPBSn/42.jpg",
    },
    {
      id: 43,
      name: "কিশোর চন্দ্র বালা ",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/1JdcfLbz/43.jpg",
    },
    {
      id: 44,
      name: "জবা ইয়াসমিন",
      jila: "যশোর জেলা",
      image: "https://i.ibb.co.com/8gCsKJ5j/44.jpg",
    },
    {
      id: 45,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 46,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 47,
      name: "তুষার কান্তি হাওলাদার",
      jila: "বরগুনা জেলা",
      image: "https://i.ibb.co.com/Q7t99BW1/47.jpg",
    },
    {
      id: 48,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 49,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 50,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 51,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 52,
      name: "জহুর আলম",
      jila: "বরিশাল জেলা",
      image: "https://i.ibb.co.com/Vf0CZVH/p6.jpg",
    },
    {
      id: 53,
      name: "তারফিনা শাহানাজ ",
      jila: "নোয়াখালী  জেলা",
      image: "https://i.ibb.co.com/PvnJWLKS/53.jpg",
    },
    {
      id: 54,
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
