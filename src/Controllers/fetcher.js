import axios from "axios";

// Setup axios instance - tạo ra cấu hình mặc định
const fetcher = axios.create({
  baseURL: "https://gym-nodejs.onrender.com",
});

export default fetcher;
