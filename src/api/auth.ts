import axios from "axios";
import { LoginPayload } from "@/types/auth";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth`,
});

export const loginApi = async (data: LoginPayload) => {
  await api.post(`/login`, data);
};
