import { create } from "zustand";
import {EarningState} from "@/app/lender/dashboard/interfaces";

export type Period = "3" | "6" | "12";

export const useEarningStore = create<EarningState>((set) => ({
    period: "12",
    setPeriod: (p) => set({ period: p }),
}));