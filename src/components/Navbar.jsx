import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ==============================
  // DROPDOWN FUNCTION
  // ==============================
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // ==============================
  // CLOSE MOBILE MENU
  // ==============================
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  // ==============================
  // DESKTOP TEXT DESIGN
  // ==============================
  const mainTextClass =
    "whitespace-nowrap rounded-full px-2 py-2 text-[14px] font-extrabold tracking-wide text-[#1E293B] transition-all duration-300 hover:bg-[#DDF5F1] hover:text-[#008B55] hover:shadow-md lg:px-2.5 lg:text-[15px] xl:px-3 2xl:text-[16px]";

  const dropdownTextClass =
    "block w-full rounded-xl px-4 py-3 text-[16px] font-extrabold tracking-wide text-[#1E293B] transition-all duration-300 hover:bg-[#DDF5F1] hover:text-[#008B55]";

  const mobileTextClass =
    "block w-full rounded-xl px-4 py-3 text-[17px] font-extrabold tracking-wide text-[#1E293B] transition-all duration-300 hover:bg-[#DDF5F1] hover:text-[#008B55]";

  const mobileDropdownTextClass =
    "block w-full rounded-lg px-4 py-2.5 text-[16px] font-extrabold tracking-wide text-[#1E293B] transition-all duration-300 hover:bg-[#DDF5F1] hover:text-[#008B55]";

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-transparent px-2 py-3 sm:px-4 lg:px-6">
      <nav className="mx-auto w-full max-w-[1800px] overflow-visible rounded-xl border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur-md">
        {/* ==============================
            MAIN NAVBAR
        ============================== */}

        <div className="mx-auto flex min-h-[76px] w-full min-w-0 items-center justify-between gap-2 px-3 sm:gap-3 sm:px-4 lg:gap-4 lg:px-5 xl:px-6 2xl:px-7">
          {/* ==============================
              LOGO
          ============================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-transparent sm:h-14 sm:w-14 lg:h-16 lg:w-16 xl:h-[70px] xl:w-[70px] 2xl:h-20 2xl:w-20">
              <img
                src="https://i.ibb.co.com/xqdR8kZJ/website-logo-e1754679330283.png"
                alt="ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র লোগো"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* ==============================
              DESKTOP MENU
          ============================== */}

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex xl:gap-2 2xl:gap-3">
            {/* HOME */}
            <Link to="/" onClick={closeMobileMenu}>
              <li className={mainTextClass}>হোম</li>
            </Link>

            {/* ABOUT */}
            <li className="relative shrink-0">
              <button
                type="button"
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-0"
              >
                <span className={mainTextClass}>আমাদের সম্পর্কে</span>

                <FaAngleDown
                  size={15}
                  className={`shrink-0 text-[#111111] transition-transform duration-300 ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "about" && (
                <ul className="absolute left-1/2 top-full z-[100] mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                  <li>
                    <Link
                      to="/identity"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      প্রতিষ্ঠান পরিচিতি
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/goal"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      লক্ষ্য ও উদ্দেশ্য
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/income"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      আয়ের উৎস
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/activity"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      কার্যক্রম
                    </Link>
                  </li>

                  {/*
                  <li>
                    <Link
                      to="/kendriyo"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      কেন্দ্রীয় পরিচালনা পর্ষদ
                    </Link>
                  </li>
                  */}
                </ul>
              )}
            </li>

            {/* SERVICES */}
            <Link to="OurSheba" onClick={closeMobileMenu}>
              <li className={mainTextClass}>আমাদের সেবাসমূহ</li>
            </Link>

            {/* VOLUNTEER */}
            <li className="relative shrink-0">
              <button
                type="button"
                onClick={() => toggleMenu("about1")}
                className="flex items-center gap-0"
              >
                <span className={mainTextClass}>স্বেচ্ছাসেবক</span>

                <FaAngleDown
                  size={15}
                  className={`shrink-0 text-[#111111] transition-transform duration-300 ${
                    openMenu === "about1" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "about1" && (
                <ul className="absolute left-1/2 top-full z-[100] mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                  <li>
                    <Link
                      to="OurShechaSebok"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      আমাদের স্বেচ্ছাসেবক
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="ssNibondhon"
                      onClick={closeMobileMenu}
                      className={dropdownTextClass}
                    >
                      স্বেচ্ছাসেবক নিবন্ধন
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* E-COMMERCE */}
            <Link to="ecomerce" onClick={closeMobileMenu}>
              <li className={mainTextClass}>ই-কমার্স</li>
            </Link>

            {/* COURSE */}
            <Link to="course" onClick={closeMobileMenu}>
              <li className={mainTextClass}>কোর্স</li>
            </Link>

            {/* GALLERY */}
            <Link to="gallery1" onClick={closeMobileMenu}>
              <li className={mainTextClass}>গ্যালারি</li>
            </Link>

            {/* VIDEO */}
            <Link to="video1" onClick={closeMobileMenu}>
              <li className={mainTextClass}>ভিডিও</li>
            </Link>

            {/* BLOG */}
            <Link to="blog">
              <li className={`${mainTextClass} shrink-0 cursor-pointer`}>
                ব্লগ
              </li>
            </Link>

            {/* CONTACT */}
            <Link to="communication">
              <li className={`${mainTextClass} shrink-0 cursor-pointer`}>
                যোগাযোগ
              </li>
            </Link>
          </ul>

          {/* ==============================
              ACCOUNT BUTTON
          ============================== */}

          <button
            type="button"
            className="hidden shrink-0 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2.5 text-[14px] font-extrabold tracking-wide text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-emerald-500/25 xl:px-4 xl:text-[15px] 2xl:block"
          >
            আমার একাউন্ট
          </button>

          {/* ==============================
              MOBILE MENU BUTTON
          ============================== */}

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-700 transition duration-300 hover:border-cyan-300 hover:bg-cyan-100 2xl:hidden sm:h-11 sm:w-11"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>

        {/* ==============================
            MOBILE MENU
        ============================== */}

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-4 shadow-lg 2xl:hidden">
            {/* MOBILE BRAND */}

            <div className="mb-4 flex min-w-0 items-center gap-3 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-transparent">
                <img
                  src="https://i.ibb.co.com/xqdR8kZJ/website-logo-e1754679330283.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-[16px] font-extrabold tracking-wide text-[#111111]">
                  ডাঃ শামসুল হুদা ও
                </h2>

                <p className="truncate text-[15px] font-extrabold tracking-wide text-[#111111]">
                  আঞ্জুমান আরা সেবাকেন্দ্র
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {/* HOME */}

              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  হোম
                </Link>
              </li>

              {/* MOBILE ABOUT */}

              <li>
                <button
                  type="button"
                  onClick={() => toggleMenu("about")}
                  className="flex w-full items-center justify-between"
                >
                  <span className={mobileTextClass}>আমাদের সম্পর্কে</span>

                  <FaChevronDown
                    size={12}
                    className={`mr-4 text-[#111111] transition-transform duration-300 ${
                      openMenu === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === "about" && (
                  <ul className="ml-4 mt-1 rounded-xl border-l-2 border-cyan-200 bg-slate-50 p-2">
                    <li>
                      <Link
                        to="/identity"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        প্রতিষ্ঠান পরিচিতি
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/goal"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        লক্ষ্য ও উদ্দেশ্য
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/income"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        আয়ের উৎস
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/activity"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        কার্যক্রম
                      </Link>
                    </li>

                    {/*
                    <li>
                      <Link
                        to="/kendriyo"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        কেন্দ্রীয় পরিচালনা পর্ষদ
                      </Link>
                    </li>
                    */}
                  </ul>
                )}
              </li>

              {/* SERVICES */}

              <li>
                <Link
                  to="OurSheba"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  আমাদের সেবাসমূহ
                </Link>
              </li>

              {/* PROJECT */}

              <li>
                <button
                  type="button"
                  onClick={() => toggleMenu("about1")}
                  className="flex w-full items-center justify-between"
                >
                  <span className={mobileTextClass}>স্বেচ্ছাসেবক</span>

                  <FaChevronDown
                    size={12}
                    className={`mr-4 text-[#111111] transition-transform duration-300 ${
                      openMenu === "about1" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === "about1" && (
                  <ul className="ml-4 mt-1 rounded-xl border-l-2 border-cyan-200 bg-slate-50 p-2">
                    <li>
                      <Link
                        to="OurShechaSebok"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        আমাদের স্বেচ্ছাসেবক
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ssNibondhon"
                        onClick={closeMobileMenu}
                        className={mobileDropdownTextClass}
                      >
                        স্বেচ্ছাসেবক নিবন্ধন
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* E-COMMERCE */}

              <li>
                <Link
                  to="ecomerce"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  ই-কমার্স
                </Link>
              </li>

              {/* COURSE */}

              <li>
                <Link
                  to="course"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  কোর্স
                </Link>
              </li>

              {/* GALLERY */}

              <li>
                <Link
                  to="gallery1"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  গ্যালারি
                </Link>
              </li>

              {/* VIDEO */}

              <li>
                <Link
                  to="video1"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  ভিডিও
                </Link>
              </li>

              {/* MOBILE VOLUNTEER */}

              <li>
                <Link
                  to="blog"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  ব্লগ
                </Link>
              </li>

              {/* CONTACT */}

              <li>
                <Link
                  to="communication"
                  onClick={closeMobileMenu}
                  className={mobileTextClass}
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
