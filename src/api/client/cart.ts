import axios from "axios";
import { GetCartsResponse } from "@/types/cart";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/carts`,
});

export const getCartsApiClient = async () => {
  const response = await api.get<GetCartsResponse>("/");
  return response.data.carts;
};
