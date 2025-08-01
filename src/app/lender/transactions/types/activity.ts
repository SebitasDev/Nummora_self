export type ActivityStatus = "Procesando" | "Completado" | "Activo";
export type ActivityPeriod = "Todo" | "Hoy" | "Últimos 7 días" | "Este mes";

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  amount: number;
  status: ActivityStatus;
}

export type ActivityType =
  | "Todos"
  | "Pago recibido"
  | "Préstamo aprobado"
  | "Inversión realizada";

export interface Filters {
  search: string;
  type: ActivityType;
  period: ActivityPeriod;
}
