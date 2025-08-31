import { useState, useEffect, useMemo } from "react";
import { Activity, Filters } from "../types/activity";
import { mockActivities } from "../data/mockActivities";
import { applyFilters } from "../utils/filterHelpers";

const initialFilters: Filters = {
  search: "",
  type: "Todos",
  period: "Todo",
};

export const useFilteredActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  useEffect(() => {
    setActivities(mockActivities);
  }, []);

  const filteredActivities = useMemo(
    () => applyFilters(activities, filters),
    [activities, filters]
  );

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return {
    filters,
    handleFilterChange,
    activities,
    filteredActivities,
  };
};
