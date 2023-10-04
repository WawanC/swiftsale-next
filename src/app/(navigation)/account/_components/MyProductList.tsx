"use client";

import { useMemo } from "react";
import { useGetProductsQuery } from "@/hooks/Product";
import MyProductItem from "@/app/(navigation)/account/_components/MyProductItem";
import LoadingIndicator from "@/app/_components/LoadingIndicator";
import { useGetMeQuery } from "@/hooks/Auth";

const MyProductList = () => {
  const user = useGetMeQuery();
  const getProducts = useGetProductsQuery();

  const myProducts = useMemo(() => {
    if (!getProducts.data || !user) return [];

    return getProducts.data.filter(
      (product) => product.user.username === user.data?.username,
    );
  }, [getProducts.data, user]);

  if (getProducts.isFetching)
    return (
      <div className={`flex justify-center py-8`}>
        <LoadingIndicator size={50} />
      </div>
    );

  return (
    <ul className={`py-4 flex flex-col gap-4`}>
      {myProducts.map((product) => (
        <MyProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default MyProductList;
