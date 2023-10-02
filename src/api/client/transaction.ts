import { apiClient, privateApiClient } from "@/api/client/axios";
import { GetTransactionsResponse } from "@/types/transaction";

export const getTransactionsApiClient = async () => {
  const response =
    await apiClient.get<GetTransactionsResponse>("/transactions");
  response.data.transactions.forEach((transaction) => {
    let totalPrice = 0;
    transaction.items.forEach(
      (item) => (totalPrice += item.price * item.count),
    );
    transaction.totalPrice = totalPrice;
  });

  return response.data.transactions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

export const createTransactionApiClient = async () => {
  return await privateApiClient.post("/transactions");
};
