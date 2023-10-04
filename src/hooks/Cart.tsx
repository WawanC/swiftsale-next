import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCartApiClient,
  deleteCartApiClient,
  getCartsApiClient,
} from "@/api/client/cart";

export const useGetCartsQuery = () => {
  return useQuery(["carts"], async () => {
    try {
      const items = await getCartsApiClient();

      let totalCount = 0;
      items.forEach((item) => {
        totalCount += item.count;
      });

      let totalPrice = 0;
      items.forEach((item) => {
        totalPrice += item.price * item.count;
      });

      return Promise.resolve({ items, totalCount, totalPrice });
    } catch (e) {
      return null;
    }
  });
};

export const useAddCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createCartApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });
};

export const useDeleteCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCartApiClient, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });
};
