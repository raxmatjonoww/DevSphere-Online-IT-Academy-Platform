import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const role = localStorage.getItem("role");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={role ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
