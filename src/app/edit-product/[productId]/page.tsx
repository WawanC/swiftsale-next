import { getProductApiServer } from "@/api/server/product";
import { redirect } from "next/navigation";
import EditProductForm from "@/app/edit-product/[productId]/_components/EditProductForm";
import { checkIsAuthServer } from "@/utils/auth";

type Params = {
  productId: string;
};

const EditProductPage = async ({ params }: { params: Params }) => {
  await checkIsAuthServer();

  try {
    const product = await getProductApiServer(params.productId);

    return (
      <main className={`flex-1 flex justify-center md:items-center`}>
        <section
          className={`min-w-full md:min-w-[75%] md:border-2 shadow
      flex flex-col gap-8 md:py-8`}
        >
          <h1 className={`hidden md:block text-4xl font-bold text-center`}>
            Edit Product
          </h1>

          <EditProductForm product={product} />
        </section>
      </main>
    );
  } catch (e) {
    redirect("/");
  }
};
export default EditProductPage;
