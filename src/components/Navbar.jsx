import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">DevSphere Online IT Academy</Link>
        <div className="navbar-links">
          {role ? (
            <>
              <Link to="/dashboard" className="navbar-link">Admin</Link>
              <button onClick={handleLogout} className="navbar-btn">Выйти</button>
            </>
          ) : (
            <button onClick={handleLoginClick} className="navbar-btn">Войти</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
