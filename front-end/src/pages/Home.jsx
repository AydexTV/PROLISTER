import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import backgroundImage2 from "../assets/images/handing-over-the-house-keys-in-front-of-new-home-locksmith-denver-metro.jpg";
import backgroundImage3 from "../assets/images/A-House-Is-Only-a-House-Until-a-Family-Makes-It-a-House.jpg";
import backgroundImage4 from "../assets/images/poolday.png";
import backgroundImage5 from "../assets/images/housecontract.jpg";
import listImage from "../assets/images/list.png";
import mapImage from "../assets/images/map.png";

const Home = () => {
  const slides = [
    {
      url: backgroundImage2,
    },
    {
      url: backgroundImage,
    },
    {
      url: backgroundImage3,
    },
    {
      url: backgroundImage4,
    },
    {
      url: backgroundImage5,
    },
  ];

  return (
    <div>
      {/* <NavBar isLoggedIn={true} activeTab="home" /> */}
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="font-bold text-center text-5xl py-15">
          Welcome to ProLister
        </h1>
        <Carousel slides={slides} />

        {/* Call to Action Section */}
        <div className="flex justify-center space-x-4 mt-10">
          <Link
            to="/listings"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
          >
            Browse Listings
          </Link>
          <a
            href="https://www.linkedin.com/in/aymenajinou/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>

        {/* Key Features Section */}
        <div className="mt-16 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose ProLister?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={listImage}
                alt="List"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Wide Listings</h3>
              <p className="text-gray-600">
                Explore a variety of rental properties to find your perfect
                match.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={mapImage}
                alt="Map"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-gray-600">
                Use our interactive maps to find properties by location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/support.png"
                alt="Support"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Need help? Our support team is here to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Locations Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Popular Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Bawshar</h3>
              <p className="text-gray-600">
                Browse rentals in Bawshar, where eveything close to you.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Al Mouj</h3>
              <p className="text-gray-600">
                Find your dream home in Al Mouj, the dream city in Muscat.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Qurum</h3>
              <p className="text-gray-600">
                Discover cozy apartments in the best neighborhood by the beach.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
