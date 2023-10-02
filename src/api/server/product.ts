import { GetProductResponse, GetProductsResponse } from "@/types/product";
import { apiServer } from "@/api/server/axios";
import { AxiosError } from "axios";

export const getProductsApiServer = async (filter?: { search?: string }) => {
  let url = `/products`;

  if (filter?.search) url += `?search=${filter.search}`;

  try {
    const response = await apiServer.get<GetProductsResponse>(url);
    return response.data.products;
  } catch (e) {
    const err = e as AxiosError;
    console.log(err.response?.data);
    return [];
  }
};

export const getProductApiServer = async (productId: string) => {
  const response = await apiServer.get<GetProductResponse>(
    `/products/${productId}`,
  );
  return response.data.product;
};
