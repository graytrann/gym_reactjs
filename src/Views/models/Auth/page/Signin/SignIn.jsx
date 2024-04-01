import React, { useState } from "react";
import User from "../../../../../Models/User";
import formStyles from "../../components/formStyles.module.scss";
import { useNavigate } from "react-router-dom";
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
    <div className={`${formStyles.form}`}>
      <div>
        <form className={`${formStyles.form_background}`}>
          <div className={`${formStyles.form_container}`}>
            <div className={`${formStyles.form_input}`}>
              <label htmlFor="">Tài Khoản</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handleChange}
                className={`${formStyles.input_taiKhoan}`}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                className={`${formStyles.input_matKhau}`}
              />

              <button className="btn btn-success btn-lg" onClick={handleSignIn}>
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
