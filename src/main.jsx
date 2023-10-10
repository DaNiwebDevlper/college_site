import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Department from "./components/department/Department";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import DeptDetailCard from "./components/department/DeptDetailCard";
import GalleryDetailCard from "./components/gallery/GalleryDetailCard";
import AnncoumentCard from "./components/annocument/AnncoumentCard";
import Fees from "./components/Fees";
import Parking from "./components/Parking";
import MeritList from "./components/quickAccess/MeritList"
import Exams from "./components/Exams";
import TimeTable from "./components/TimeTable";
import DevelopmentTeam from "./components/about/DevelopmentTeam";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/department" element={<Department />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="fee&fine" element={<Fees />} />
      <Route path="parking" element={<Parking />} />
      <Route path="meritList" element={<MeritList />} />
      <Route path="team" element={<DevelopmentTeam />} />
      <Route path="exams" element={<Exams />} />
      <Route path="timetable" element={<TimeTable />} />
      <Route path="/department/:id" element={<DeptDetailCard />} />
      <Route path="/gallery/:id" element={<GalleryDetailCard />} />
      <Route path="/anncoument/:id" element={<AnncoumentCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
