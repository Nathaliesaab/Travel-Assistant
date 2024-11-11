import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import { useEffect, useState } from 'react';
import NotFound from './pages/NotFound';

const isAdminLoggedIn = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).id === 1 : false;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(isAdminLoggedIn());

  useEffect(() => {
    setLoggedIn(isAdminLoggedIn());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/admin"
          element={
            loggedIn ? <Navigate to="/admin-dashboard" replace /> : <Admin setLoggedIn={setLoggedIn} />
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            loggedIn ? (
              <AdminDashboard setLoggedIn={setLoggedIn} />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;