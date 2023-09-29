"use client";

import { useCallback, useEffect, useState } from "react";
import CartIcon from "@/icons/CartIcon";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import SearchBar from "@/app/_components/SearchBar";
import { useMediaQuery } from "react-responsive";
import AccountIcon from "@/icons/AccountIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import { useLogoutMutation } from "@/hooks/Auth";
import { useAuthStore } from "@/app/store/auth";

const NavBar = () => {
  // const getMe = useGetMe();
  // const logout = useLogout();
  // const getCarts = useGetCarts();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const user = useAuthStore((state) => state.user);
  const logout = useLogoutMutation();

  const openSideMenu = useCallback(
    () => setIsSideMenuOpen(true),
    [setIsSideMenuOpen],
  );

  const closeSideMenu = useCallback(
    () => setIsSideMenuOpen(false),
    [setIsSideMenuOpen],
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
        <div
          className={`w-6 aspect-square absolute -top-2 -right-2 
                  bg-primary rounded-full text-accent
                  flex justify-center items-center text-sm`}
        >
          {/*{getCarts.totalCount}*/}
        </div>
        <CartIcon className={"w-8 h-8 stroke-primary hover:stroke-primary"} />
      </Link>

      {/* App Logo */}
      <Link
        href={"/"}
        className={`text-2xl font-bold ${isSearchMode && "hidden"}`}
      >
        SwiftSale
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
        <button
          className={"md:hidden"}
          onClick={() => {
            setIsSideMenuOpen(false);
            setIsSearchMode(true);
          }}
        >
          Search
        </button>

        {user === null ? (
          <>
            <Link
              href={"/login"}
              className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <div className={`flex flex-col md:flex-row gap-4`}>
              <Link href={"/account"}>
                <span className={`md:hidden`}>My Account</span>
                <AccountIcon
                  className={
                    "w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block"
                  }
                />
              </Link>
              <Link href={"/cart"} className={`relative hidden md:block`}>
                {/*{getCarts.totalCount > 0 && (*/}
                {/*  <div*/}
                {/*    className={`w-6 aspect-square absolute -top-2 -right-2 */}
                {/*        bg-primary rounded-full text-accent*/}
                {/*        flex justify-center items-center text-sm`}*/}
                {/*  >*/}
                {/*    {getCarts.totalCount}*/}
                {/*  </div>*/}
                {/*)}*/}
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

        {/*{!getMe.data.userId ? (*/}
        {/*  <>*/}
        {/*    <Link*/}
        {/*      to={"/login"}*/}
        {/*      className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}*/}
        {/*    >*/}
        {/*      Login*/}
        {/*    </Link>*/}
        {/*    <Link*/}
        {/*      to={"/register"}*/}
        {/*      className={`text-secondary underline-offset-8 hover:text-primary hover:underline`}*/}
        {/*    >*/}
        {/*      Register*/}
        {/*    </Link>*/}
        {/*  </>*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*    <div className={`flex flex-col md:flex-row gap-4`}>*/}
        {/*      <Link to={"/account"}>*/}
        {/*        <span className={`md:hidden`}>My Account</span>*/}
        {/*        <AccountIcon*/}
        {/*          className={*/}
        {/*            "w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block"*/}
        {/*          }*/}
        {/*        />*/}
        {/*      </Link>*/}
        {/*      <Link to={"/cart"} className={`relative hidden md:block`}>*/}
        {/*        {getCarts.totalCount > 0 && (*/}
        {/*          <div*/}
        {/*            className={`w-6 aspect-square absolute -top-2 -right-2 */}
        {/*          bg-primary rounded-full text-accent*/}
        {/*          flex justify-center items-center text-sm`}*/}
        {/*          >*/}
        {/*            {getCarts.totalCount}*/}
        {/*          </div>*/}
        {/*        )}*/}
        {/*        <span className={`md:hidden`}>My Cart</span>*/}
        {/*        <CartIcon*/}
        {/*          className={*/}
        {/*            "w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block"*/}
        {/*          }*/}
        {/*        />*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*      className={"w-1 h-8 border-r-2 border-secondary hidden md:block"}*/}
        {/*    />*/}
        {/*    <button onClick={() => logout.mutate()}>*/}
        {/*      <span className={`md:hidden`}>Logout</span>*/}
        {/*      <LogoutIcon*/}
        {/*        className={`w-8 h-8 stroke-secondary hover:stroke-primary hidden md:block`}*/}
        {/*      />*/}
        {/*    </button>*/}
        {/*  </>*/}
        {/*)}*/}
      </ul>
    </nav>
  );
};

export default NavBar;
