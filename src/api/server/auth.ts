import axios from "axios";
import { cookies } from "next/headers";
import { GetMeResponse } from "@/types/auth";

const api = axios.create({
  baseURL: `${process.env.PROXY_URL}/api/auth`,
});

export const getMeApiServer = async () => {
  const accessToken = cookies().get("access_token");

  if (!accessToken) throw new Error("No access token provided");

  const response = await api.get<GetMeResponse>("/me", {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  return response.data.user;
};
