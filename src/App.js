import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppListPage from './pages/AppListPage'
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/apps" element={<RequireAuth><AppListPage /></RequireAuth>} />
      </Routes>
    </Router>
  );
}
const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn'); // Replace with your auth logic
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default App;