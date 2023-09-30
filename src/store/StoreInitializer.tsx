"use client";
import { FC, useRef } from "react";
import { useAuthStore } from "@/store/auth";
import { User } from "@/types/user";

type Props = {
  user: User | null;
};

const StoreInitializer: FC<Props> = (props) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useAuthStore.setState({ user: props.user });
    initialized.current = true;
  }
  return null;
};

export default StoreInitializer;
