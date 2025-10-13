import axios from "axios";
import { getNewToken } from "./token";
import { getToken, setToken } from "@/core/utils/cookie";

const api = axios.create({
  baseURL: "http://localhost:6500",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getToken("accessToken");

    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzNmM5OTViLTRhYzYtNGY5Zi05MjlhLTdjM2YxMGFmYTAxNyIsIm1vYmlsZSI6IjA5MjEzMjE1MDYwIiwiaWF0IjoxNzYwMjg5MTMzLCJleHAiOjE3NjAyOTI3MzN9.icnoTZKFiKolta4OoGdiB1QsPMA1zaspYEUZvtezcG8";

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    if (error.response && error.response.status === 401 && !request._retry) {
      request._retry = true;
      const newToken = await getNewToken();
      if (newToken?.response?.status === 200) {
        setToken("accessToken", newToken?.response?.data?.accessToken, 60);
        return api(request);
      }
    }
    //  else {
    //   setCookie("accessToken", "", 0);
    //   setCookie("refreshToken", "", 0);
    // }
    (error) => Promise.reject(error);
  }
);

export default api;
