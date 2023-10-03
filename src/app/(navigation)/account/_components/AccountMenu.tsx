"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AddIcon from "@/icons/AddIcon";
import MyProductList from "@/app/(navigation)/account/_components/MyProductList";
import MyTransactionList from "@/app/(navigation)/account/_components/MyTransactionList";

enum Menu {
  Products = "products",
  Transactions = "transactions",
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
          href={"/account?menu=products"}
          className={`btn flex-1 text-center ${
            selectedMenu === Menu.Products
              ? "bg-accent text-primary border-none"
              : "bg-primary text-accent border-2"
          }`}
        >
          My Products
        </Link>
        <Link
          href={"/account?menu=transactions"}
          className={`btn flex-1 text-center ${
            selectedMenu === Menu.Transactions
              ? "bg-accent text-primary border-none"
              : "bg-primary text-accent border-2"
          }`}
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
