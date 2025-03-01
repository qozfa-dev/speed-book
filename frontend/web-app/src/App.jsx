import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import FlashcardTab from "./pages/FlashcardTab";
import MindmapTab from "./pages/MindmapTab";
import QuizTab from "./pages/QuizTab";
import Navbar from "./components/Navbar"; 

import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<FlashcardTab />} />
      <Route path="/mindmap" element={<MindmapTab />} />
      <Route path="/quiz" element={<QuizTab />} />
      </Routes>
      
    </>
  )
}

export default App
