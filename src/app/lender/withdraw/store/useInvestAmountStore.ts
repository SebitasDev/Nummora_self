import { create } from "zustand";

interface InvestAmountState {
  amount: string;
  setAmount: (amount: string) => void;
}

export const useInvestAmountStore = create<InvestAmountState>((set) => ({
  amount: "0.00",
  setAmount: (amount) => set({ amount }),
}));
