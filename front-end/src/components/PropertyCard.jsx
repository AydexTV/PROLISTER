import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";

const PropertyCard = () => {
  return (
    <Link className="flex flex-col lg:flex-row justify-center lg:h-52 bg-[#7a716a]/50 py-5 px-8 my-5 rounded-2xl cursor-pointer" to="/property">
      <div
        className="relative w-full lg:h-full lg:w-1/3 mr-10 rounded-2xl shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="block pb-[56.25%] lg:hidden"></div>
      </div>
      <div className="flex flex-grow basis-2/3 flex-col justify-between py-2">
        <div className="flex">
          <IoLocationOutline />
          <p className="px-2 text-sm">Location</p>
        </div>
        <h1 className="pt-2 text-lg">Spacious villa for rent with beach view and 10 cars. New Villa, first Tenant</h1>
        <p className="pt-2 text-sm">1,600 USD</p>
        <div className="flex justify-end pt-4">
          <IoTimeOutline />
          <p className="pl-2 text-xs">2 hours ago</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
