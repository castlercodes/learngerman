// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MCQ from './components/MCQ';
import Progress from './components/Progress';
import AdjectiveOpposites from './components/AdjectiveOpposites'; // Import the Opposites Component
import FillIn from './components/FillIn';
import NounGender from './components/NounGender'; // Import the NounGender Component

function App() {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<MCQ />} />
          <Route path="/fill-in" element={<FillIn />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/opposites" element={<AdjectiveOpposites />} />
          <Route path="/noun-gender" element={<NounGender />} /> {/* Add this new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
