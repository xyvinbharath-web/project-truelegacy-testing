import axiosInstance from "./axiosIntercepter";

export const getBlogs = async (filter = {}) => {
  const response = await axiosInstance.get("/pages/blogs", { params: filter });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axiosInstance.get(`/pages/blog/${id}`);
  return response.data;
};
