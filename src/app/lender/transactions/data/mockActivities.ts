import { Activity } from "../types/activity";

export const mockActivities: Activity[] = [
  {
    id: "1",
    title: "Inversión realizada",
    description: "Inversión en portafolio diversificado",
    date: "2024-01-13",
    amount: 25000,
    status: "Procesando",
  },
  {
    id: "2",
    title: "Inversión realizada",
    description: "Inversión en préstamos P2P",
    date: "2025-07-07",
    amount: 40000,
    status: "Completado",
  },
  {
    id: "3",
    title: "Pago recibido",
    description: "Pago de intereses de préstamo #1234",
    date: "2025-07-11",
    amount: 15000,
    status: "Activo",
  },
  {
    id: "4",
    title: "Préstamo aprobado",
    description: "Préstamo #1235 aprobado por $50000",
    date: "2024-01-05",
    amount: 50000,
    status: "Procesando",
  },
  {
    id: "5",
    title: "Inversión realizada",
    description: "Inversión en portafolio de alto rendimiento",
    date: "2024-01-02",
    amount: 30000,
    status: "Completado",
  },
];
