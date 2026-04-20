import React from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HeaderAbove from "../components/HeaderAbove";
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
      <div className="">
        <div className="w-11/12 mx-auto">
          <HeaderAbove />
        </div>
      </div>

      {/* Main Header */}
      <div className="w-11/12 mx-auto">
        <Header />
      </div>
      <header className=" w-full sticky top-0 z-50 bg-gray-200 shadow-sm">
        {/* ONLY NAVBAR STICKY */}
        <div className="  bg-white shadow-md">
          <div className=" w-full mx-auto">
            <Navbar />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Outlet></Outlet>
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
