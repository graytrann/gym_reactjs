import { signin, signup } from "../Controllers/auth.js";

class User {
  constructor(FullName, Phone, Password, UserType) {
    this.FullName = FullName;
    this.Phone = Phone;
    this.Password = Password;
    this.UserType = UserType;
  }
  constructorForSignIn(Phone, Password) {
    this.Phone = Phone;
    this.Password = Password;
  }

 
  async signUp() {
    try {
      const payload = {
        name: this.FullName,
        phone: this.Phone,
        password: this.Password,
      };

      // Gọi hàm signup từ file user.js và truyền payload
      const response = await signup(payload);

      // Xử lý response ở đây
      console.log("Đăng ký thành công:", response);
    } catch (error) {
      // Xử lý lỗi nếu có
      throw error;
    }
  }

  async signIn(onSuccessCallback) {
    try {
      const payload = {
        phone: this.Phone,
        password: this.Password,
      };

      // Gọi hàm signup từ file user.js và truyền payload
      const response = await signin(payload);

      // Xử lý response ở đây
      console.log("Đăng nhập thành công:", response);
      localStorage.setItem("gymUser", JSON.stringify(response));
      onSuccessCallback();
    } catch (error) {
      // Xử lý lỗi nếu có
      throw error;
    }
  }
}

// Export class User để có thể import nó từ các file khác
export default User;
