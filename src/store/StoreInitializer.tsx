"use client";
import { FC } from "react";
import { useAuthStore } from "@/store/auth";
import { User } from "@/types/user";

type Props = {
  user: User | null;
};

const StoreInitializer: FC<Props> = (props) => {
  useAuthStore.setState({ user: props.user });

  return null;
};

export default StoreInitializer;
