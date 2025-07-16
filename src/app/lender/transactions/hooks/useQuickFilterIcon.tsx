import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { ActivityType } from "../types/activity";
import { JSX } from "react";

export const useQuickFilterIcon = (
  type: ActivityType,
  isSelected: boolean
): JSX.Element | null => {
  const color = isSelected ? "white" : "black";

  switch (type) {
    case "Pago recibido":
      return <TrendingUpIcon sx={{ color }} />;
    case "Préstamo aprobado":
      return <TaskAltIcon sx={{ color }} />;
    case "Inversión realizada":
      return <SavingsOutlinedIcon sx={{ color }} />;
    default:
      return null;
  }
};
