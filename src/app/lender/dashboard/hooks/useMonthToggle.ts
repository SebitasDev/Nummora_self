import React from "react";
import {useEarningStore} from "@/app/lender/dashboard/store";
import {Period} from "@/app/lender/dashboard/store/earningStore";

export const useMonthToggle = () => {
    const { period, setPeriod } = useEarningStore();
    const handleChange = (
        _:React.MouseEvent<HTMLElement>,
        newValue:Period
    ) => {
        if (newValue !== null) {
            setPeriod(newValue);
        }
    };
    
    return {
        period,
        handleChange
    }
}