import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-3">সেবাকেন্দ্রের নাম</h2>
          <p className="mb-2">প্রতিষ্ঠাতা ও পরিচালক: ড. রেবেকা সুলতানা</p>
          <p>স্থাপিত: ২০১২ সাল</p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-3">সেবাকেন্দ্রের যোগাযোগ</h2>
          <p className="mb-2">ফোন: +৮৮০১৩০১-৫০০৩৯৬</p>
          <p>ইমেইল: saskofficials@gmail.com</p>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold mb-3">লিংকসমূহ</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-400">
              আমাদের সম্পর্কে
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              আমাদের সেবাসমূহ
            </li>
          </ul>
        </div>

        {/* Column 4 (Social Media) */}
        <div>
          <h2 className="text-xl font-bold mb-3">সোশাল মিডিয়া</h2>
          <div className="flex gap-3 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-2 rounded text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded text-white hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-2 rounded text-white hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      {/* <div className="text-center text-gray-400 mt-10 text-sm">
        © 2026 All Rights Reserved
      </div> */}
    </footer>
  );
};

export default Footer;
