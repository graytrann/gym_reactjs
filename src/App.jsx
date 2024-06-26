import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./Views/models/Auth/page/Signin/SignIn";
import SignUp from "./Views/models/Auth/page/Signup/SignUp";
import MainLayout from "./templates/MainLayout/MainLayout";
import Home from "./Views/models/home/page/Home";
import CoursesDetail from "./Views/models/home/components/CourseDetail/CoursesDetail";
import Courses from "./Views/models/home/components/Course/Courses";
import Suggest from "./Views/models/home/components/Suggest/Suggest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="course/get-course/:id" element={<CoursesDetail />} />
            <Route path="/suggest" element={<Suggest />} />
          </Route>
          <Route path="/login" element={<SignIn />} />

          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
