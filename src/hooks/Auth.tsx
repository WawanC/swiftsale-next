"use client";

import { useMutation } from "@tanstack/react-query";
import {
  loginApiClient,
  logoutApiClient,
  registerApiClient,
} from "@/api/client/auth";

export const useLoginMutation = () => {
  return useMutation(loginApiClient, {
    onSettled: () => (window.location.href = "/"),
  });
};

export const useRegisterMutation = () => useMutation(registerApiClient);

export const useLogoutMutation = () => {
  return useMutation(logoutApiClient, {
    onSettled: () => window.location.reload(),
  });
};
