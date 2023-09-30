import { useQuery } from "@tanstack/react-query";
import { getTransactionsApiClient } from "@/api/client/transaction";

export const useGetTransactionsQuery = () =>
  useQuery(["transactions"], getTransactionsApiClient);
