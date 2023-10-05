import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTransactionApiClient,
  getTransactionsApiClient,
} from "@/api/client/transaction";

export const useGetTransactionsQuery = () =>
  useQuery(["transactions"], getTransactionsApiClient);

export const useCreateTransactionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createTransactionApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });
};
