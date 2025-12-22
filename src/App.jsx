import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TeamDetailsPage from './TeamDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamName" element={<TeamDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;