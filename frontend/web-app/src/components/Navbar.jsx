import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">/FlashcardTab</Link></li>
        <li><Link to="/mindmap">MindmapTab</Link></li>
        <li><Link to="/quiz">QuizTab</Link></li>
      </ul>
    </nav>
  );
}