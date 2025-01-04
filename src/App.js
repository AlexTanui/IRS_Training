import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Features from './componets/Features';
import TrainingNav from './componets/TrainingNav';
import Footer from './componets/Footer';
import Login from './componets/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check login state from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Persist login state
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Route: Training */}
        <Route
          path="/training"
          element={
            isLoggedIn ? <TrainingNav /> : <Navigate to="/login" replace />
          }
        />

        {/* Protected Route: Features */}
        <Route
          path="/features"
          element={
            isLoggedIn ? <Features /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
