import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Course from "../../../Models/Course";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await Course.getAll(); // Gọi phương thức getAll từ class Course
        setCourses(allCourses);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []); // Thêm dependencies rỗng để fetchCourses chỉ được gọi một lần khi component được mount

  return (
    <div>
      <h1>List of Courses</h1>
      <div>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            NameCourse={course.NameCourse}
            Price={course.Price}
            Description={course.Description}
          />
        ))}
      </div>
    </div>
  );
}
