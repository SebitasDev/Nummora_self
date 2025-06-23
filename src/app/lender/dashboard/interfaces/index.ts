import {Period} from "@/app/lender/dashboard/store/earningStore";

export interface EarningState {
    period: Period;
    setPeriod: (p: Period) => void;
}

export interface EarningDataPoint {
    mes: string;
    valor: number;
}
