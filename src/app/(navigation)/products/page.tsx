import ProductList from "@/app/_components/ProductList";
import { getProductsApiServer } from "@/api/server/product";
import { Product } from "@/types/product";

type Props = {
  searchParams: {
    search?: string;
  };
};

const ProductsPage = async (props: Props) => {
  let products: Product[];
  const searchKeyword = props.searchParams.search?.trim();

  if (searchKeyword && searchKeyword.length > 0) {
    products = await getProductsApiServer({
      search: searchKeyword,
    });
  } else {
    products = await getProductsApiServer();
  }

  return (
    <main className={`flex-1 flex flex-col items-center gap-8 py-8`}>
      {searchKeyword ? (
        <h1 className={`text-2xl md:text-4xl font-bold`}>
          Search : &quot;{searchKeyword}&quot;
        </h1>
      ) : (
        <h1
          className={`text-2xl md:text-4xl font-bold underline underline-offset-8`}
        >
          All Products
        </h1>
      )}

      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
