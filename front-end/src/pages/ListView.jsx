import React, { useState, useEffect } from "react";
import FilterSection from "../components/FilterSection";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import SearchForm from "../components/SearchForm";
import RadioButton from "../components/RadioButton";
import { IoFilterOutline } from "react-icons/io5";
import axios from "axios";

const ListView = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/properties`);
        setProperties(response.data);
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

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

  const reversedProperties = [...properties].reverse();

  return (
    <div>
      {/* <NavBar isLoggedIn={false} activeTab="listings" /> */}

      <div className="flex justify-center my-10">
        <RadioButton options={["List", "Map"]} handleRadioButton={handleRadioButton} defaultOption={"1"} />
      </div>

      <div className="flex justify-center">
        
      <div className="2xl:block w-1/6 hidden"></div>


        <div className="flex flex-col items-center w-4/6 m-10">
          <h1 className="text-2xl mb-2">Showing Results</h1>

          {reversedProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}

        </div>

        <div className="2xl:block w-1/6 hidden"></div>
      </div>

      <Footer />
    </div>
  );
};

export default ListView;
