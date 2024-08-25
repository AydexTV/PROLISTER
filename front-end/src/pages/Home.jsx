import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
import backgroundImage from "../assets/images/lifestyle-home-house-garden-wallpaper-preview.jpg";

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
      <NavBar isLoggedIn={false} activeTab="home" />
      <div className="flex flex-col justify-center p-10">
        <h1 className="font-bold text-center text-5xl py-15">
          Welcome to ProLister
        </h1>
        <Carousel slides={slides} />
        <SearchForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
