import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="bg-red-600 w-full">
      <nav className="text-white">
        <div className="w-full flex justify-center items-center px-4 h-14 relative">
          {/* Mobile Menu Button (left side, but doesn't break center) */}
          <button
            className="md:hidden absolute left-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Desktop Menu (perfect center) */}
          <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold">
            <Link to="/">
              {" "}
              <li className="cursor-pointer hover:text-gray-200">হোম</li>
            </Link>

            <li className="relative">
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-1 hover:text-gray-200"
              >
                আমাদের সম্পর্কে <FaChevronDown size={12} />
              </button>

              {openMenu === "about" && (
                <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-40">
                  <Link to="/identity">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      প্রতিষ্ঠান পরিচিতি
                    </li>
                  </Link>
                  <Link to="/goal">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      লক্ষ্য ও উদ্দেশ্য
                    </li>
                  </Link>
                  <Link to="/income">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      আয়ের উৎস
                    </li>
                  </Link>
                  <Link to="/activity">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      কার্যক্রম
                    </li>
                  </Link>
                  <Link to="/kendriyo">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      কেন্দ্রীয় পরিচালনা পর্ষদ
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="OurSheba">
              <li className="cursor-pointer hover:text-gray-200">
                {" "}
                আমাদের সেবাসমূহ
              </li>
            </Link>
            <Link to="allProject">
              <li className="cursor-pointer hover:text-gray-200">
                {" "}
                চলমান প্রজেক্ট
              </li>
            </Link>

            <Link to="gallery">
              <li className="cursor-pointer hover:text-gray-200">গ্যালারি</li>
            </Link>

            <Link to="video">
              <li className="cursor-pointer hover:text-gray-200">ভিডিও</li>
            </Link>

            <li className="relative">
              <button
                onClick={() => toggleMenu("notice")}
                className="flex items-center gap-1 hover:text-gray-200"
              >
                স্বেচ্ছাসেবক <FaChevronDown size={12} />
              </button>

              {openMenu === "notice" && (
                <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-64 whitespace-nowrap">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    আমাদের স্বেচ্ছাসেবক
                  </li>

                  <Link to="OurShechaSebok">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      স্বেচ্ছাসেবক নিবন্ধন
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-gray-200">যোগাযোগ</li>
            <li className="cursor-pointer hover:text-gray-200">E-comerce</li>
            <li className="cursor-pointer hover:text-gray-200">Book sells</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col items-center gap-3 px-4 pb-4 text-sm font-semibold">
            <li className="cursor-pointer hover:text-gray-200">হোম</li>

            <li className="text-center">
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center justify-center gap-1 hover:text-gray-200"
              >
                আমাদের সম্পর্কে <FaChevronDown size={12} />
              </button>

              {openMenu === "about" && (
                <ul className="mt-2 bg-white text-black rounded shadow-md w-40 mx-auto">
                  <Link to="/identity">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      প্রতিষ্ঠান পরিচিতি
                    </li>
                  </Link>
                  <Link to="/goal">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      লক্ষ্য ও উদ্দেশ্য
                    </li>
                  </Link>
                  <Link to="/income">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      আয়ের উৎস
                    </li>
                  </Link>
                  <Link to="/activity">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      কার্যক্রম
                    </li>
                  </Link>
                  <Link to="/kendriyo">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      কেন্দ্রীয় পরিচালনা পর্ষদ
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-gray-200">
              আমাদের সেবাসমূহ
            </li>

            <li className="cursor-pointer hover:text-gray-200">
              চলমান প্রজেক্ট
            </li>

            <li className="cursor-pointer hover:text-gray-200">গ্যালারি</li>

            <li className="cursor-pointer hover:text-gray-200">ভিডিও</li>

            <li className="text-center">
              <button
                onClick={() => toggleMenu("notice")}
                className="flex items-center justify-center gap-1 hover:text-gray-200"
              >
                নোটিশ বোর্ড <FaChevronDown size={12} />
              </button>

              {openMenu === "notice" && (
                <ul className="mt-2 bg-white text-black rounded shadow-md w-40 mx-auto">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    নতুন নোটিশ
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    পুরাতন নোটিশ
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-gray-200">যোগাযোগ</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
