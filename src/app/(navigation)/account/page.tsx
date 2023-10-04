import AccountMenu from "@/app/(navigation)/account/_components/AccountMenu";
import { checkIsAuthServer } from "@/utils/auth";
import AccountInfo from "@/app/(navigation)/account/_components/AccountInfo";

const AccountPage = async () => {
  await checkIsAuthServer();

  return (
    <main className={`flex-1 flex justify-center md:py-16`}>
      <article
        className={`min-w-full md:min-w-[50%] flex flex-col gap-4 px-8 overflow-hidden`}
      >
        {/*Account Info Section*/}
        <section
          className={`flex flex-col md:flex-row md:border-2 rounded-lg md:shadow p-8`}
        >
          <AccountInfo />
        </section>
        {/*    Account Menu Section */}
        <section className={`flex flex-col gap-8`}>
          <AccountMenu />
        </section>
      </article>
    </main>
  );
};

export default AccountPage;
