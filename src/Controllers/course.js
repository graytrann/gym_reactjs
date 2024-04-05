import fetcher from "./fetcher";

// LẤY HẾT COURSE
export const getAllCourse = async () => {
  try {
    const response = await fetcher.get("/course/get-all-course");
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

// LẤY COURSE THEO ID
export const getCourseById = async (id) => {
  try {
    const response = await fetcher.get(`/course/get-course/${id}`);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const getDesCourse = async () => {
  try {
    const response = await fetcher.get("course/get-course-des");
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const getAscCourse = async () => {
  try {
    const response = await fetcher.get("course/get-course-asc");
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const suggestCourse = async () => {
  try {
    const responese = await fetcher.post("course/suggest-course");
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};
