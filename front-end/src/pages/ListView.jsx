import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import SearchForm from "../components/SearchForm";
import RadioButton from "../components/RadioButton";
import { IoFilterOutline } from "react-icons/io5";

const ListView = () => {
  const navigate = useNavigate();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setIsFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const handleRadioButton = (option) => {
    if (option === "2") { // Assuming "List" corresponds to the second option with value "2"
      navigate("/mapview");
    }
  };

  return (
    <div>
      <NavBar isLoggedIn={false} activeTab="listings" />

      <div className="flex justify-center my-10">
        <RadioButton options={["List", "Map"]} handleRadioButton={handleRadioButton} defaultOption={"1"} />
      </div>

      <div className="flex justify-center">
        
        <div className="2xl:block w-1/6 hidden">
          <FilterSection />
        </div>

        {/* Modal Filter Section */}
        {isFilterOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="flex justify-center items-center w-full max-w-md mx-auto p-4 m-5">
              <div className="bg-white rounded-3xl w-full max-h-[90vh] overflow-auto">
                <FilterSection onClose={handleCloseFilter} />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center w-4/6 m-10">
          <h1 className="text-2xl mb-2">Showing Results in Muscat</h1>

          <div
            className="2xl:hidden flex justify-center content-center text-base px-5 py-2 my-1 rounded-3xl bg-[#F7E7DC] shadow-xl hover:bg-[#405D72] hover:text-white cursor-pointer"
            onClick={handleOpenFilter}
          >
            <IoFilterOutline />
            <h1 className="px-4">Filter</h1>
          </div>

          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>

        <div className="2xl:block w-1/6 hidden"></div>
      </div>

      <Footer />
    </div>
  );
};

export default ListView;
