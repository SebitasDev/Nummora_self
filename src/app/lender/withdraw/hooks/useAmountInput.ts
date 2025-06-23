
import { useState } from "react";

export const useAmountInput = (defaultAmount = "") => {
    const [amount, setAmount] = useState<string>(defaultAmount);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSelectAmount = (value: number | "all") => {
        if (value === "all") {
            // In real use case, fetch actual total available
            setAmount("123456");
        } else {
            setAmount(value.toString());
        }
    };

    return {
        amount,
        setAmount,
        handleChange,
        handleSelectAmount,
    };
};
