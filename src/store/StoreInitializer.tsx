"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { getMeApiClient } from "@/api/client/auth";
import { useAuthStore } from "@/store/auth";
import LoadingIndicator from "@/app/_components/LoadingIndicator";

type Props = {
  children: ReactNode;
};

const StoreInitializer: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const user = await getMeApiClient();
        useAuthStore.setState({ user: user });
      } catch (e) {
        useAuthStore.setState({ user: null });
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser().then((_) => null);
  }, []);

  if (isLoading)
    return (
      <main className={`flex-1 flex justify-center items-center`}>
        <LoadingIndicator size={75} />
      </main>
    );

  return props.children;
};

export default StoreInitializer;
