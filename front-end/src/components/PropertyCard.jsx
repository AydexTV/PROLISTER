import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { formatDistanceToNow } from "date-fns";

const PropertyCard = ({ property }) => {
  const { title, price, images, createdAt, location } = property;

  return (
    <Link
      className="flex flex-col lg:flex-row justify-center lg:h-52 lg:w-[700px] bg-[#7a716a]/50 py-5 px-8 my-5 rounded-2xl cursor-pointer"
      to={`/property/${property._id}`}
    >
      <div className="relative w-full lg:h-full lg:w-1/3 mr-10 rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={images[0]} // Directly using the Cloudinary URL
          alt="Property"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-grow basis-2/3 flex-col justify-between py-2">
        <div className="flex">
          <IoLocationOutline />
          <p className="px-2 text-sm">
            {location.city}, {location.country}
          </p>
        </div>
        <h1 className="pt-2 text-lg">{title}</h1>
        <p className="pt-2 text-sm">{price} R.O/ Month</p>
        <div className="flex justify-end pt-4">
          <IoTimeOutline />
          <p className="pl-2 text-xs">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
