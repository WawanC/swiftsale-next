"use client";

import { useMemo } from "react";
import { useAuthStore } from "@/store/auth";
import { useGetProductsQuery } from "@/hooks/Product";
import MyProductItem from "@/app/account/_components/MyProductItem";

const MyProductList = () => {
  const user = useAuthStore((state) => state.user);
  const getProducts = useGetProductsQuery();

  const myProducts = useMemo(() => {
    if (!getProducts.data || !user) return [];

    return getProducts.data.filter(
      (product) => product.user.username === user.username,
    );
  }, [getProducts.data, user]);

  return (
    <ul className={`py-4 flex flex-col gap-4`}>
      {getProducts.isFetching ? (
        <div className={`flex justify-center p-4`}>
          <p className={`text-4xl font-bold`}>Loading...</p>
        </div>
      ) : (
        myProducts.map((product) => (
          <MyProductItem key={product.id} product={product} />
        ))
      )}
    </ul>
  );
};

export default MyProductList;
