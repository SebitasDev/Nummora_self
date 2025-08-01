// src/hooks/useActivityCardInfo.ts
import { useTheme, useMediaQuery } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { Activity } from "../types/activity";
import Theme from "@/theme/theme";

export const useActivityCardInfo = (activity: Activity) => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;

  const getStatusColor = (status: Activity["status"]) => {
    switch (status) {
      case "Completado":
        return "#E8F9F0";
      case "Procesando":
        return "#FFFDBD";
      case "Activo":
        return "#E1EEFF";
      default:
        return "default";
    }
  };

  const getStatusLabelColor = (status: Activity["status"]) => {
    switch (status) {
      case "Completado":
        return theme.palette.primary.dark;
      case "Procesando":
        return "#7B491F";
      case "Activo":
        return "#2563EB";
      default:
        return "black";
    }
  };

  const getActivityIconStyles = (title: Activity["title"]) => {
    switch (title) {
      case "Pago recibido":
        return {
          icon: <TrendingUpIcon sx={{ color: "#4ADE80" }} />,
          bgColor: "#edfdf4",
        };
      case "Préstamo aprobado":
        return {
          icon: <TaskAltIcon sx={{ color: "#60A5FA" }} />,
          bgColor: "#eaf4fd",
        };
      case "Inversión realizada":
        return {
          icon: <SavingsOutlinedIcon sx={{ color: "#C084FC" }} />,
          bgColor: "#F3E8FF",
        };
      default:
        return {
          icon: null,
          bgColor: "#E0E0E0",
        };
    }
  };

  const { icon, bgColor } = getActivityIconStyles(activity.title);

  return {
    icon,
    bgColor,
    isMdUp,
    theme,
    themeMUI,
    statusColor: getStatusColor(activity.status),
    statusLabelColor: getStatusLabelColor(activity.status),
  };
};
