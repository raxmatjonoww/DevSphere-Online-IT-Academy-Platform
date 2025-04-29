// src/components/Dashboard.jsx

import { useNavigate } from "react-router-dom";
import AddLesson from "./AddLesson";
import LessonList from "./LessonList";

const Dashboard = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin ({role})</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {role === "admin" && <AddLesson />}
      <LessonList />
    </div>
  );
};

export default Dashboard;
