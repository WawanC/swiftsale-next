import { FC } from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

type Props = {
  product: Product;
};

const ProductCard: FC<Props> = (props) => {
  return (
    <Link
      href={`/products/${props.product.id}`}
      className={`flex flex-col shadow border-2 border-secondary 
      rounded-lg h-fit text-xl overflow-hidden 
      w-[45%] md:w-fit items-center`}
    >
      <div
        className={`w-full md:w-[200px] aspect-square bg-secondary overflow-hidden relative`}
      >
        {props.product.pictures.length > 0 && (
          <Image
            src={props.product.pictures[0].url}
            alt={props.product.id}
            fill={true}
            className={`object-cover`}
            sizes={"100%"}
            placeholder={"empty"}
            priority={true}
          />
        )}
      </div>
      <div className={`flex flex-col gap-2 w-full px-4 py-2`}>
        <h1 className={`line-clamp-2`}>{props.product.title}</h1>
        <h2 className={`font-bold`}>$ {props.product.price}</h2>
        <div className={`flex justify-center`}>
          <button className={`btn text-sm`}>Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
