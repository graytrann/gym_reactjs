import { purchaseCourse } from "../Controllers/course.js";

class Purchase {
  constructor(DateBegin, Duration, DisCode, Total, CourseID, hasPaid) {
    this.DateBegin = DateBegin;
    this.Duration = Duration;
    this.DisCode = DisCode;
    this.Total = Total;
    this.CourseID = CourseID;
    this.hasPaid = hasPaid;
  }

  async purchase() {
    try {
      const payload = {
        DateBegin: this.DateBegin,
        Duration: this.Duration,
        DisCode: this.DisCode,
        Total: this.Total,
        CourseID: this.CourseID,
        hasPaid: this.hasPaid,
      };

      // Gọi hàm signup từ file user.js và truyền payload
      const response = await purchaseCourse(payload);

      // Xử lý response ở đây
      console.log("Đăng ký khóa học thành công:", response);
    } catch (error) {
      // Xử lý lỗi nếu có
      throw error;
    }
  }

  async purchasePayPal() {
    try {
      const payload = {
        DateBegin: this.DateBegin,
        Duration: this.Duration,
        DisCode: this.DisCode,
        Total: this.Total,
        CourseID: this.CourseID,
        hasPaid: this.hasPaid,
      };

      // Gọi hàm signup từ file user.js và truyền payload
      const response = await purchaseCourse(payload);

      // Xử lý response ở đây
      console.log("Đăng ký khóa học thành công:", response);
    } catch (error) {
      // Xử lý lỗi nếu có
      throw error;
    }
  }

  
}

export default Purchase;
