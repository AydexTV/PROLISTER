import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar userStatus = "loggedIn" activeTab = "home" />
      Home
    </div>
  );
};

export default Home;
