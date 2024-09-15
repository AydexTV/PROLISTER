import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import MapBox from "../components/MapBox";
import RadioButton from "../components/RadioButton";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import Footer from "../components/Footer";
import axios from "axios";

const MapView = () => {
  const navigate = useNavigate();
  const [markers, setMarkers] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/properties`);
        const properties = response.data;

        // Map properties to markers
        const markersData = properties.map((property) => ({
          coordinates: [property.location.coordinates[0], property.location.coordinates[1]],
          popUpTitle: property.title,
          popUpPrice: property.price,
          popUpImage: `${backendUrl}/${property.images[0].replace(/\\/g, "/")}`,
        }));

        setMarkers(markersData);
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleRadioButton = (option) => {
    if (option === "1") { // Assuming "List" corresponds to the second option with value "2"
      navigate("/listview");
    }
  };

  return (
    <div>
      {/* <NavBar isLoggedIn={false} activeTab="listings" /> */}
      <div className="flex justify-center my-10">
        <RadioButton options={["List", "Map"]} handleRadioButton={handleRadioButton} defaultOption={"2"} />
      </div>
      <div className="flex flex-col justify-center items-center sm:h-[700px] h-96 sm:m-20 mx-2 mt-20 mb-36">
      <h1 className="text-2xl mb-2">Showing Results</h1>
        <MapBox markers={markers} />
      </div>
      <Footer />
    </div>
  );
};

export default MapView;
