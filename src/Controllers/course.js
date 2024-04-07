import fetcher from "./fetcher";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    token: localStorage.getItem("gymUser"),
    // 'content-type': 'multipart/form-data'
  },
};

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

export const suggestCourse = async (payload) => {
  try {
    const response = await fetcher.post("course/suggest-course", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const purchaseCourse = async (payload) => {
  try {
    const response = await fetcher.post("course/purchase", payload, options);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};
