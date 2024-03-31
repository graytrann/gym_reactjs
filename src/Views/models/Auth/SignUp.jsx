import React, { useState } from "react";
import User from "../../../Models/User";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
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

  const handleSignUp = async () => {
    const user = new User(fullName, phone, password, 1);
    try {
      await user.signUp(); // Gọi phương thức signUp từ class User
      console.log("Sign up successful!");
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
