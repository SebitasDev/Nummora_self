import { create } from "zustand/index";
import { InvestAmountState } from "@/app/lender/invest/interfaces";

export const useInvestAmountStore = create<InvestAmountState>((set) => ({
  amount: 0,
  setAmount: (a) => set({ amount: a }),
}));
