import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import MapBox from "../components/MapBox";
import RadioButton from "../components/RadioButton";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import Footer from "../components/Footer";

const MapView = () => {
  const navigate = useNavigate();

  const markers = [
    {
      coordinates: [23.625063, 58.489027],
      popUpTitle: "House for sale",
      popUpPrice: 1600,
      popUpImage: backgroundImage,
    },
    {
      coordinates: [23.592885, 58.421076],
      popUpTitle: "1 House for sale",
      popUpPrice: 1600,
      popUpImage: backgroundImage,
    },
    {
      coordinates: [23.638111, 58.128883],
      popUpTitle: "2 House for sale",
      popUpPrice: 1600,
      popUpImage: backgroundImage,
    },
  ];

  const handleRadioButton = (option) => {
    if (option === "1") { // Assuming "List" corresponds to the second option with value "2"
      navigate("/listview");
    }
  };

  return (
    <div>
      <NavBar isLoggedIn={false} activeTab="listings" />
      <div className="flex justify-center my-10">
        <RadioButton options={["List", "Map"]} handleRadioButton={handleRadioButton} defaultOption={"2"} />
      </div>
      <div className="flex flex-col justify-center items-center sm:h-[700px] h-96 sm:m-20 mx-2 mt-20 mb-36">
        <h1 className="text-xl mb-4 text-center">Showing Results in Muscat</h1>
        <MapBox markers={markers} />
      </div>
      <Footer />
    </div>
  );
};

export default MapView;
