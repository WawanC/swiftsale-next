import { getProductsApiServer } from "@/api/server/product";
import ProductList from "@/app/_components/ProductList";
import { checkIsAuthServer } from "@/utils/auth";
import Landing from "@/app/_components/Landing";
import NavBar from "@/app/_components/NavBar";

const Home = async () => {
  console.log("entering app page");
  try {
    await checkIsAuthServer();
  } catch (e) {
    return <Landing />;
  }

  const products = await getProductsApiServer();

  return (
    <>
      <NavBar />
      <main className={`flex-1 flex flex-col items-center py-8`}>
        <ProductList products={products} />
      </main>
    </>
  );
};

export default Home;
