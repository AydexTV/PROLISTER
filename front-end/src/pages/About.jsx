import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar isLoggedIn = {true} activeTab = "about" />
      About
    </div>
  );
};

export default About;
