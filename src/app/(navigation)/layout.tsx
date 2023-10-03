import { ReactNode } from "react";
import NavBar from "@/app/_components/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
