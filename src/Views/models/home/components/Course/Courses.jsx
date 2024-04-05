import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Container } from "@mui/material";
import { CaretRightOutlined } from "@ant-design/icons";
import {
  getAllCourse,
  getAscCourse,
  getDesCourse,
} from "../../../../../Controllers/course";
export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const coursesData = await getAllCourse();
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchData();
  }, []);

  const fetchDesCourse = async () => {
    try {
      const data = await getDesCourse();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  const fetchAscCourse = async () => {
    try {
      const data = await getAscCourse();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  return (
    <>
      <div className="py-10 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mr-[81%] text-4xl font-bold uppercase sm:text-5xl">
            KHÓA HỌC
          </h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Bắt đầu hành trình nào!
          </p>
        </div>
      </div>
      <Container>
        <div>
          <button onClick={fetchAscCourse}>TĂNG</button>
          <button onClick={fetchDesCourse}>GIẢM</button>
        </div>
        <div className="grid gap-10 px-4 mt-8 mb-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard courses={courses} />
        </div>
      </Container>
    </>
  );
}
