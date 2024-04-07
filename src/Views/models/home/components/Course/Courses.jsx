import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Container } from "@mui/material";
import Course from "../../../../../Models/Course";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import styles from "./Mystyle.module.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const coursesData = await Course.getAll();
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchData();
  }, []);

  const fetchDesCourse = async () => {
    try {
      setIsAnimating(true); // Bắt đầu animate
      const data = await Course.getDesCourse();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setIsAnimating(false); // Kết thúc animate
    }
  };
  const fetchAscCourse = async () => {
    try {
      const data = await Course.getAscCourse();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  console.log(isAnimating);
  return (
    <>
      <Container>
        <div className="flex justify-start mt-5">
          <button
            className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5 me-3"
            onClick={fetchAscCourse}
          >
            <FaSortAmountUpAlt className=" me-2" />
            TĂNG
          </button>
          <button
            className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5"
            onClick={fetchDesCourse}
          >
            <FaSortAmountDown className="me-2" />
            GIẢM
          </button>
        </div>
        <div className="grid gap-10 px-4 mt-8 mb-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard
            className={isAnimating ? styles["animate"] : ""}
            courses={courses}
          />
        </div>
      </Container>
    </>
  );
}
