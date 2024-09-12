import React from "react";
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
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import { UserContextProvider } from "../context/userContext"; // Capitalized

import axios from "axios";

// Set axios defaults for credentials
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider> {/* Capitalized */}
      <NavBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listview" element={<ListView />} />
        <Route path="/mapview" element={<MapView />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
