import { getProductsApiServer } from "@/api/server/product";
import ProductList from "@/app/_components/ProductList";
import NavBar from "@/app/_components/NavBar";
import Link from "next/link";

const Home = async () => {
  // try {
  //   await checkIsAuthServer();
  // } catch (e) {
  //   return <Landing />;
  // }

  const products = await getProductsApiServer();

  return (
    <>
      <NavBar />
      <main className={`flex-1 flex flex-col items-center py-8`}>
        <div
          className={`flex justify-center items-center p-8 text-xl underline underline-offset-8`}
        >
          <Link href={"/test"}>Go to test</Link>
        </div>
        <ProductList products={products} />
      </main>
    </>
  );
};

export default Home;
