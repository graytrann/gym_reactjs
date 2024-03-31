import fetcher from "./fetcher";

// ĐĂNG KÝ
export const signup = async (payload) => {
  try {
    const response = await fetcher.post("/user/register", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

// ĐĂNG NHẬP
export const signin = async (payload) => {
  try {
    const response = await fetcher.post("/user/login", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};
