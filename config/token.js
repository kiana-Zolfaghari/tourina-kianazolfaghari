import { getToken } from "@/core/utils/cookie";
import api from "./config";

const getNewToken = async () => {
  const refreshToken = getToken("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await api.post("/auth/refresh-token", { refreshToken });
    return response;
  } catch (err) {
    console.error("Token refresh error:", err);
    return null;
  }
};
export { getNewToken };
