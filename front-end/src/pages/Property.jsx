import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import { IoLocationOutline } from "react-icons/io5";
import { LiaToiletSolid, LiaBedSolid } from "react-icons/lia";
import { TbMeterSquare } from "react-icons/tb";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import MapBox from "../components/MapBox";
import pfp from "../assets/images/pfp.jpg";
import { UserContext } from "../../context/userContext";

const Property = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.log("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const {
    title,
    location,
    images,
    description,
    price,
    rooms,
    bathrooms,
    area,
    landlord,
    landlordId,
  } = property;

  const coordinates = location?.coordinates || [0, 0];

  const slides =
    images.length > 0
      ? images.map((imgUrl) => ({
          url: imgUrl, // Use the direct Cloudinary URL
        }))
      : [{ url: backgroundImage }];

  const marker = [
    {
      coordinates,
      popUpTitle: title,
      popUpPrice: price,
      popUpImage: images[0], // Directly using Cloudinary image URL
    },
  ];

  return (
    <div>
      {/* <NavBar isLoggedIn={false} /> */}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center m-10 2xl:text-4xl text-3xl">
          <div>
            <h1 className="2xl:px-10">{title}</h1>
            <div className="flex pt-3 2xl:px-10">
              <IoLocationOutline className="2xl:h-6 h-5 w-auto" />
              <p className="px-2 2xl:text-base text-sm">
                {location.city}, {location.country}
              </p>
            </div>
            <h1 className="text-right text-base 2xl:text-[25px]">
              {price} R.O/Month
            </h1>
          </div>
          <hr className="mt-5"></hr>
          <Carousel slides={slides} />
        </div>
      </div>

      {/* Second section divided into left and right parts */}
      <div className="flex 2xl:flex-row flex-col bg-[#F7E7DC] py-7">
        {/* Left part for description and map view */}
        <div className="flex flex-col items-center basis-9/12 p-3">
          <div className="flex justify-around items-center h-16 p-2 w-full bg-[#405D72]/40 rounded-3xl shadow-2xl">
            <div className="flex items-center">
              <LiaBedSolid className="h-7 w-auto" />
              <h1 className="ml-2">{rooms} Rooms</h1>
            </div>
            <div className="flex items-center">
              <LiaToiletSolid className="h-7 w-auto" />
              <h1 className="ml-2">{bathrooms} Bathrooms</h1>
            </div>
            <div className="flex items-center">
              <TbMeterSquare className="h-7 w-auto" />
              <h1 className="ml-2">{area} msq</h1>
            </div>
          </div>
          <div className="flex flex-col m-10">
            <h1 className="mb-5 text-2xl">Description:</h1>
            <p>{description}</p>
          </div>
          <div className="h-96 w-full">
            <div className="flex justify-center items-center h-full w-full">
              <MapBox markers={marker} />
            </div>
          </div>
        </div>

        {/* Right side for landlord details and contact info */}
        <div className="basis-3/12 p-10 mt-10">
          <div className="flex flex-col items-center bg-[#405D72] h-96 w-full pt-10 rounded-2xl shadow-2xl">
            <div
              className="rounded-full h-52 w-52 shadow-inner"
              style={{
                backgroundImage: `url(${pfp})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>{" "}
            <h1 className="mt-4 text-white">{landlord}</h1>
            <a
              className="mt-5 p-2 bg-[#758694] text-white hover:bg-[#F7E7DC] hover:text-[black] rounded-3xl shadow-2xl cursor-pointer"
              onClick={() =>
                navigate("/agreement", {
                  state: { propertyId: id, propertyTitle: title, landlordId },
                })
              }
            >
              Apply
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
