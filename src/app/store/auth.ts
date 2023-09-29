import { create } from "zustand";
import { User } from "@/types/user";

export type AuthState = {
  user: User | null;
};

export const useAuthStore = create<AuthState>((_) => ({
  user: null,
}));
