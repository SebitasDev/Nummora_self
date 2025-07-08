import { useState, useEffect } from "react";
import { useInvestAmountStore } from "../store/useInvestAmountStore";

export const useInvestAmount = () => {
  const { amount, setAmount } = useInvestAmountStore();
  const commissionRate = 0.005;
  const [commission, setCommission] = useState("0");
  const [totalIncome, setTotalIncome] = useState("0");

  useEffect(() => {
    const numericAmount =
      Number(amount.replace(/\./g, "").replace(/,/g, "")) || 0;
    const commissionValue = numericAmount * commissionRate;
    setCommission(commissionValue.toLocaleString("es-CO"));

    const total = numericAmount - commissionValue;
    setTotalIncome(total.toLocaleString("es-CO"));
  }, [amount, commissionRate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSelectAmount = (value: number | "all") => {
    if (value === "all") {
      setAmount("123.456");
    } else {
      setAmount(value.toLocaleString("es-CO"));
    }
  };

  return {
    amount,
    setAmount,
    handleChange,
    handleSelectAmount,
    commission,
    totalIncome,
  };
};
