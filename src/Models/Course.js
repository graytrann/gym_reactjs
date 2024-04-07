import {
  getAllCourse,
  getAscCourse,
  getCourseById,
  getDesCourse,
  suggestCourse,
} from "../Controllers/course.js";

class Course {
  constructor(ID, NameCourse, Price, Description, Goal, Image) {
    this.ID = ID;
    this.NameCourse = NameCourse;
    this.Price = Price;
    this.Description = Description;
    this.Goal = Goal;
    this.Image = Image;
  }

  static async getAll() {
    // Đánh dấu phương thức là static
    try {
      const coursesData = await getAllCourse(); // Gọi hàm getAllCourse để lấy danh sách các khóa học
      const courses = coursesData.map(
        (course) =>
          new Course(
            course.ID,
            course.NameCourse,
            course.Price,
            course.Description,
            course.Goal,
            course.Image
          )
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
      const { ID, NameCourse, Price, Description, Goal, Image } = courseData; // Destructuring dữ liệu trả về
      return new Course(ID, NameCourse, Price, Description, Goal, Image); // Trả về một đối tượng Course mới
    } catch (error) {
      console.error("Failed to fetch course by id:", error);
      return null; // Trả về null trong trường hợp có lỗi xảy ra
    }
  }

  static async getDesCourse() {
    try {
      // Truy vấn tất cả các khóa học và sắp xếp theo giá giảm dần
      const courses = await getDesCourse({
        order: [["Price", "DESC"]],
      });

      return courses;
    } catch (error) {
      throw new Error("Lỗi..");
    }
  }

  static async getAscCourse() {
    try {
      // Truy vấn tất cả các khóa học và sắp xếp theo giá tăng dần
      const courses = getAscCourse({
        order: [["Price", "ASC"]],
      });

      return courses;
    } catch (error) {
      throw new Error("Lỗi..");
    }
  }

  static async suggestCoures(info) {
    // Đánh dấu phương thức là static

    try {
      const coursesData = await suggestCourse(info); // Gọi hàm getAllCourse để lấy danh sách các khóa học
      const courses = coursesData.map(
        (course) =>
          new Course(
            course.ID,
            course.NameCourse,
            course.Price,
            course.Description,
            course.Goal,
            course.Image
          )
      );
      return courses;
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      return []; // Trả về một mảng rỗng trong trường hợp có lỗi xảy ra
    }
  }
}

export default Course;
