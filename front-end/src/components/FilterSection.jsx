import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const FilterSection = ({ onClose }) => {
  // State for form inputs
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [furnishedOptions, setFurnishedOptions] = useState({
    yes: false,
    no: false,
  });
  const [amenities, setAmenities] = useState({
    gym: false,
    parking: false,
    garden: false,
    swimmingpool: false,
    laundryroom: false,
    aircondition: false,
    petsallowed: false,
    elevator: false,
    cctv: false,
  });

  // Handle checkbox change for furnished options
  const handleFurnishedChange = (event) => {
    const { name, checked } = event.target;
    setFurnishedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  // Handle checkbox change for amenities
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("/api/filters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          minPrice,
          maxPrice,
          minArea,
          maxArea,
          furnishedOptions,
          amenities,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Handle the response data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="2xl:flex flex-col bg-[#F7E7DC] h-fit w-full p-7 2xl:mx-5 2xl:my-10 rounded-3xl shadow-2xl 2xl:sticky top-10">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h1 className="text-xl pb-10">Filters</h1>
          <IoCloseCircleOutline
            className="2xl:hidden h-6 w-auto cursor-pointer"
            onClick={onClose}
          />
        </div>

        <p className="pt-3">Price:</p>
        <input
          className="rounded-3xl bg-[#FFF8F3] shadow-xl p-2 m-3 text-sm"
          placeholder="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          className="rounded-3xl bg-[#FFF8F3] shadow-xl p-2 m-3 text-sm"
          placeholder="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <p className="pt-3">Area:</p>
        <input
          className="rounded-3xl bg-[#FFF8F3] shadow-xl p-2 m-3 text-sm"
          placeholder="Min Area"
          type="number"
          value={minArea}
          onChange={(e) => setMinArea(e.target.value)}
        />
        <input
          className="rounded-3xl bg-[#FFF8F3] shadow-xl p-2 m-3 text-sm"
          placeholder="Max Area"
          type="number"
          value={maxArea}
          onChange={(e) => setMaxArea(e.target.value)}
        />

        <p className="pt-3">Furnished:</p>
        <div className="flex items-center space-x-2">
          <div>
            <input
              type="checkbox"
              id="furnished-yes"
              name="yes"
              checked={furnishedOptions.yes}
              onChange={handleFurnishedChange}
              className="mr-2"
            />
            <label htmlFor="furnished-yes">Yes</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="furnished-no"
              name="no"
              checked={furnishedOptions.no}
              onChange={handleFurnishedChange}
              className="mr-2"
            />
            <label htmlFor="furnished-no">No</label>
          </div>
        </div>

        <p className="pt-3">Amenities:</p>
        <div className="flex flex-col space-y-2">
          {[
            "Gym",
            "Parking",
            "Garden",
            "Swimming pool",
            "Laundry room",
            "Air condition",
            "Pets allowed",
            "Elevator",
            "CCTV",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                name={amenity.toLowerCase().replace(/ /g, "")}
                id={amenity}
                checked={amenities[amenity.toLowerCase().replace(/ /g, "")]}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label
                htmlFor={amenity.toLowerCase().replace(/ /g, "")}
                className="ml-2"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>

        <button
          className="px-5 py-2 my-10 rounded-3xl bg-[#FFF8F3] shadow-xl hover:bg-[#405D72] hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FilterSection;
