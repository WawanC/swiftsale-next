import axios from "axios";
import { GetProductResponse, GetProductsResponse } from "@/types/product";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`,
});

export const getProductsApi = async (filter?: { search?: string }) => {
  let url = ``;

  if (filter?.search) url += `?search=${filter.search}`;

  const response = await api.get<GetProductsResponse>(url);
  return response.data.products;
};

export const getProductApi = async (productId: string) => {
  const response = await api.get<GetProductResponse>(`/${productId}`);
  return response.data.product;
};
