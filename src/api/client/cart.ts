import { GetCartsResponse } from "@/types/cart";
import { apiClient, privateApiClient } from "@/api/client/axios";

export const getCartsApiClient = async () => {
  const response = await apiClient.get<GetCartsResponse>("/carts");
  return response.data.carts;
};

export const createCartApiClient = async (data: {
  productId: string;
  count: number;
}) => {
  await privateApiClient.post(`/carts/${data.productId}`, {
    count: data.count,
  });
};

export const deleteCartApiClient = async (data: {
  productId: string;
  count: number;
}) => {
  await privateApiClient.delete(`/carts/${data.productId}`, {
    data: {
      count: data.count,
    },
  });
};
