"use client";

import { useMutation } from "@tanstack/react-query";
import {
  loginApiClient,
  logoutApiClient,
  registerApiClient,
} from "@/api/client/auth";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  return useMutation(loginApiClient);
};

export const useRegisterMutation = () => useMutation(registerApiClient);

export const useLogoutMutation = () => {
  const router = useRouter();
  return useMutation(logoutApiClient, {
    onSettled: () => {
      router.refresh();
      router.replace("/");
    },
  });
};
