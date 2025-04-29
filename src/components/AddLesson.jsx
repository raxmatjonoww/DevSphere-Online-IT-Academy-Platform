// src/components/AddLesson.jsx

import { useState } from "react";

const AddLesson = () => {
  const [lesson, setLesson] = useState("");
  
  const handleAddLesson = (e) => {
    e.preventDefault();
    if (!lesson.trim()) return;

    const existingLessons = JSON.parse(localStorage.getItem("lessons")) || [];
    const updatedLessons = [...existingLessons, lesson];

    localStorage.setItem("lessons", JSON.stringify(updatedLessons));
    setLesson("");
    window.location.reload(); // sahifani qayta yuklab lessonni ko'rsatish
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Lesson</h2>
      <form onSubmit={handleAddLesson} className="flex gap-4">
        <input
          type="text"
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
          placeholder="New lesson title..."
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddLesson;
