import { GetProductResponse, GetProductsResponse } from "@/types/product";
import { apiServer } from "@/api/server/axios";

export const getProductsApiServer = async (filter?: { search?: string }) => {
  let url = `/products`;

  if (filter?.search) url += `?search=${filter.search}`;

  const response = await apiServer.get<GetProductsResponse>(url);
  return response.data.products;
};

export const getProductApiServer = async (productId: string) => {
  const response = await apiServer.get<GetProductResponse>(
    `/products/${productId}`,
  );
  return response.data.product;
};
