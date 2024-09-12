import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";
import listImage from "../assets/images/list.png";
import mapImage from "../assets/images/map.png";

const Home = () => {
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
      {/* <NavBar isLoggedIn={true} activeTab="home" /> */}
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="font-bold text-center text-5xl py-15">
          Welcome to ProLister
        </h1>
        <Carousel slides={slides} />
        <div className="relative flex flex-col justify-center items-center w-4/6 m-10 z-10">
          <Link className="flex flex-col justify-center items-center h-96 w-96 bg-[#405D72] hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-5" to="/listview">
          <img className="h-72 w-auto" src={listImage} alt="listview" />
          <h1 className="text-[30px]">Tenants</h1>
          </Link>
          <Link className="flex flex-col justify-center items-center h-96 w-96 bg-[#405D72] hover:bg-[#F7E7DC]/90 rounded-3xl shadow-2xl m-5" to="/mapview">
          <img className="h-72 w-auto" src={mapImage} alt="mapview" />
          <h1 className="text-[30px]">Landlords</h1>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
