import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export const useWithdrawCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));

  const addressOptions = [
    "0x89a2F4c3DcaE7d8e97aBC4c5C121AE344321B67D",
    "0xbc1qxv2k8dbhfX7fhxOwlh28A3EFc289a762D9A1",
  ];

  return {
    expanded,
    handleToggle,
    isMdUp,
    addressOptions,
  };
};
