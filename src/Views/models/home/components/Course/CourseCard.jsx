import React from "react";
import { Divider } from "@mui/material";

import { FcAlarmClock } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { BellOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const CourseCard = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <div
          key={index}
          className="duration-300 shadow-md hover:shadow-xl group"
        >
          <NavLink
            to={`course/get-course/${course.ID}`}
            activeClassName="active"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={course.Image}
                  alt="Ảnh bìa khóa học"
                  className="object-cover w-full aspect-[3/2] group-hover:scale-110 duration-300"
                />
              </div>

              <span className="`absolute mr-80 bottom-0 left-0 px-3 py-1 bg-teal-500 text-white translate-y-[50%] shadow-lg ${}`">
                {course.NameCourse}
              </span>
            </div>
            <div className="p-2 font-medium duration-500 line-clamp-2 hover:text-orange-400">
              {course.Description}

              <div className="flex flex-wrap items-center justify-between pt-3 text-gray-500">
                <p>
                  <FcAlarmClock className="text-red-400 me-2" />
                  <>3 giờ</>
                </p>
                <p></p>
                <p>
                  <IoEyeSharp className="text-blue-500 me-2" />
                  <>{course.Goal}</>
                </p>
              </div>
            </div>
            <Divider className="m-0" />
            <div className="flex flex-wrap items-center justify-between px-5 py-3">
              <div className="flex items-center">
                <img
                  src="./home_carousel_03.jpg"
                  alt="User"
                  className="object-cover w-10 me-2"
                />
                <span className="text-xs text-gray-500 sm:text-base">
                  TrUnG
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <BellOutlined
                    id="sale-off"
                    className="text-[#e55039] sm:text-base me-1 text-sm"
                  />
                  <p className="text-sm font-medium sm:text-lg">
                    {course.Price}
                    <sup>đ</sup>
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default CourseCard;
