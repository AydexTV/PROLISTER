import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Property from './pages/Property'
import MapView from './pages/MapView'
import ListView from './pages/ListView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/listings" element={<Listings />}/>
      <Route path="/listview" element={<ListView />}/>
      <Route path="/mapview" element={<MapView />}/>
      <Route path="/property" element={<Property />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default App