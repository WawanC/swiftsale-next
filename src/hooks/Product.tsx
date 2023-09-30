import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProductApiClient,
  deleteProductApiClient,
  getProductsApiClient,
  updateProductApiClient,
} from "@/api/client/product";

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProductApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createProductApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};

export const useGetProductsQuery = () =>
  useQuery(["products"], getProductsApiClient);

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProductApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
};
