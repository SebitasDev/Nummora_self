import { useAmountInputStore } from "../store/useAmountInputStore";

export const useAmountInput = () => {
  const amount = useAmountInputStore((state) => state.amount);
  const setAmount = useAmountInputStore((state) => state.setAmount);

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
