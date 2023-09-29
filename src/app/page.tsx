import { getProductsApiServer } from "@/api/server/product";
import ProductList from "@/app/_components/ProductList";

const Home = async () => {
  const products = await getProductsApiServer();

  return (
    <main className={`flex-1 flex flex-col items-center gap-8 p-8`}>
      <h1 className={`text-4xl font-bold`}>SwiftSale</h1>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
