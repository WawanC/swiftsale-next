import Link from "next/link";
import { getProductsApiServer } from "@/api/server/product";
import Image from "next/image";

const Landing = async () => {
  const products = (await getProductsApiServer()).slice(0, 4);

  return (
    <main
      className={`flex-1 bg-accent text-primary flex flex-col items-center gap-32`}
    >
      <div className={`absolute top-4 flex items-end gap-2`}>
        <Image
          src={"/AppLogo_Dark.svg"}
          alt={"app_logo"}
          width={40}
          height={40}
        />
        <span className={`text-2xl font-bold`}>SwiftSale</span>
      </div>
      <article
        className={`min-h-screen flex flex-col justify-center items-center text-center 
        gap-8 px-4`}
      >
        <p className={`text-4xl md:text-6xl font-bold`}>
          Make your shopping more enjoyable
        </p>
        <p className={`text-2xl tracking-widest`}>
          Start selling your products and connect with others
        </p>
        <Link
          href={"/login"}
          className={`bg-primary text-accent text-xl w-fit px-4 py-2 
          font-semibold rounded-xl shadow`}
        >
          Start Now
        </Link>
      </article>
      <section
        className={`min-h-screen flex flex-col justify-center items-center gap-8`}
      >
        <h1 className={`text-3xl font-bold underline underline-offset-8`}>
          Featured Products
        </h1>
        <ul className={`flex flex-wrap justify-center items-stretch gap-4`}>
          {products.map((product) => (
            <li key={product.id} className={`w-[45%] md:w-fit`}>
              <Link
                href={`/products/${product.id}`}
                className={`flex flex-col shadow
                rounded-lg text-base md:text-xl overflow-hidden 
                items-center bg-secondary text-accent h-full`}
              >
                <div className={`w-full h-[200px] overflow-hidden relative`}>
                  {product.pictures.length > 0 && (
                    <Image
                      src={product.pictures[0].url}
                      alt={product.id}
                      fill={true}
                      className={`object-contain p-4 bg-white`}
                      sizes={"100%"}
                      priority={true}
                    />
                  )}
                </div>
                <div className={`flex flex-col gap-2 w-full px-4 py-2`}>
                  <h1 className={`line-clamp-2`}>{product.title}</h1>
                  <h2 className={`font-bold`}>$ {product.price}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/products"}
          className={`bg-primary text-accent text-xl w-fit px-4 py-2 
          font-semibold rounded-xl shadow`}
        >
          Browse More
        </Link>
      </section>
    </main>
  );
};

export default Landing;
