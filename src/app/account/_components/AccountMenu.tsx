"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AddIcon from "@/icons/AddIcon";
import MyProductList from "@/app/account/_components/MyProductList";
import MyTransactionList from "@/app/account/_components/MyTransactionList";

enum Menu {
  Products,
  Transactions,
}

const AccountMenu = () => {
  const searchParams = useSearchParams();

  const selectedMenu = useMemo(
    () =>
      searchParams.has("menu") && searchParams.get("menu") === "transactions"
        ? Menu.Transactions
        : Menu.Products,
    [searchParams],
  );
  return (
    <>
      <div className={`flex gap-2 md:gap-4 text-sm md:text-base`}>
        <Link
          className={`btn flex-1 bg-primary border-2 text-center ${
            selectedMenu === Menu.Products && "bg-secondary border-none"
          }`}
          href={`/account?menu=products`}
        >
          My Products
        </Link>
        <Link
          className={`btn flex-1 bg-primary border-2 text-center ${
            selectedMenu === Menu.Transactions && "bg-secondary border-none"
          }`}
          href={`/account?menu=transactions`}
        >
          My Transactions
        </Link>
      </div>

      {/*  Menu Content */}
      <div className={`flex flex-col`}>
        {/* Title Section */}
        <div className={`flex border-b-2 border-accent pb-2 items-center`}>
          <h1 className={`flex-1 text-2xl md:text-4xl font-bold`}>
            {selectedMenu === Menu.Products ? "My Products" : "My Transactions"}
          </h1>
          {selectedMenu === Menu.Products && (
            <>
              <Link href={"/create-product"} className={`md:btn`}>
                <span className={"hidden md:block"}>Create New Product</span>
                <AddIcon className={`w-8 aspect-square md:hidden`} />
              </Link>
            </>
          )}
        </div>
        {/*Content List Section*/}
        {selectedMenu === Menu.Products ? (
          <MyProductList />
        ) : (
          <MyTransactionList />
        )}
      </div>
    </>
  );
};

export default AccountMenu;
