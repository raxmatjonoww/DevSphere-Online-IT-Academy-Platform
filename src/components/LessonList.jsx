// src/components/LessonList.jsx

import { useState, useEffect } from "react";

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem("lessons")) || [];
    setLessons(storedLessons);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      {lessons.length === 0 ? (
        <p>Hozircha darslar mavjud emas.</p>
      ) : (
        <ul className="list-disc ml-6 space-y-2">
          {lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonList;
