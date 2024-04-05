import React, { useState } from "react";
import Course from "../../../../../Models/Course";

export default function Suggest() {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "height":
        setheight(value);
        break;
      case "weight":
        setweight(value);
        break;
      default:
        break;
    }
  };
  const handleSuggest = async(event) =>{
    event.preventDefault();
    const course = new Course();
    try{
        await Course.
    }

  }
  return (
    <>
      <div>
        <div>
          <label htmlFor="">Tài Khoản</label>
          <input
            type="text"
            name="height"
            placeholder="Nhập chiều cao vào nhanh"
            // value={Height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Đừng ngại chia sẻ cân nặng bạn nhé!"
            // value={Weight}
            onChange={handleChange}
          />
          <form>
            <input type="radio" id="html" name="fav_language" value="giảm cân" />
            <label for="html">giảm cân</label>
            <br />
            <input type="radio" id="css" name="fav_language" value="tăng cân" />
            <label for="css">tăng cân</label>
            <br />
            <input type="radio" id="javascript" name="fav_language" value="duy trì sức khỏe" />
            <label for="javascript">duy trì sức khỏe</label>
          </form>
          <button className="btn btn-success btn-lg"> Button</button>
        </div>
      </div>
    </>
  );
}
