import React, { useState } from "react";
import User from "../../../Models/User";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSignIn = async () => {
    const user = new User();
    user.constructorForSignIn(phone, password);
    try {
      await user.signIn(); // Gọi phương thức signIn từ class User
      console.log("Sign in successful!");
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <div>
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

      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
}
