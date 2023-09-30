"use client";

import { FC, MouseEventHandler, useCallback } from "react";
import { CartItem } from "@/types/cart";
import { useAddCartMutation, useDeleteCartMutation } from "@/hooks/Cart";
import Image from "next/image";

type Props = {
  item: CartItem;
};

const CartItem: FC<Props> = (props) => {
  const addCart = useAddCartMutation();
  const deleteCart = useDeleteCartMutation();

  const addCartHandler: MouseEventHandler = useCallback(
    async (e) => {
      e.preventDefault();
      await addCart.mutateAsync({ productId: props.item.product.id, count: 1 });
    },
    [props.item.product.id, addCart],
  );

  const deleteCartHandler: MouseEventHandler = useCallback(
    async (e) => {
      e.preventDefault();
      await deleteCart.mutateAsync({
        productId: props.item.product.id,
        count: 1,
      });
    },
    [props.item.product.id, deleteCart],
  );

  return (
    <li className={`flex border-2 shadow rounded gap-4 items-center h-[110px]`}>
      {/*  Cart Item Picture */}
      <div
        className={`w-20 md:w-20 h-full bg-secondary overflow-hidden relative`}
      >
        {props.item.product.pictures.length > 0 && (
          <Image
            src={props.item.product.pictures[0].url}
            alt={props.item.product.pictures[0].public_id}
            fill={true}
            sizes={"100%"}
            className={`object-cover`}
          />
        )}
      </div>

      <div className={`flex-1 flex flex-row md:p-2 md:pr-6 pr-8`}>
        <div className={`flex-1 flex flex-col gap-4`}>
          <h1 className={`text-xl md:text-2xl`}>{props.item.product.title}</h1>
          {/* Cart Item Counter Component */}
          <div className={`flex gap-2 px-4 py-2 rounded border text-xl w-fit`}>
            <button onClick={deleteCartHandler}>-</button>
            <span className={`text-center px-4`}>{props.item.count}</span>
            <button onClick={addCartHandler}>+</button>
          </div>
        </div>
        <div className={`flex justify-center items-center`}>
          <span className={`text-2xl md:text-2xl font-semibold`}>
            ${props.item.price * props.item.count}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
