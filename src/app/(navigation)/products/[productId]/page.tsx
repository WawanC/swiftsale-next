import { getProductApiServer } from "@/api/server/product";
import AccountIcon from "@/icons/AccountIcon";
import ProductPictureDisplay from "@/app/_components/ProductPictureDisplay";
import AddCartInput from "@/app/(navigation)/products/[productId]/_components/AddCartInput";

type Params = {
  productId: string;
};

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const product = await getProductApiServer(params.productId);

  return (
    <main className={`flex-1 flex justify-center md:items-center`}>
      <article
        className={`w-full md:w-3/4 rounded shadow-lg md:border-2 md:py-8
        flex-col md:flex md:flex-row`}
      >
        {/* Pictures Section */}
        <section className={`md:flex-[1.25] md:p-4`}>
          <ProductPictureDisplay pictures={product.pictures} />
        </section>

        {/* Info Section */}
        <section
          className={`flex-1 md:border-x flex flex-col items-center 
              px-8 py-4 gap-4 md:gap-8`}
        >
          <h1 className={"text-4xl text-center"}>{product.title}</h1>
          <h2 className={`text-3xl font-bold text-center`}>${product.price}</h2>
          <p
            className={`font-sans text-base font-light italic w-full text-center`}
          >
            {product.description}
          </p>
        </section>

        {/* Action Section */}
        <section className={`flex-[0.75] flex flex-col gap-4 p-4`}>
          {/* Sold by info */}
          <div className={`flex flex-col gap-2`}>
            <span className={`text-xl font-semibold`}>Sold By :</span>
            <div className={`flex gap-4 items-center`}>
              <AccountIcon className={`w-16 h-16`} strokeWidth={0.5} />
              <span className={`text-xl`}>{product.user.username}</span>
            </div>
          </div>

          {/*  Add Cart button */}
          <AddCartInput productId={product.id} />
        </section>
      </article>
    </main>
  );
};

export default ProductDetailPage;
