"use client";

import { useGetCartsQuery } from "@/hooks/Cart";
import CartItem from "@/app/cart/_components/CartItem";

const CartList = () => {
  const getCarts = useGetCartsQuery();

  if (getCarts.isLoading)
    return (
      <div className={`flex justify-center py-8`}>
        <p className={`text-4xl font-bold`}>Loading...</p>
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
