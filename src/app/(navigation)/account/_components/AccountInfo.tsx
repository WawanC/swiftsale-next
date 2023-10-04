"use client";

import AccountIcon from "@/icons/AccountIcon";
import { useAuthStore } from "@/store/auth";

const AccountInfo = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <div className={"flex-1 flex justify-center items-center"}>
        <AccountIcon className={`w-64 aspect-square`} strokeWidth={0.25} />
      </div>
      <div className={`flex-1 flex flex-col gap-2 justify-center items-center`}>
        <h1 className={`text-4xl font-semibold`}>{user?.username}</h1>
        <h2 className={`font-sans font-light text-2xl`}>{user?.email}</h2>
      </div>
    </>
  );
};

export default AccountInfo;
