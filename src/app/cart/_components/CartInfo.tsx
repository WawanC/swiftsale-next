"use client";

import { useGetCartsQuery } from "@/hooks/Cart";

const CartInfo = () => {
  const getCarts = useGetCartsQuery();

  if (getCarts.isLoading)
    return (
      <div className={`flex justify-center p-4`}>
        <span className={`text-2xl font-bold`}>Loading...</span>
      </div>
    );

  return (
    getCarts.data && (
      <>
        <div className={`flex flex-col gap-4 md:gap-2 p-4 md:p-8`}>
          <span className={`text-3xl`}>Total Price :</span>
          <span className={`text-4xl font-semibold text-center`}>
            ${getCarts.data.totalPrice}
          </span>
        </div>
        <div className={`flex justify-center`}>
          <button
            className={`btn`}
            // onClick={createTransactionHandler}
            disabled={getCarts.data.totalCount <= 0}
          >
            Checkout
          </button>
        </div>
      </>
    )
  );
};

export default CartInfo;
