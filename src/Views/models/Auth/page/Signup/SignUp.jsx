import React, { useState } from "react";
import User from "../../../../../Models/User";
import background from "./../../../../../Assets/img/carousel.jpg";
import { FcHome } from "react-icons/fc";
import { MdAssignmentInd } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../../../../components/FormInput/FormInput";
export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value); // Cập nhật giá trị của formik
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignUp(formik.values);
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Trường này không dược để trống!"),
      phone: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(/^\d{10,12}$/, "Số điện thoại không hợp lệ!"),
      password: yup
        .string()
        .required("Trường này không được để trống!")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
          "Mật khẩu cần ít nhất 8 ký tự, gồm chữ, số và ký tự in hoa"
        ),
    }),
  });

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(formik.values);
    const { fullName, phone, password } = formik.values; // Bóc tách phone và password từ formik.values

    const user = new User(fullName, phone, password, 1);
    try {
      await user.signUp(); // Gọi phương thức signUp từ class User
      console.log("Sign up successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response.data?.error.message);
      console.error("Đăng ký thất bại:", error.response.data?.error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full mx-auto bg-white lg:w-2/5 sm:w-4/5 ">
        <form className=" px-5 py-10 shadow-2xl sm:px-20 top-28 rounded-2xl">
          <div className="text-center py-10">
            <div className="flex justify-between">
              <div>
                <NavLink to="/" activeClassName="active">
                  <FcHome className="text-[300%] font-bold rounded-full hover:bg-white duration-300 hover:scale-90 shadow-lg sm:mb-0" />
                </NavLink>
              </div>
              <div>
                <NavLink to="/login" activeClassName="active">
                  <MdAssignmentInd className="text-[300%] font-bold rounded-full hover:bg-white duration-300 hover:scale-90 shadow-lg sm:mb-0" />
                </NavLink>
              </div>
            </div>

            <div className=" items-center my-5  ">
              <h1 className="mb-12 text-4xl font-semibold">Đăng kí</h1>
              <FormInput
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Nhập họ và tên"
                formik={formik}
                errors={formik.errors.fullName}
                touched={formik.touched.fullName}
                value={formik.values.fullName}
                onChange={handleChange}
              />
              <FormInput
                id="phone"
                name="phone"
                type="text"
                placeholder="Nhập số điện thoại"
                formik={formik}
                errors={formik.errors.phone}
                touched={formik.touched.phone}
                value={formik.values.phone}
                onChange={handleChange}
              />
              <FormInput
                id="password"
                name="password"
                type="password"
                placeholder="Nhập số password"
                formik={formik}
                errors={formik.errors.password}
                touched={formik.touched.password}
                value={formik.values.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5"
              onClick={handleSignUp}
            >
              Đăng kí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
