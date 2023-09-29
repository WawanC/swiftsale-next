"use client";

import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "@/api/auth";

export const useLoginMutation = () => useMutation(loginApi);

export const useRegisterMutation = () => useMutation(registerApi);
