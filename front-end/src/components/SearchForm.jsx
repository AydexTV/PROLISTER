import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("1");
  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const options = ["Select All", "1", "2", "3", "4", "5", "More Than 5"];

  const handleSelect = (option) => {
    setSelected((prevSelected) => {
      if (option === "Select All") {
        return prevSelected.length === options.length - 1
          ? [] // Deselect all if all are selected
          : options.slice(1); // Select all options except 'Select All'
      }
      return prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option) // Remove if already selected
        : [...prevSelected, option]; // Add if not already selected
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Navigate to the list view after form submission
    navigate("/listview");
  };

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-md bg-[#405D72]/65 py-8 px-6 rounded-3xl"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
          {/* Radio Buttons For rent or buy */}
          <div className="flex space-x-2">
            <div>
              <input
                type="radio"
                name="option"
                id="1"
                value="1"
                className="peer hidden"
                checked={selectedOption === "1"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label
                htmlFor="1"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black/70 peer-checked:font-bold peer-checked:text-white"
              >
                Rent
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id="2"
                value="2"
                className="peer hidden"
                checked={selectedOption === "2"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label
                htmlFor="2"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black/70 peer-checked:font-bold peer-checked:text-white"
              >
                Buy
              </label>
            </div>
          </div>

          {/* Search Bar for the city */}
          <div className="relative flex-grow">
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full h-12 shadow p-4 rounded-full bg-gray-200"
              placeholder="City"
            />
          </div>

          {/* Multiselect for rooms */}
          <div className="relative flex-grow">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-4 py-2 border rounded-xl text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {selected.length ? selected.join(", ") : "Rooms"}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg">
                <div className="py-1">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 ${
                        selected.includes(option) ? "bg-gray-200 font-bold" : ""
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="block w-full lg:w-20 cursor-pointer select-none rounded-xl p-2 text-center bg-[#405D72] font-bold text-white hover:bg-[#F7E7DC] hover:text-black"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
