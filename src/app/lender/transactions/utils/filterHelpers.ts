import { Activity, Filters } from "../types/activity";
import { parseISO, isSameDay, subDays, isAfter, isSameMonth } from "date-fns";

export const applyFilters = (
  activities: Activity[],
  filters: Filters
): Activity[] => {
  const { search, type, period } = filters;

  return activities.filter((activity) => {
    const title = activity.title.toLowerCase();
    const searchMatch = title.includes(search.toLowerCase());
    const typeMatch = type === "Todos" || activity.title === type;
    const periodMatch = matchesPeriod(activity.date, period);

    return searchMatch && typeMatch && periodMatch;
  });
};

const matchesPeriod = (dateString: string, period: string): boolean => {
  const activityDate = parseISO(dateString);
  const today = new Date();

  switch (period) {
    case "Hoy":
      return isSameDay(activityDate, today);

    case "Últimos 7 días":
      return isAfter(activityDate, subDays(today, 7));

    case "Este mes":
      return isSameMonth(activityDate, today);

    default:
      return true;
  }
};
