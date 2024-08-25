import React, { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2"> {/* Added spacing between items */}
      <div>
        <input
          type="radio"
          name="option"
          id="1"
          value="1"
          className="peer hidden"
          checked={selectedOption === "1"}
          onChange={handleChange}
        />
        <label
          htmlFor="1"
          className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#405D72] peer-checked:font-bold peer-checked:text-white"
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
          onChange={handleChange}
        />
        <label
          htmlFor="2"
          className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#405D72] peer-checked:font-bold peer-checked:text-white"
        >
          Buy
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
