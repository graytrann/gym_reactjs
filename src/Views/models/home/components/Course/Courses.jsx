import React from "react";
import CourseCard from "./CourseCard";
import { Container } from "@mui/material";
import { CaretRightOutlined } from "@ant-design/icons";
export default function Courses() {
  return (
    <>
      <div className="py-10 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mr-[81%] text-4xl font-bold uppercase sm:text-5xl">KHÓA HỌC</h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Bắt đầu hành trình nào!
          </p>
        </div>
      </div>
      <Container>
        <div className="grid gap-10 px-4 mt-8 mb-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard />
        </div>
      </Container>
    </>
  );
}
