import React, {useState} from "react";
import {useEarningStore} from "@/app/lender/dashboard/store";

export const useMonthToggle = () => {
    const { period, setPeriod } = useEarningStore();
    const handleChange = (
        _:React.MouseEvent<HTMLElement>,
        newValue:string
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