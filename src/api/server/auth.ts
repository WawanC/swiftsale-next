import { cookies } from "next/headers";
import { GetMeResponse } from "@/types/auth";
import { apiServer } from "@/api/server/axios";

export const getMeApiServer = async () => {
  const accessToken = cookies().get("access_token");

  if (!accessToken) throw new Error("No access token provided");

  const response = await apiServer.get<GetMeResponse>("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  return response.data.user;
};
