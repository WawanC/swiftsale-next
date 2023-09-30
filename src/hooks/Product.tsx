import { useMutation } from "@tanstack/react-query";
import {
  createProductApiClient,
  updateProductApiClient,
} from "@/api/client/product";

export const useUpdateProductMutation = () =>
  useMutation(updateProductApiClient);

export const useCreateProductMutation = () =>
  useMutation(createProductApiClient);
