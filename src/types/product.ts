import { User } from "@/types/user";

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  pictures: Picture[];
  user: User;
};

export type Picture = {
  public_id: string;
  url: string;
};

export type GetProductsResponse = {
  message: string;
  products: Product[];
};
