import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCartApiClient,
  deleteCartApiClient,
  getCartsApiClient,
} from "@/api/client/cart";
import { useAuthStore } from "@/app/store/auth";

export const useGetCartsQuery = () => {
  const user = useAuthStore((state) => state.user);
  return useQuery(["carts"], async () => {
    if (!user) return null;

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
