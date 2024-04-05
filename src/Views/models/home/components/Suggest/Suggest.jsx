import React, { useState } from "react";
import Course from "../../../../../Models/Course";

export default function Suggest() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [courses, setCourses] = useState("");
  const [goal, setGoal] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "goal": // Thêm trường hợp cho mục tiêu
        setGoal(value);
        break;
      default:
        break;
    }
  };

  const handleSuggest = async (event) => {
    event.preventDefault();
    try {
      let data = { height: height, weight: weight, goal: goal };
      let coursesFromAPI = await Course.suggestCoures(data);
      setCourses(coursesFromAPI);
      console.log(courses);
    } catch (error) {
      console.log("Failed");
    }
  };
  return (
    <form>
      <label htmlFor="height">Chiều cao</label>
      <input
        type="text"
        name="height"
        placeholder="Nhập chiều cao vào đây"
        value={height}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="weight">Cân nặng</label>
      <input
        type="text"
        name="weight"
        placeholder="Nhập cân nặng vào đây"
        value={weight}
        onChange={handleChange}
      />
      <br />
      <label>Mục tiêu</label>
      <input
        type="radio"
        id="lose_weight"
        name="goal"
        value="giảm cân"
        checked={goal === "giảm cân"}
        onChange={handleChange}
      />
      <label htmlFor="lose_weight">Giảm cân</label>
      <br />
      <input
        type="radio"
        id="gain_weight"
        name="goal"
        value="tăng cân"
        checked={goal === "tăng cân"}
        onChange={handleChange}
      />
      <label htmlFor="gain_weight">Tăng cân</label>
      <br />
      <input
        type="radio"
        id="maintain_health"
        name="goal"
        value="duy trì sức khỏe"
        checked={goal === "duy trì sức khỏe"}
        onChange={handleChange}
      />
      <label htmlFor="maintain_health">Duy trì sức khỏe</label>
      <br />
      <button onClick={handleSuggest} className="btn btn-success btn-lg">
        Button
      </button>
    </form>
  );
}
