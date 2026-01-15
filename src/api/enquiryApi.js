import axiosInstance from "./axiosIntercepter";

export const createEnquiry = async (data) => {
  const response = await axiosInstance.post("/enquiries", data);
  return response.data;
};
