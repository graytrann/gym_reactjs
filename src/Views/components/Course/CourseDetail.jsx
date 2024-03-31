import React, { useEffect, useState } from "react";
import Course from "../../../Models/Course";

export default function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState({});

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const courseId = 1; // Thay thế bằng id của khóa học bạn muốn hiển thị chi tiết
        const detail = await Course.getById(courseId); // Gọi phương thức getById từ class Course
        setCourseDetail(detail);
      } catch (error) {
        console.error("Failed to fetch course detail:", error);
      }
    };

    fetchCourseDetail();
  }, []); //

  return (
    <div>
      <h1>COURSE DETAIL</h1>
      {courseDetail && (
        <>
          <p>Name: {courseDetail.NameCourse}</p>
          <p>Price: {courseDetail.Price}</p>
          <p>Description: {courseDetail.Description}</p>
        </>
      )}
    </div>
  );
}
