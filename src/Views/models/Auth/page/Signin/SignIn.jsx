import React, { useState } from "react";
import User from "../../../../../Models/User";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../../../../components/FormInput/FormInput";
import { FcHome } from "react-icons/fc";
import { MdAssignmentInd } from "react-icons/md";
import background from "./../../../../../Assets/img/carousel.jpg";
export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignIn(formik.values);
    },
    validationSchema: yup.object({
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

  const handleSignIn = async (event) => {
    event.preventDefault();
    const user = new User();
    user.constructorForSignIn(phone, password);
    try {
      await user.signIn(); // Gọi phương thức signIn từ class User
      console.log("Sign in successful!");
      navigate("/");
    } catch (error) {
      console.error("Sign in failed:", error);
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
                <NavLink to="/register" activeClassName="active">
                  <MdAssignmentInd className="text-[300%] font-bold rounded-full hover:bg-white duration-300 hover:scale-90 shadow-lg sm:mb-0" />
                </NavLink>
              </div>
            </div>

            <div className=" items-center my-5  ">
              <h1 className="mb-12 text-4xl font-semibold">Đăng nhập</h1>

              <FormInput
                id="phone"
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
                type="password"
                placeholder="Nhập số password"
                formik={formik}
                errors={formik.errors.password}
                touched={formik.touched.password}
                value={formik.values.password}
                onChange={handleChange}
              />

              <button
                className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5"
                onClick={handleSignIn}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
