import axios from "axios";
import { GetProductResponse, GetProductsResponse } from "@/types/product";

const api = axios.create({
  baseURL: `${process.env.PROXY_URL}/api/products`,
});

export const getProductsApiServer = async (filter?: { search?: string }) => {
  let url = ``;

  if (filter?.search) url += `?search=${filter.search}`;

  const response = await api.get<GetProductsResponse>(url);
  return response.data.products;
};

export const getProductApiServer = async (productId: string) => {
  const response = await api.get<GetProductResponse>(`/${productId}`);
  return response.data.product;
};
