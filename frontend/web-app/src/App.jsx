import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Slots from "./pages/Slots";
import Navbar from "./components/Navbar"; 

import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/slots" element={<Slots />} />
      </Routes>
      
    </>
  )
}

export default App
