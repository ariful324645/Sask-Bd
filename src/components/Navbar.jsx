import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip border-b border-slate-200 bg-white">
      <nav className="w-full max-w-full overflow-x-clip">
        {/* ============================== */}
        {/* TOP INFORMATION BAR */}
        {/* ============================== */}

        <div className="hidden border-b border-cyan-100 bg-cyan-50 md:block">
          <div className="mx-auto flex min-h-[32px] w-[94%] max-w-[1440px] items-center justify-between gap-3 text-[11px] font-semibold tracking-wide text-slate-600 lg:w-[92%]">
            <p className="truncate">মানবতার সেবায় আমরা প্রতিশ্রুতিবদ্ধ</p>

            <p className="hidden shrink-0 tracking-widest sm:block">
              HUMANITY • SERVICE • CARE
            </p>
          </div>
        </div>

        {/* ============================== */}
        {/* MAIN NAVBAR */}
        {/* ============================== */}

        <div className="mx-auto flex min-h-[72px] w-[94%] min-w-0 max-w-[1440px] items-center justify-between gap-3 lg:w-[92%]">
          {/* ============================== */}
          {/* LOGO AND WEBSITE NAME */}
          {/* ============================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          >
            {/* Clear Logo Without Shadow */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden bg-transparent sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <img
                src="https://i.ibb.co.com/xqdR8kZJ/website-logo-e1754679330283.png"
                alt="ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র লোগো"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Website Name */}
            <div className="hidden min-w-0 leading-tight sm:block">
              <h1 className="truncate text-sm font-extrabold tracking-tight text-slate-800 md:text-base lg:text-lg">
                ডাঃ শামসুল হুদা ও
              </h1>

              <p className="truncate text-[11px] font-bold tracking-wide text-cyan-600 md:text-xs lg:text-sm">
                আঞ্জুমান আরা সেবাকেন্দ্র
              </p>
            </div>
          </Link>

          {/* ============================== */}
          {/* DESKTOP MENU */}
          {/* Only show on 2xl to prevent overlap */}
          {/* ============================== */}

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-[12px] font-bold tracking-tight text-slate-700 2xl:flex 2xl:gap-2 2xl:text-[13px]">
            {/* HOME */}
            <Link to="/" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                হোম
              </li>
            </Link>

            {/* ABOUT */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm"
              >
                আমাদের সম্পর্কে
                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "about" && (
                <ul className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl">
                  <Link to="/identity" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      প্রতিষ্ঠান পরিচিতি
                    </li>
                  </Link>

                  <Link to="/goal" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      লক্ষ্য ও উদ্দেশ্য
                    </li>
                  </Link>

                  <Link to="/income" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      আয়ের উৎস
                    </li>
                  </Link>

                  <Link to="/activity" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      কার্যক্রম
                    </li>
                  </Link>

                  <Link to="/kendriyo" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      কেন্দ্রীয় পরিচালনা পর্ষদ
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            {/* SERVICES */}
            <Link to="OurSheba" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                আমাদের সেবাসমূহ
              </li>
            </Link>

            {/* PROJECT */}
            <Link to="allProject" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                চলমান প্রজেক্ট
              </li>
            </Link>

            {/* GALLERY */}
            <Link to="gallery" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                গ্যালারি
              </li>
            </Link>

            {/* VIDEO */}
            <Link to="video" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                ভিডিও
              </li>
            </Link>

            {/* VOLUNTEER */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("about1")}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm"
              >
                স্বেচ্ছাসেবক
                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${
                    openMenu === "about1" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "about1" && (
                <ul className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl">
                  <Link to="" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      আমাদের স্বেচ্ছাসেবক
                    </li>
                  </Link>

                  <Link to="OurShechaSebok" onClick={() => setOpenMenu("")}>
                    <li className="rounded-xl px-4 py-3 font-semibold transition hover:bg-cyan-50 hover:text-cyan-600">
                      স্বেচ্ছাসেবক নিবন্ধন
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            {/* CONTACT */}
            <li className="cursor-pointer whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
              যোগাযোগ
            </li>

            {/* E-COMMERCE */}
            <Link to="ecomerce" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                ই-কমার্স
              </li>
            </Link>

            {/* COURSE */}
            <Link to="course" onClick={closeMobileMenu}>
              <li className="whitespace-nowrap rounded-full px-3 py-2.5 text-slate-700 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm">
                কোর্স
              </li>
            </Link>
          </ul>

          {/* ============================== */}
          {/* ACCOUNT BUTTON */}
          {/* ============================== */}

          <button className="hidden shrink-0 rounded-lg border border-cyan-500 bg-cyan-600 px-4 py-2.5 text-[12px] font-extrabold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 2xl:block">
            আমার একাউন্ট
          </button>

          {/* ============================== */}
          {/* MOBILE MENU BUTTON */}
          {/* ============================== */}

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-700 transition duration-300 hover:border-cyan-300 hover:bg-cyan-100 2xl:hidden sm:h-11 sm:w-11"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>

        {/* ============================== */}
        {/* MOBILE MENU */}
        {/* Show below 2xl */}
        {/* ============================== */}

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-4 shadow-lg 2xl:hidden">
            {/* Mobile Brand */}
            <div className="mb-4 flex min-w-0 items-center gap-3 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-3">
              {/* Clear Mobile Logo Without Shadow */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-transparent">
                <img
                  src="https://i.ibb.co.com/xqdR8kZJ/website-logo-e1754679330283.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-extrabold tracking-tight text-slate-800">
                  ডাঃ শামসুল হুদা ও
                </h2>

                <p className="truncate text-xs font-bold tracking-wide text-cyan-600">
                  আঞ্জুমান আরা সেবাকেন্দ্র
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-1 text-sm font-bold tracking-wide text-slate-800">
              {/* HOME */}
              <Link to="/" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  হোম
                </li>
              </Link>

              {/* MOBILE ABOUT */}
              <li>
                <button
                  onClick={() => toggleMenu("about")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  আমাদের সম্পর্কে
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      openMenu === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === "about" && (
                  <ul className="ml-4 mt-1 rounded-xl border-l-2 border-cyan-200 bg-slate-50 p-2">
                    <Link to="/identity" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        প্রতিষ্ঠান পরিচিতি
                      </li>
                    </Link>

                    <Link to="/goal" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        লক্ষ্য ও উদ্দেশ্য
                      </li>
                    </Link>

                    <Link to="/income" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        আয়ের উৎস
                      </li>
                    </Link>

                    <Link to="/activity" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        কার্যক্রম
                      </li>
                    </Link>

                    <Link to="/kendriyo" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        কেন্দ্রীয় পরিচালনা পর্ষদ
                      </li>
                    </Link>
                  </ul>
                )}
              </li>

              {/* SERVICES */}
              <Link to="OurSheba" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  আমাদের সেবাসমূহ
                </li>
              </Link>

              {/* PROJECT */}
              <Link to="allProject" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  চলমান প্রজেক্ট
                </li>
              </Link>

              {/* GALLERY */}
              <Link to="gallery" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  গ্যালারি
                </li>
              </Link>

              {/* VIDEO */}
              <Link to="video" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  ভিডিও
                </li>
              </Link>

              {/* MOBILE VOLUNTEER */}
              <li>
                <button
                  onClick={() => toggleMenu("about1")}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  স্বেচ্ছাসেবক
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      openMenu === "about1" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === "about1" && (
                  <ul className="ml-4 mt-1 rounded-xl border-l-2 border-cyan-200 bg-slate-50 p-2">
                    <Link to="" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        আমাদের স্বেচ্ছাসেবক
                      </li>
                    </Link>

                    <Link to="OurShechaSebok" onClick={closeMobileMenu}>
                      <li className="rounded-lg px-4 py-2.5 transition hover:bg-cyan-50 hover:text-cyan-600">
                        স্বেচ্ছাসেবক নিবন্ধন
                      </li>
                    </Link>
                  </ul>
                )}
              </li>

              {/* CONTACT */}
              <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                যোগাযোগ
              </li>

              {/* E-COMMERCE */}
              <Link to="ecomerce" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  ই-কমার্স
                </li>
              </Link>

              {/* COURSE */}
              <Link to="course" onClick={closeMobileMenu}>
                <li className="rounded-xl px-4 py-3 transition hover:bg-cyan-50 hover:text-cyan-600">
                  কোর্স
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
