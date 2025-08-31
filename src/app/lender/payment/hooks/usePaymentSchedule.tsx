import { useMemo } from "react";

interface PaymentItem {
  quotaNumber: string;
  date: string;
  value: string;
  balance: string;
  isDone: boolean;
}

interface UsePaymentScheduleParams {
  loanAmount: number;
  installments: number;
  startDate: string; // formato YYYY-MM-DD
  installmentValue: number;
  paidInstallments: number;
}

export const usePaymentSchedule = ({
  loanAmount,
  installments,
  startDate,
  installmentValue,
  paidInstallments,
}: UsePaymentScheduleParams) => {
  return useMemo<PaymentItem[]>(() => {
    const schedule: PaymentItem[] = [];
    let balance = loanAmount;

    for (let i = 0; i < installments; i++) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);

      const quotaNumber = `Cuota ${i + 1}`;
      const isDone = i < paidInstallments;

      const formattedDate = date.toISOString().split("T")[0];

      schedule.push({
        quotaNumber,
        date: formattedDate,
        value: installmentValue.toString(),
        balance: `Saldo: $${balance.toLocaleString("es-CO")}`,
        isDone,
      });

      balance -= installmentValue;
    }

    return schedule;
  }, [loanAmount, installments, startDate, installmentValue, paidInstallments]);
};
