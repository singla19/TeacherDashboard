import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Teacher from './pages/Teacher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/teacher" />} />
        <Route path="/teacher/*" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
