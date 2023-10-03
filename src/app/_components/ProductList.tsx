import { FC } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/app/_components/ProductCard";

type Props = {
  products: Product[];
};

const ProductList: FC<Props> = (props) => {
  return (
    <ul
      className={`w-full flex flex-wrap gap-2 md:gap-4 justify-center items-stretch`}
    >
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
