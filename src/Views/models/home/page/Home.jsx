import React from "react";
import Carousel from "../components/Carousel";

import Courses from "../components/Course/Courses";

export default function Home() {
  const gymuser = localStorage.getItem("gymUser");
  const currentuser = gymuser;

  // Kiểm tra giá trị của currentuser
  console.log("Giá trị của currentuser:", currentuser);
  if (!currentuser) {
    window.location.href = "localhost:3000/login";
  }
  return (
    <div>
      <Carousel />
      <Courses />
      {/* <CoursesDetail /> */}
    </div>
  );
}
