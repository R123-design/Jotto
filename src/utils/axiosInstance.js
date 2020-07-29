import axios from "axios";

const baseURL = "http://localhost:3030";

export const axiosInstance = (method) => {
  return axios.create({
    baseURL,
    method: method,
  });
};
