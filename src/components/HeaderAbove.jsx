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
              href="https://www.facebook.com/people/Dr-Shamsul-Huda-Anjuman-Ara-Seba-Kendro/100094222038622/?mibextid=qi2Omg&rdid=oUX6vvIhArKtHzMR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16CUwPANKM%2F%3Fmibextid%3Dqi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full text-white cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.facebook.com/RebekaSultanaOfficial?mibextid=qi2Omg&rdid=AEo5uqkhyRJUgnOk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14KfPUo4PYW%2F%3Fmibextid%3Dqi2Omg#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full text-white cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@dr.rebekasultana5160"
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
