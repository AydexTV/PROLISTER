import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import modernHouseImage from "../assets/images/modernhouse.jpg";

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
        <div className="relative flex flex-col items-center w-4/6 m-10 z-10">
          <h1 className="text-2xl text-white">Please Select Targeted Properties</h1>
          <SearchForm />
        </div>

        <div className="2xl:block w-1/6 hidden"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
