"use client";

import { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { Product } from "@/types/product";
import { useDeleteProductMutation } from "@/hooks/Product";
import Link from "next/link";
import EditIcon from "@/icons/EditIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  product: Product;
};

const MyProductItem: FC<Props> = (props) => {
  const deleteProduct = useDeleteProductMutation();
  const router = useRouter();

  const deleteProductHandler: MouseEventHandler = useMemo(
    () => async (e) => {
      e.preventDefault();
      deleteProduct.mutate(props.product.id);
    },
    [deleteProduct, props.product.id],
  );

  const editProductHandler: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      router.push(`/edit-product/${props.product.id}`);
    },
    [router, props.product.id],
  );

  return (
    <Link
      href={`/products/${props.product.id}`}
      className={`p-2 md:p-4 flex border-2 rounded items-center gap-4 md:gap-8`}
    >
      {deleteProduct.isLoading ? (
        <p className={`text-xl text-center flex-1`}>Deleting...</p>
      ) : (
        <>
          <div
            className={`relative w-16 aspect-square bg-black rounded overflow-hidden shadow`}
          >
            {props.product.pictures.length > 0 && (
              <Image
                src={props.product.pictures[0].url}
                alt={props.product.pictures[0].public_id}
                fill={true}
                sizes={"100%"}
                className={`object-cover`}
              />
            )}
          </div>
          <div className={`flex-1 flex flex-col md:flex-row gap-2`}>
            {/*  Product Title */}
            <h1 className={`flex-1 text-xl`}>{props.product.title}</h1>

            {/*    Actions Menu */}
            <div className={`flex gap-4 items-center pr-4`}>
              <button onClick={editProductHandler}>
                <EditIcon className={`w-6 md:w-8 aspect-square`} />
              </button>
              <button onClick={deleteProductHandler}>
                <DeleteIcon className={`w-6 md:w-8 aspect-square`} />
              </button>
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default MyProductItem;
