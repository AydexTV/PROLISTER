import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/listings" element={<Listings />}/>
    </Routes>
  )
}

export default App