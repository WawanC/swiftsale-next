import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTransactionApiClient,
  getTransactionsApiClient,
} from "@/api/client/transaction";

export const useGetTransactionsQuery = () =>
  useQuery(["transactions"], getTransactionsApiClient);

export const useCreateTransactionMutation = () =>
  useMutation(createTransactionApiClient);
