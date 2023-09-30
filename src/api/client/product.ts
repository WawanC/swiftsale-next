import {
  CreateProductPayload,
  GetProductsResponse,
  UpdateProductPayload,
} from "@/types/product";
import { apiClient, privateApiClient } from "@/api/client/axios";

export const createProductApiClient = async (data: CreateProductPayload) => {
  const formData = new FormData();

  formData.append("title", data.title.trim());
  formData.append("price", `${data.price}`);
  formData.append("description", data.description.trim());

  if (data.pictures && data.pictures.length > 0)
    for (const picture of data.pictures) {
      formData.append("pictures", picture);
    }

  await privateApiClient.post("/products", formData);
};

export const updateProductApiClient = async (payload: {
  productId: string;
  data: UpdateProductPayload;
}) => {
  const formData = new FormData();

  payload.data.title && formData.append("title", payload.data.title.trim());
  payload.data.price && formData.append("price", `${payload.data.price}`);
  payload.data.description &&
    formData.append("description", payload.data.description.trim());

  if (payload.data.pictures && payload.data.pictures.length > 0)
    for (const picture of payload.data.pictures) {
      formData.append("pictures", picture);
    }

  await privateApiClient.put(`/products/${payload.productId}`, formData);
};

export const getProductsApiClient = async () => {
  const response = await apiClient.get<GetProductsResponse>("/products");
  return response.data.products;
};

export const deleteProductApiClient = async (productId: string) => {
  await privateApiClient.delete(`/products/${productId}`);
};
