"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMeApiClient,
  loginApiClient,
  logoutApiClient,
  registerApiClient,
} from "@/api/client/auth";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

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

export const useGetMeQuery = () => {
  return useQuery(["me"], async () => {
    let user: User | null;
    try {
      user = await getMeApiClient();
    } catch (e) {
      user = null;
    }
    return user;
  });
};
