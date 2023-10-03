"use client";

import { useGetCartsQuery } from "@/hooks/Cart";
import CartItem from "@/app/(navigation)/cart/_components/CartItem";
import LoadingIndicator from "@/app/_components/LoadingIndicator";

const CartList = () => {
  const getCarts = useGetCartsQuery();

  if (getCarts.isLoading)
    return (
      <div className={`flex justify-center py-8`}>
        <LoadingIndicator size={50} />
      </div>
    );

  return (
    <ul className={`flex flex-col gap-4 py-4`}>
      {getCarts.data &&
        getCarts.data.items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
    </ul>
  );
};

export default CartList;
