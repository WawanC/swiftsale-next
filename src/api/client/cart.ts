import axios from "axios";
import { GetCartsResponse } from "@/types/cart";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/carts`,
});

export const getCartsApiClient = async () => {
  const response = await api.get<GetCartsResponse>("/");
  return response.data.carts;
};

export const createCartApiClient = async (data: {
  productId: string;
  count: number;
}) => {
  await api.post(`/${data.productId}`, {
    count: data.count,
  });
};

export const deleteCartApiClient = async (data: {
  productId: string;
  count: number;
}) => {
  await api.delete(`/${data.productId}`, {
    data: {
      count: data.count,
    },
  });
};
