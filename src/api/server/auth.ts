import { cookies } from "next/headers";
import { GetMeResponse } from "@/types/auth";

export const getMeApiServer = async () => {
  const accessToken = cookies().get("access_token");

  if (!accessToken) throw new Error("No access token provided");

  const response = await fetch(`${process.env.PROXY_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  if (!response.ok) {
    throw new Error("Unauthorized Access");
  }

  const data: GetMeResponse = await response.json();

  return data.user;
};
