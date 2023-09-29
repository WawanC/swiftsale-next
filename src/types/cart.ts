import { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  count: number;
  price: number;
};

export type GetCartsResponse = {
  message: string;
  carts: CartItem[];
};
