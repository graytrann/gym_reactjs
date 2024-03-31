import React from "react";

export default function CourseItem({ NameCourse, Price, Description }) {
  return (
    <div>
      <p>Course Item</p>
      <h2>{NameCourse}</h2>
      <p>Price: ${Price}</p>
      <p>Description: {Description}</p>
      
    </div>
  );
}
