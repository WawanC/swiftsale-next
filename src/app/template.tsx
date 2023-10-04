import { ReactNode } from "react";
import StoreInitializer from "@/store/StoreInitializer";

const Template = ({ children }: { children: ReactNode }) => {
  return <StoreInitializer>{children}</StoreInitializer>;
};

export default Template;
