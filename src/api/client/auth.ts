import axios from "axios";
import { LoginPayload, RegisterPayload } from "@/types/auth";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth`,
});

export const loginApiClient = async (data: LoginPayload) => {
  await api.post(`/login`, data);
};

export const registerApiClient = async (data: RegisterPayload) => {
  await api.post("/register", data);
};

export const logoutApiClient = async () => {
  await api.post("/logout");
};
