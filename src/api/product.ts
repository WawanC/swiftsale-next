import axios from "axios";
import { GetProductResponse, GetProductsResponse } from "@/types/product";

export const getProductsApi = async (filter?: { search?: string }) => {
  let url = `${process.env.SERVER_URL}/products`;

  if (filter?.search) url += `?search=${filter.search}`;

  const response = await axios.get<GetProductsResponse>(url);
  return response.data.products;
};

export const getProductApi = async (productId: string) => {
  const response = await axios.get<GetProductResponse>(
    `${process.env.SERVER_URL}/products/${productId}`,
  );
  return response.data.product;
};
