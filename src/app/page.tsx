import { getProductsApiServer } from "@/api/server/product";
import ProductList from "@/app/_components/ProductList";

const Home = async () => {
  const products = await getProductsApiServer();

  return (
    <main className={`flex-1 flex flex-col items-center p-8`}>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
