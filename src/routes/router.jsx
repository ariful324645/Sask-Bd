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
import Video from "../components/Video";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import AllProject from "../components/AllProject";
import OurSheba from "../components/OurSheba";
import OurSechasebok from "../components/OurSechasebok";

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
        element:<Goal></Goal>,
      },
      {
        path: "income", // ✅ fixed
        element:<Income></Income>,
      },
      {
        path: "activity", // ✅ fixed
        element:<Activity></Activity>,
      },
      {
        path: "kendriyo", // ✅ fixed
        element:<Kendriyo></Kendriyo>,
      },
      {
        path: "video", // ✅ fixed
        element:<Video></Video>,
      },
      {
        path: "gallery", // ✅ fixed
        element:<Gallery></Gallery>,
      },
      {
        path: "allProject", // ✅ fixed
        element:<AllProject></AllProject>,
      },
      {
        path: "OurSheba", // ✅ fixed
        element: <OurSheba></OurSheba>,
      },
      {
        path: "OurShechaSebok", // ✅ fixed
        element: <OurSechasebok></OurSechasebok>,
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
