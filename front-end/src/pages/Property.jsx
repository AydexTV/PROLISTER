import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { LiaToiletSolid, LiaBedSolid } from "react-icons/lia";
import { TbMeterSquare } from "react-icons/tb";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import mapImage from "../assets/images/mappic.jpg";
import Footer from "../components/Footer";

const Property = () => {
  const slides = [
    {
      url: backgroundImage,
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div>
      <NavBar isLoggedIn={false} />

      {/* Top Section where the we show Tilte and photos */}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center m-10 2xl:text-4xl text-3xl">
          <div>
            <h1 className="2xl:px-10">
              Spacious villa for rent with beach view and 10 cars. New Villa
              first, Tenant
            </h1>

            <div className="flex pt-3 2xl:px-10">
              <IoLocationOutline className="2xl:h-6 h-5 w-auto" />
              <p className="px-2 2xl:text-base text-sm">Location</p>
            </div>
          </div>

          <hr className="mt-5"></hr>

          <Carousel slides={slides} />
        </div>
      </div>

      {/* Second section it will be divided to 2 parts left and right */}
      <div className="flex 2xl:flex-row flex-col bg-[#F7E7DC]">
        {/* Left part for description and map view */}
        <div className="flex flex-col items-center basis-9/12 p-4">
          {/* Box for number of Rooms, toilets, furnished or no, and etc */}
          <div className="flex justify-around items-center h-16 p-5 w-full bg-[#405D72]/40 rounded-3xl shadow-2xl">
            <div className="flex items-center">
              <LiaBedSolid className="h-7 w-auto" />
              <h1 className="ml-2">4 Rooms</h1>
            </div>
            <div className="flex items-center">
              <LiaToiletSolid className="h-7 w-auto" />
              <h1 className="ml-2">6 Toilets</h1>
            </div>
            <div className="flex items-center">
              <TbMeterSquare className="h-7 w-auto" />
              <h1 className="ml-2">600 msq</h1>
            </div>
          </div>

          {/* div for description */}
          <div className="m-10">
            <h1 className="mb-5 text-2xl">Description:</h1>
            <p>
              Escape to your personal oasis with this stunning 4-bedroom,
              3.5-bathroom villa nestled in the picturesque hills of Serene
              Hills. This luxurious rental offers unparalleled comfort and
              style, perfect for both relaxation and entertaining. Features:
              Spacious Interiors: Enjoy over 3,500 square feet of elegantly
              designed living space, featuring an open floor plan that
              seamlessly connects the living, dining, and kitchen areas. Gourmet
              Kitchen: The chef’s kitchen boasts top-of-the-line stainless steel
              appliances, a large granite island, custom cabinetry, and a
              walk-in pantry. Elegant Living Areas: The expansive living room is
              highlighted by a cozy stone fireplace and large windows that flood
              the space with natural light, offering breathtaking views of the
              surrounding hills. Master Suite: The luxurious master suite
              includes a private balcony, a spacious walk-in closet, and a
              spa-like en-suite bathroom with a soaking tub, a separate
              glass-enclosed shower, and dual vanities. Outdoor Paradise: Step
              outside to your private paradise, featuring a beautifully
              landscaped garden, a sparkling infinity pool, and a large covered
              patio with an outdoor kitchen and dining area. Perfect for hosting
              summer barbecues or simply unwinding with a glass of wine.
              Additional Amenities: The villa includes a dedicated home office,
              a media room with built-in surround sound, and a three-car garage.
              High-speed internet and a smart home system with integrated
              lighting and climate control add to the convenience and luxury.
              Neighborhood: Located in the exclusive Serene Hills community,
              this villa offers a tranquil retreat while being just a short
              drive from local shops, fine dining, and outdoor recreational
              opportunities. Residents enjoy access to private walking trails, a
              community clubhouse, and tennis courts. Availability: This
              exquisite villa is available for immediate rental. Don’t miss your
              chance to live in this exceptional home where luxury and comfort
              meet.
            </p>
          </div>

          {/* div for map view box */}
          <div className="h-96 w-full">
            <div className="flex justify-center items-center h-full w-full">
              <img
                src={mapImage}
                alt="Map View"
                className="h-full w-full object-cover m-10 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right side for landlord deatails and contact info */}
        <div className="basis-3/12 p-10 mt-10">
          <div className="flex flex-col items-center bg-[#405D72] h-96 w-full pt-10 rounded-2xl shadow-2xl">
            <div className="rounded-full h-52 w-52 bg-white shadow-inner"></div>
            <h1 className="mt-4 text-white">Adam Lakaka</h1>
            <button className="mt-5 p-2 bg-[#758694] text-white hover:bg-[#F7E7DC] hover:text-[black] rounded-3xl shadow-2xl">
              Contact Seller
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Property;
