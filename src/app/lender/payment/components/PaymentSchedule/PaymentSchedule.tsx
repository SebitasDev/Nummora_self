import { PaymentScheduleList } from "./PaymentScheduleList";
import { usePaymentSchedule } from "../../hooks/usePaymentSchedule";

export const PaymentSchedule = () => {
  const payments = usePaymentSchedule({
    loanAmount: 100000,
    installments: 6,
    startDate: "2024-12-15",
    installmentValue: 8900,
    paidInstallments: 2,
  });

  return <PaymentScheduleList payments={payments} />;
};
