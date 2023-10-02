"use client";

import { FC, MouseEventHandler, useCallback } from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { useAddCartMutation } from "@/hooks/Cart";

type Props = {
  product: Product;
};

const ProductCard: FC<Props> = (props) => {
  const addCart = useAddCartMutation();

  const addCartHandler: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      addCart.mutate({ productId: props.product.id, count: 1 });
    },
    [addCart, props.product.id],
  );

  return (
    <Link
      href={`/products/${props.product.id}`}
      className={`flex flex-col shadow border-2 border-secondary 
      rounded-lg h-fit text-base md:text-xl overflow-hidden 
      w-[45%] md:w-fit items-center`}
    >
      <div
        className={`w-full md:w-[200px] aspect-square overflow-hidden relative`}
      >
        {props.product.pictures.length > 0 && (
          <Image
            src={props.product.pictures[0].url}
            alt={props.product.id}
            fill={true}
            className={`object-contain p-4`}
            sizes={"100%"}
            priority={true}
          />
        )}
      </div>
      <div className={`flex flex-col gap-4 w-full px-4 py-2`}>
        <div className={`flex flex-col`}>
          <h1 className={`line-clamp-2`}>{props.product.title}</h1>
          <h2 className={`font-bold`}>$ {props.product.price}</h2>
        </div>
        <div className={`flex justify-center`}>
          <button className={`btn text-sm`} onClick={addCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
