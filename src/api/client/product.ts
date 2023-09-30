import axios from "axios";
import { UpdateProductPayload } from "@/types/product";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`,
});

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

  await api.put(`/${payload.productId}`, formData);
};
