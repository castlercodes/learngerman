// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MCQ from './components/MCQ';
import FillIn from './components/FillIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>German Vocabulary Practice</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<MCQ />} />
          <Route path="/fill-in" element={<FillIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
