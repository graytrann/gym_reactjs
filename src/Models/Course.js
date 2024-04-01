import { getAllCourse, getCourseById } from "../Controllers/course.js";

class Course {
  constructor(NameCourse, Price, Description, Goal) {
    this.NameCourse = NameCourse;
    this.Price = Price;
    this.Description = Description;
    this.Goal = Goal;
  }

  static async getAll() {
    // Đánh dấu phương thức là static
    try {
      const coursesData = await getAllCourse(); // Gọi hàm getAllCourse để lấy danh sách các khóa học
      const courses = coursesData.map(
        (course) => new Course(course.NameCourse, course.Price, course.Description, course.Goal)
      );
      return courses;
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      return []; // Trả về một mảng rỗng trong trường hợp có lỗi xảy ra
    }
  }

  static async getById(id) {
    try {
      const courseData = await getCourseById(id); // Gọi hàm getCourseById để lấy thông tin của khóa học có id tương ứng
      const { NameCourse, Price, Description, Goal } = courseData; // Destructuring dữ liệu trả về
      return new Course(NameCourse, Price, Description, Goal); // Trả về một đối tượng Course mới
    } catch (error) {
      console.error("Failed to fetch course by id:", error);
      return null; // Trả về null trong trường hợp có lỗi xảy ra
    }
  }
}

export default Course;
