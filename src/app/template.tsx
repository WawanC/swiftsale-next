import { ReactNode } from "react";
import { User } from "@/types/user";
import { getMeApiServer } from "@/api/server/auth";
import StoreInitializer from "@/store/StoreInitializer";

const Template = async ({ children }: { children: ReactNode }) => {
  let user: User | null = null;

  try {
    user = await getMeApiServer();
  } catch (e) {
    console.log("Unauthorized access");
  }

  return (
    <>
      <StoreInitializer user={user} />
      {children}
    </>
  );
};

export default Template;
