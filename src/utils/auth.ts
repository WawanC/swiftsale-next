import { getMeApiServer } from "@/api/server/auth";
import { redirect } from "next/navigation";

export const checkIsAuthServer = async () => {
  try {
    await getMeApiServer();
  } catch (e) {
    redirect("/login");
  }
};
