import React, { useState } from "react";

const RadioButton = ({ options, handleRadioButton, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleRadioButton(event.target.value); // Call the passed function with the selected value
  };

  return (
    <div className="flex items-center space-x-2">
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
          {options[0]}
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
          {options[1]}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
