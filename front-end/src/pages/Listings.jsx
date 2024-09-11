import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import modernHouseImage from "../assets/images/modernhouse.jpg";
import listImage from "../assets/images/list.png";
import mapImage from "../assets/images/map.png";
import { Link } from "react-router-dom";

const Listings = () => {
  return (
    <div>
      <NavBar isLoggedIn={false} activeTab="listings" />
      
      <div className="relative flex flex-col justify-center items-center h-lvh overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${modernHouseImage})`,
            filter: "blur(8px)",
            transform: "scale(1.1)" // Scales the image slightly to remove any edges
          }}
        ></div>

        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-gray-950/20"></div>

        {/* Content */}
        <div className="relative flex lg:flex-row flex-col justify-center items-center w-4/6 m-10 z-10">
          <Link className="flex flex-col justify-center items-center h-96 w-96 bg-[#F7E7DC]/30 hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-5" to="/listview">
          <img className="h-72 w-auto" src={listImage} alt="listview" />
          <h1 className="text-[30px]">List View</h1>
          </Link>
          <Link className="flex flex-col justify-center items-center h-96 w-96 bg-[#F7E7DC]/30 hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-5" to="/mapview">
          <img className="h-72 w-auto" src={mapImage} alt="mapview" />
          <h1 className="text-[30px]">Map View</h1>
          </Link>
        </div>

        <div className="2xl:block w-1/6 hidden"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
