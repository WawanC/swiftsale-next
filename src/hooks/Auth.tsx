"use client";

import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/api/auth";

export const useLoginMutation = () => useMutation(loginApi);
