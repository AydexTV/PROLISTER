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
      {/* <NavBar isLoggedIn={false} activeTab="listings" /> */}
      
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gray-950/30"></div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/6 mx-4 lg:mx-10 z-10">
          <Link className="flex flex-col justify-center items-center h-80 w-full lg:w-80 bg-[#F7E7DC]/30 hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-4 lg:m-5 transition-colors" to="/listview">
            <img className="h-48 w-auto" src={listImage} alt="listview" />
            <h1 className="text-xl lg:text-2xl mt-2">List View</h1>
          </Link>
          <Link className="flex flex-col justify-center items-center h-80 w-full lg:w-80 bg-[#F7E7DC]/30 hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-4 lg:m-5 transition-colors" to="/mapview">
            <img className="h-48 w-auto" src={mapImage} alt="mapview" />
            <h1 className="text-xl lg:text-2xl mt-2">Map View</h1>
          </Link>
        </div>

        <div className="w-full lg:w-1/6 hidden lg:block"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
