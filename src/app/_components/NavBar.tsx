"use client";

import { useCallback, useEffect, useState } from "react";
import CartIcon from "@/icons/CartIcon";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import SearchBar from "@/app/_components/SearchBar";
import { useMediaQuery } from "react-responsive";
import AccountIcon from "@/icons/AccountIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import { useGetMeQuery, useLogoutMutation } from "@/hooks/Auth";
import { useGetCartsQuery } from "@/hooks/Cart";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const router = useRouter();

  const user = useGetMeQuery();
  const logout = useLogoutMutation();

  const getCarts = useGetCartsQuery();

  const openSideMenu = useCallback(
    () => !isSideMenuOpen && setIsSideMenuOpen(true),
    [isSideMenuOpen, setIsSideMenuOpen],
  );

  const closeSideMenu = useCallback(
    () => isSideMenuOpen && setIsSideMenuOpen(false),
    [isSideMenuOpen, setIsSideMenuOpen],
  );

  const logoutHandler = useCallback(() => logout.mutate(), [logout]);

  useEffect(() => {
    if (!isMobile) setIsSearchMode(false);
  }, [isMobile]);

  return (
    <nav
      className={`px-16 py-2 bg-accent text-primary 
      flex items-center justify-center relative`}
    >
      {/* Side Menu Button Icon */}
      <button className={`absolute left-4 md:hidden`} onClick={openSideMenu}>
        <MenuIcon className={"w-8 aspect-square"} />
      </button>

      {/* Cart Button Icon (Mobile) */}
      <Link href={"/cart"} className={`absolute right-4 md:hidden`}>
        {getCarts.data && (
          <div
            className={`w-6 aspect-square absolute -top-2 -right-2 
                  bg-primary rounded-full text-accent
                  flex justify-center items-center text-sm`}
          >
            {getCarts.data.totalCount}
          </div>
        )}
        <CartIcon className={"w-8 h-8 stroke-primary hover:stroke-primary"} />
      </Link>

      {/* App Logo */}
      <Link
        href={"/"}
        className={`${isSearchMode && "hidden"}
        flex items-center gap-1`}
      >
        <Image
          src={"/AppLogo_Dark.svg"}
          alt={"app_logo"}
          width={30}
          height={30}
          className={"mb-2 hidden md:block"}
        />
        <span className={`text-xl md:text-2xl font-bold`}>SwiftSale</span>
      </Link>

      {/* Search Bar */}
      <div
        className={`flex-1 ${
          isSearchMode ? "flex justify-center [&>*]:min-w-full px-4" : "hidden"
        } md:flex justify-center`}
      >
        <SearchBar />
      </div>

      {/* Side Menu Backdrop Element */}
      {isSideMenuOpen && (
        <div
          className={`fixed md:hidden inset-0 bg-black opacity-50 z-10`}
          onClick={closeSideMenu}
        />
      )}
      {/* Actions Menu */}
      <ul
        className={`text-xl text-center 
        md:flex md:static md:flex-row md:w-auto md:h-fit md:py-4
        ${
          isSideMenuOpen ? "flex" : "hidden"
        } bg-accent left-0 top-0 bottom-0 z-20
        fixed flex-col gap-8 w-[50%] px-8 py-32 h-screen`}
      >
        {/* Home icon for mobile side navbar */}
        <Link
          href={"/"}
          className={`text-2xl font-bold md:hidden pb-8 
          flex flex-col items-center gap-4`}
          onClick={() => {
            closeSideMenu();
            setIsSearchMode(false);
          }}
        >
          <Image
            src={"/AppLogo_Dark.svg"}
            alt={"app_logo"}
            width={75}
            height={75}
          />
          <span>SwiftSale</span>
        </Link>

        {/* Search icon for mobile side navbar */}
        <button
          className={"md:hidden"}
          onClick={() => {
            setIsSideMenuOpen(false);
            setIsSearchMode(true);
            router.push("/");
          }}
        >
          Search
        </button>

        <Link href={"/test"}>Test1</Link>
        <Link href={"/test"} onClick={closeSideMenu}>
          Test2
        </Link>

        {user.isFetching ? (
          <span>Loading...</span>
        ) : !user.data ? (
          <>
            <Link
              href={"/login"}
              className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}
              onClick={closeSideMenu}
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}
              onClick={closeSideMenu}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <div className={`flex flex-col md:flex-row gap-4`}>
              <Link href={"/account"} onClick={closeSideMenu}>
                <span className={`md:hidden`}>My Account</span>
                <AccountIcon
                  className={
                    "w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block"
                  }
                />
              </Link>
              <Link
                href={"/cart"}
                className={`relative hidden md:block`}
                onClick={closeSideMenu}
              >
                {getCarts.data && getCarts.data.totalCount > 0 && (
                  <div
                    className={`w-6 aspect-square absolute -top-2 -right-2 
                        bg-primary rounded-full text-accent
                        flex justify-center items-center text-sm`}
                  >
                    {getCarts.data.totalCount}
                  </div>
                )}
                <span className={`md:hidden`}>My Cart</span>
                <CartIcon
                  className={
                    "w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block"
                  }
                />
              </Link>
            </div>
            <div
              className={"w-1 h-8 border-r-2 border-secondary hidden md:block"}
            />
            <button onClick={logoutHandler}>
              <span className={`md:hidden`}>Logout</span>
              <LogoutIcon
                className={`w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block`}
              />
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
