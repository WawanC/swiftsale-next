import CartList from "@/app/cart/_components/CartList";
import CartInfo from "@/app/cart/_components/CartInfo";
import { checkIsAuthServer } from "@/utils/auth";

const CartPage = async () => {
  await checkIsAuthServer();

  return (
    <main className={`flex-1 flex justify-center md:py-16`}>
      <article className={`w-full md:w-3/4 h-fit flex flex-col md:flex-row`}>
        {/* Manage Cart Section */}
        <div className={`flex-1 flex flex-col border-r-2 p-4 md:pr-8`}>
          <div className={`border-b-2 border-secondary pb-4`}>
            <h1 className={`text-4xl font-bold`}>My Cart</h1>
          </div>
          <CartList />
        </div>

        {/* Cart Info Section */}
        <div className={`flex-[0.5] flex flex-col gap-4`}>
          <CartInfo />
        </div>
      </article>
    </main>
  );
};

export default CartPage;
