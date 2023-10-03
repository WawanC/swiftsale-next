"use client";

import { useGetCartsQuery } from "@/hooks/Cart";
import { useCreateTransactionMutation } from "@/hooks/Transaction";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import LoadingIndicator from "@/app/_components/LoadingIndicator";

const CartInfo = () => {
  const getCarts = useGetCartsQuery();
  const createTransaction = useCreateTransactionMutation();
  const router = useRouter();

  const createTransactionHandler = useCallback(async () => {
    await createTransaction.mutateAsync();
    router.push("/account?menu=transactions");
  }, [createTransaction, router]);

  useEffect(() => {
    router.prefetch("/account?menu=transactions", { kind: PrefetchKind.FULL });
  }, [router]);

  if (getCarts.isLoading)
    return (
      <div className={`flex justify-center py-8`}>
        <LoadingIndicator size={50} />
      </div>
    );

  return (
    getCarts.data && (
      <>
        <div className={`flex flex-col gap-4 md:gap-8 p-4 md:p-8`}>
          <span className={`text-3xl`}>Total Price :</span>
          <span className={`text-4xl font-semibold text-center`}>
            ${getCarts.data.totalPrice}
          </span>
        </div>
        <div className={`flex justify-center`}>
          <button
            className={`btn`}
            onClick={createTransactionHandler}
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
