import { redirect } from "next/navigation";
import CreateProductForm from "@/app/(navigation)/create-product/_components/CreateProductForm";
import { checkIsAuthServer } from "@/utils/auth";

const CreateProductPage = async () => {
  await checkIsAuthServer();

  try {
    return (
      <main className={`flex-1 flex justify-center md:items-center`}>
        <section
          className={`min-w-full md:min-w-[75%] md:border-2 shadow
      flex flex-col gap-8 md:py-8`}
        >
          <h1 className={`hidden md:block text-4xl font-bold text-center`}>
            Create Product
          </h1>

          <CreateProductForm />
        </section>
      </main>
    );
  } catch (e) {
    redirect("/");
  }
};
export default CreateProductPage;
