import "./App.css";
import CourseDetail from "./Views/components/Course/CourseDetail";
import Courses from "./Views/components/Course/Courses";

import Footer from "./Views/components/Footer/Footer";
import Header from "./Views/components/Header/Header";
import SignIn from "./Views/models/Auth/SignIn";
import SignUp from "./Views/models/Auth/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <SignIn />
      <Courses />
      <CourseDetail />
      <Footer />
    </div>
  );
}

export default App;
