import { redirect } from "next/navigation";
import { getMeApiServer } from "@/api/server/auth";
import CreateProductForm from "@/app/create-product/_components/CreateProductForm";

const CreateProductPage = async () => {
  try {
    await getMeApiServer();
  } catch (e) {
    redirect("/login");
  }

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
