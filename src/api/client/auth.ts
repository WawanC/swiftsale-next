import { LoginPayload, RegisterPayload } from "@/types/auth";
import { apiClient, privateApiClient } from "@/api/client/axios";

export const loginApiClient = async (data: LoginPayload) => {
  await apiClient.post(`/auth/login`, data);
};

export const registerApiClient = async (data: RegisterPayload) => {
  await apiClient.post("/auth/register", data);
};

export const logoutApiClient = async () => {
  await privateApiClient.post("/auth/logout");
};
