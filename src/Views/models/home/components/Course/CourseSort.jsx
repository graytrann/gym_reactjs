/**
 * The `CourseSort` component fetches and displays a list of courses in descending order.
 * @returns The `CourseSort` component is being returned. It consists of a button with an `onClick`
 * event handler that calls a function `fetchDesCourse` (which is not defined in the provided code
 * snippet) and a placeholder for displaying data from the `courses` state. The `useEffect` hook is
 * used to fetch data from the `getDesCourse` function when the component mounts.
 */
// import React, { useEffect } from "react";
// import { getDesCourse, getCourseById } from "../../../../../Controllers/course";
// const CourseSort = () => {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getDesCourse(); // Gọi hàm getDesCourse từ file api.js
//         setCourses(data); // Cập nhật state courses với dữ liệu nhận được từ API
//       } catch (error) {
//         console.error("Failed to fetch courses:", error);
//       }
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <button onClick={fetchDesCourse}>Sắp xếp giảm dần</button>
//       {/* Hiển thị dữ liệu từ state courses */}
//     </div>
//   );
// };
// export default CourseSort;
