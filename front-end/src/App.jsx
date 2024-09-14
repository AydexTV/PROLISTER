import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Property from "./pages/Property";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import Profile from "./pages/Profile";
import PostListing from "./pages/PostListing";
import Agreement from "./pages/Agreement";
import Applications from "./pages/Applications";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import { UserContextProvider, UserContext } from "../context/userContext"; // Capitalized
import axios from "axios";
import LoggedInRoutes from "./utils/LoggedInRoutes";
import LoggedOutRoutes from "./utils/LoggedOutRoutes";

// Set axios defaults for credentials
axios.defaults.withCredentials = true;

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <UserContextProvider>
      {" "}
      {/* Capitalized */}
      <NavBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listview" element={<ListView />} />
        <Route path="/mapview" element={<MapView />} />
        <Route path="/property/:id" element={<Property />} />

        <Route element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/postlisting" element={<PostListing />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/applications" element={<Applications />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
