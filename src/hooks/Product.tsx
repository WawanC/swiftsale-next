import { useMutation } from "@tanstack/react-query";
import { updateProductApiClient } from "@/api/client/product";

export const useUpdateProductMutation = () =>
  useMutation(updateProductApiClient);
