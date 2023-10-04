import AccountMenu from "@/app/(navigation)/account/_components/AccountMenu";

const AccountPage = async () => {
  // await checkIsAuthServer();

  // const user = await getMeApiServer();

  return (
    <main className={`flex-1 flex justify-center md:py-16`}>
      <article
        className={`min-w-full md:min-w-[50%] flex flex-col gap-4 px-8 overflow-hidden`}
      >
        {/* Account Info Section*/}
        {/*<section*/}
        {/*  className={`flex flex-col md:flex-row md:border-2 rounded-lg md:shadow p-8`}*/}
        {/*>*/}
        {/*  <div className={"flex-1 flex justify-center items-center"}>*/}
        {/*    <AccountIcon className={`w-64 aspect-square`} strokeWidth={0.25} />*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    className={`flex-1 flex flex-col gap-2 justify-center items-center`}*/}
        {/*  >*/}
        {/*    <h1 className={`text-4xl font-semibold`}>{user.username}</h1>*/}
        {/*    <h2 className={`font-sans font-light text-2xl`}>{user.email}</h2>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*    Account Menu Section */}
        <section className={`flex flex-col gap-8`}>
          <AccountMenu />
        </section>
      </article>
    </main>
  );
};

export default AccountPage;
