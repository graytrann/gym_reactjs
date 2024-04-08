import React from "react";
import Carousel from "../components/Carousel";

import Courses from "../components/Course/Courses";
import Suggest from "../components/Suggest/Suggest";

export default function Home() {
  const gymuser = localStorage.getItem("gymUser");
  const currentuser = gymuser;

  // Kiểm tra giá trị của currentuser
  if (!currentuser) {
    window.location.href = "localhost:3000/login";
  }
  return (
    <div>
      <Carousel />
      <Courses />
      <Suggest />
    </div>
  );
}
