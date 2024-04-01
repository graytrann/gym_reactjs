import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Views/models/Auth/page/Signin/SignIn";
import SignUp from "./Views/models/Auth/page/Signup/SignUp";
import MainLayout from "./templates/MainLayout/MainLayout";
import Home from "./Views/models/home/page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* <Route path="/category/:maDanhMuc" element={<Category />} />
            <Route path="/detail/:maKhoaHoc" element={<Detail />} /> */}
          </Route>
          <Route path="/login" element={<SignIn />} />

          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* <Courses />
      <CourseDetail /> */}
    </div>
  );
}

export default App;
