import React from "react";

import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import HeaderAbove from "../components/HeaderAbove";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Sheba from "../components/Sheba";
import Service from "../components/Service";
import Video from "../components/Video";
import Gallery from "../components/Gallery";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="">
      {/* HEADER */}
      {/* Top Header */}
      {/* <div className="">
        <div className="w-11/12 mx-auto">
          <HeaderAbove />
        </div>
      </div> */}

      {/* Main Header */}
      {/* <div className="w-11/12 mx-auto">
        <Header />
      </div> */}
      <header className="absolute left-0 top-0 z-50 mt-0 w-full translate-y-1 px-3 shadow-sm sm:px-4 md:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1850px]">
          <Navbar />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="min-h-screen  text-white">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="">
        <div className="w-full mx-auto py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
