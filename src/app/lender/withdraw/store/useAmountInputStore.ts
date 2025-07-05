import { create } from "zustand";

interface AmountInputState {
  amount: string;
  setAmount: (amount: string) => void;
}

export const useAmountInputStore = create<AmountInputState>((set) => ({
  amount: "0.00",
  setAmount: (amount) => set({ amount }),
}));
