import React, { useState } from 'react';

const Multiselect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const options = [
    'Select All',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '7+'
  ];

  const handleSelect = (option) => {
    setSelected((prevSelected) => {
      if (option === 'Select All') {
        return prevSelected.length === options.length - 1
          ? [] // Deselect all if all are selected
          : options.slice(1); // Select all options except 'Select All'
      }
      return prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option) // Remove if already selected
        : [...prevSelected, option]; // Add if not already selected
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border rounded-xl text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selected.length ? selected.join(', ') : 'Rooms'}
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
        <div className="absolute right-0 z-10 mt-2 w-56 bg-white border border-gray-300 rounded-xl shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                type="button" // Ensure button does not submit a form
                onClick={() => handleSelect(option)}
                className={`block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 ${
                  selected.includes(option) ? 'bg-gray-200 font-bold' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Multiselect;
