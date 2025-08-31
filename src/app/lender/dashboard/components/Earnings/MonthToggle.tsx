import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useMonthToggle } from "@/app/lender/dashboard/hooks";

export const MonthToggle = () => {
  const { period, handleChange, themeMUI } = useMonthToggle();

  return (
    <ToggleButtonGroup
      value={period}
      exclusive
      onChange={handleChange}
      sx={{
        backgroundColor: "#f3f4f6",
        borderRadius: 2,
        padding: "4px",
        "& .MuiToggleButtonGroup-grouped": {
          border: "none",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          padding: "6px 16px",
          margin: "2px",
          borderRadius: "8px",
          transition: "all 0.2s ease",
          color: "#9ca3af",

          "&:hover": {
            backgroundColor: "#e5e7eb",
          },

          "&.Mui-selected": {
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
          },

          [themeMUI.breakpoints.down("md")]: {
            fontSize: "0.775rem",
            padding: "6px 11px",
            margin: "1px",
          },
        },
      }}
    >
      <ToggleButton value="3">3M</ToggleButton>
      <ToggleButton value="6">6M</ToggleButton>
      <ToggleButton value="12">12M</ToggleButton>
    </ToggleButtonGroup>
  );
};
