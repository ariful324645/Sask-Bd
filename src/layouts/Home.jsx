import React from "react";
import HeroSection from "../components/HeroSection";
import Sheba from "../components/Sheba";
import Service from "../components/Service";
import Video from "../components/Video";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="">
      <>
        <HeroSection />
        <Sheba />
        <Service />
        <Video />
        <Gallery />
      </>
    </div>
  );
};

export default Home;
