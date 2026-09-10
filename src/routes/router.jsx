import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

import ShebaDetails from "../components/ShebaDetails";
import ServiceDetails from "../components/ServiceDetails";
import { Component } from "react";
import Home from "../layouts/Home";
import Identity from "../components/Identity";
import Goal from "../components/Goal";
import Income from "../components/Income";
import Activity from "../components/Activity";
import Kendriyo from "../components/Kendriyo";

import Service from "../components/Service";
import AllProject from "../components/AllProject";
import OurSheba from "../components/OurSheba";
import OurSechasebok from "../components/OurSechasebok";
import Ecomerce from "../components/Ecomerce";
import Course from "../components/Course";
import SsNibondhon from "../components/SsNibondhon";
import Gallery1 from "../components/Gallery1";
import Video1 from "../components/Video1";
import Communication from "../components/Communication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "ShebaDetails", // ✅ fixed
        element: <ShebaDetails />,
      },
      {
        path: "service/:id", // ✅ fixed
        element: <ServiceDetails />,
      },
      {
        path: "identity", // ✅ fixed
        element: <Identity></Identity>,
      },
      {
        path: "goal", // ✅ fixed
        element: <Goal></Goal>,
      },
      {
        path: "income", // ✅ fixed
        element: <Income></Income>,
      },
      {
        path: "activity", // ✅ fixed
        element: <Activity></Activity>,
      },
      {
        path: "kendriyo", // ✅ fixed
        element: <Kendriyo></Kendriyo>,
      },
      {
        path: "video1", // ✅ fixed
        element: <Video1></Video1>,
      },
      {
        path: "gallery1", // ✅ fixed
        element: <Gallery1></Gallery1>,
      },
      {
        path: "allProject", // ✅ fixed
        element: <AllProject></AllProject>,
      },
      {
        path: "OurSheba", // ✅ fixed
        element: <OurSheba></OurSheba>,
      },
      {
        path: "OurShechaSebok", // ✅ fixed
        element: <OurSechasebok></OurSechasebok>,
      },
      {
        path: "ecomerce", // ✅ fixed
        element: <Ecomerce></Ecomerce>,
      },
      {
        path: "course", // ✅ fixed
        element: <Course></Course>,
      },
      {
        path: "ssNibondhon", // ✅ fixed
        element: <SsNibondhon></SsNibondhon>,
      },
      {
        path: "communication", // ✅ fixed
        element:<Communication></Communication>,
      },
    ],
  },

  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
