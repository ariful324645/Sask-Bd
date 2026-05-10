import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [openMenu, setOpenMenu] = useState("");

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
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                হোম
              </li>
            </Link>
            <li className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === "about" ? "" : "about")}
                className="flex items-center gap-1 hover:text-yellow-300 transition duration-300 hover:scale-105"
              >
                আমাদের সম্পর্কে <FaChevronDown size={12} />
              </button>

              {openMenu === "about" && (
                <ul className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-52 z-50 overflow-hidden">
                  <Link to="/identity" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      প্রতিষ্ঠান পরিচিতি
                    </li>
                  </Link>

                  <Link to="/goal" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      লক্ষ্য ও উদ্দেশ্য
                    </li>
                  </Link>

                  <Link to="/income" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      আয়ের উৎস
                    </li>
                  </Link>

                  <Link to="/activity" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      কার্যক্রম
                    </li>
                  </Link>

                  <Link to="/kendriyo" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      কেন্দ্রীয় পরিচালনা পর্ষদ
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <Link to="OurSheba">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                আমাদের সেবাসমূহ
              </li>
            </Link>
            <Link to="allProject">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                চলমান প্রজেক্ট
              </li>
            </Link>
            <Link to="gallery">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                গ্যালারি
              </li>
            </Link>
            <Link to="video">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                ভিডিও
              </li>
            </Link>

            <li className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "about1" ? "" : "about1")
                }
                className="flex items-center gap-1 hover:text-yellow-300 transition duration-300 hover:scale-105"
              >
                স্বেচ্ছাসেবক <FaChevronDown size={12} />
              </button>

              {openMenu === "about1" && (
                <ul className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-52 z-50 overflow-hidden">
                  <Link to="" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      আমাদের স্বেচ্ছাসেবক
                    </li>
                  </Link>
                  <Link to="OurShechaSebok" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      স্বেচ্ছাসেবক নিবন্ধন
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
              যোগাযোগ
            </li>
            <Link to="ecomerce">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                ই-কমার্স
              </li>
            </Link>
            <Link to="course">
              <li className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:scale-105">
                কোর্স
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col items-center gap-3 px-4 pb-4 text-sm font-semibold">
            <Link to="/">
              {" "}
              <li className="cursor-pointer hover:text-gray-200">হোম</li>
            </Link>
            <li className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === "about" ? "" : "about")}
                className="flex items-center gap-1 hover:text-yellow-300 transition duration-300 hover:scale-105"
              >
                আমাদের সম্পর্কে <FaChevronDown size={12} />
              </button>

              {openMenu === "about" && (
                <ul className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-52 z-50 overflow-hidden">
                  <Link to="/identity" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      প্রতিষ্ঠান পরিচিতি
                    </li>
                  </Link>

                  <Link to="/goal" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      লক্ষ্য ও উদ্দেশ্য
                    </li>
                  </Link>

                  <Link to="/income" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      আয়ের উৎস
                    </li>
                  </Link>

                  <Link to="/activity" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      কার্যক্রম
                    </li>
                  </Link>

                  <Link to="/kendriyo" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
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
                onClick={() =>
                  setOpenMenu(openMenu === "about1" ? "" : "about1")
                }
                className="flex items-center gap-1 hover:text-yellow-300 transition duration-300 hover:scale-105"
              >
                স্বেচ্ছাসেবক <FaChevronDown size={12} />
              </button>

              {openMenu === "about1" && (
                <ul className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black rounded shadow-md w-52 z-50 overflow-hidden">
                  <Link to="" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      আমাদের স্বেচ্ছাসেবক
                    </li>
                  </Link>
                  <Link to="OurShechaSebok" onClick={() => setOpenMenu("")}>
                    <li className="px-4 py-3 hover:bg-indigo-100 hover:text-indigo-600 transition duration-200 cursor-pointer">
                      স্বেচ্ছাসেবক নিবন্ধন
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-gray-200">যোগাযোগ</li>
            <Link to="ecomerce">
              {" "}
              <li className="cursor-pointer hover:text-gray-200">ই-কমার্স</li>
            </Link>
            <Link to="course">
              {" "}
              <li className="cursor-pointer hover:text-gray-200">কোর্স</li>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
