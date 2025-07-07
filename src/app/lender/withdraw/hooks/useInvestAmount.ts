import { useInvestAmountStore } from "../store/useInvestAmountStore";

export const useInvestAmount = () => {
  const amount = useInvestAmountStore((state) => state.amount);
  const setAmount = useInvestAmountStore((state) => state.setAmount);

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
  };
};
