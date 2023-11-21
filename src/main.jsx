import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Department from "./pages/department/Department";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import DeptDetailCard from "./pages/department/DeptDetailCard";
import GalleryDetailCard from "./pages/gallery/GalleryDetailCard";
import AnncoumentCard from "./pages/annocument/AnncoumentCard";
import Fees from "./components/Fees";
import Parking from "./components/Parking";
import MeritList from "./pages/quickAccess/MeritList"
import Exams from "./components/Exams";
import TimeTable from "./components/TimeTable";
import DevelopmentTeam from "./pages/about/DevelopmentTeam";
import RulesRegulation from "./pages/about/RulesRegulation.jsx";
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
      <Route path="rules" element={<RulesRegulation />} />
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

);
