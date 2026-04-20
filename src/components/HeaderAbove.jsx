import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const HeaderAbove = () => {
  return (
    <div className="w-full  px-6 py-3 flex items-center justify-between">
      {/* Left Section (Logo + Title) */}
      <div className="flex items-center gap-4"></div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-2">
          <div className="flex gap-2">
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full text-white cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full text-white cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 p-2 rounded-full text-white cursor-pointer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 p-2 rounded-full text-white cursor-pointer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbove;
