import React, { useEffect, useState } from "react";
import Course from "../../../../../Models/Course";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../../../../components/FormInput/FormInput";
import CourseCard from "../Course/CourseCard";

export default function Suggest() {
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  const [courses, setCourses] = useState([]);
  // const [goal, setGoal] = useState("");
  const [showCourseCard, setShowCourseCard] = useState(false);
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

  const formik = useFormik({
    initialValues: {
      height: "",
      weight: "",
      goal: "",
    },
    onSubmit: (values) => {
      handleChange(formik.values);
    },
    validationSchema: yup.object({
      height: yup.string().required("Trường này không dược để trống!"),
      weight: yup.string().required("Trường này không dược để trống!"),
    }),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value); // Cập nhật giá trị của formik
  };

  const handleSuggest = async (event) => {
    event.preventDefault();

    try {
      const { height, weight, goal } = formik.values;
      let data = { height: height, weight: weight, goal: goal };
      let coursesFromAPI = await Course.suggestCoures(data);
      setCourses(coursesFromAPI);
      setShowCourseCard(true);
    } catch (error) {
      console.log("Failed");
    }
  };
  return (
    <div className="w-full mx-auto lg:w-2/5 sm:w-4/5 mb-10">
      <form className=" px-5 py-10 shadow-2xl sm:px-20 top-28 rounded-2xl">
        <div className="text-center py-10">
          <div className=" items-center my-5  ">
            {/* <label htmlFor="height">Chiều cao</label> */}
            <h1 className="mb-12 text-4xl font-semibold">GỢI Ý KHÓA HỌC</h1>
            <FormInput
              id="height"
              type="text"
              placeholder="Nhập chiều cao vào đây"
              formik={formik}
              errors={formik.errors.height}
              touched={formik.touched.height}
              value={formik.values.height}
              onChange={handleChange}
            />
            <FormInput
              id="weight"
              type="text"
              placeholder="Nhập cân nặng vào đây"
              formik={formik}
              errors={formik.errors.weight}
              touched={formik.touched.weight}
              value={formik.values.weight}
              onChange={handleChange}
            />
            <h1 className=" mt-5 text-2xl font-semibold">Mục tiêu</h1>
            <div className="flex justify-center ">
              {/* <input
                type="radio"
                id="lose_weight"
                name="goal"
                value="giảm cân"
                checked={goal === "giảm cân"}
                
                onChange={handleChange}
                className="me-2 color-blue-500"
              /> */}
              <input
                type="radio"
                id="lose_weight"
                name="goal"
                value="giảm cân"
                checked={formik.values.goal === "giảm cân"}
                onChange={formik.handleChange}
                className="me-2"
              />
              <h1 htmlFor="lose_weight">Giảm cân</h1>
            </div>
            <div className="flex justify-center">
              {/* <input
                type="radio"
                id="gain_weight"
                name="goal"
                value="tăng cân"
                checked={goal === "tăng cân"}
                onChange={handleChange}
                className="me-2"
              /> */}
              <input
                type="radio"
                id="gain_weight"
                name="goal"
                value="tăng cân"
                checked={formik.values.goal === "tăng cân"}
                onChange={formik.handleChange}
                className="me-2"
              />
              <h1 htmlFor="gain_weight">Tăng cân</h1>
            </div>
            <div className="flex justify-center ml-[11%]">
              {/* <input
                type="radio"
                id="maintain_health"
                name="goal"
                value="duy trì sức khỏe"
                checked={goal === "duy trì sức khỏe"}
                onChange={handleChange}
                className="me-2 text-lg"
              /> */}
              <input
                type="radio"
                id="maintain_weight"
                name="goal"
                value="duy trì sức khỏe"
                checked={formik.values.goal === "duy trì sức khỏe"}
                onChange={formik.handleChange}
                className="me-2"
              />
              <h1 htmlFor="maintain_health">Duy trì sức khỏe</h1>
            </div>
            <button
              onClick={handleSuggest}
              className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5"
            >
              Check
            </button>
          </div>
        </div>
      </form>
      {showCourseCard && (
        <div className="grid gap-10 px-4 mt-8 mb-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard courses={courses} />
        </div>
      )}
    </div>
  );
}
