import { Box } from "@mui/material";
import { CustomButton } from "@/components/atoms/CustomButton";
import { Filters } from "../types/activity";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { useQuickFilterIcon } from "../hooks/useQuickFilterIcon";

interface Props {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
}

const typeOptions = [
  { label: "Pagos Recibidos", value: "Pago recibido" },
  { label: "Préstamos Aprobados", value: "Préstamo aprobado" },
  { label: "Inversiones Realizadas", value: "Inversión realizada" },
];

export const QuickFilters = ({ filters, onFilterChange }: Props) => {
  return (
    <CustomCard sx={{ p: 3 }}>
      <SectionHeader title="Filtros Rápidos" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 3,
        }}
      >
        {typeOptions.map((option) => {
          const isActive = filters.type === option.value;
          const icon = useQuickFilterIcon(
            option.value as Filters["type"],
            isActive
          );

          return (
            <CustomButton
              key={option.value}
              startIcon={icon}
              variant={isActive ? "contained" : "outlined"}
              color={isActive ? "primary" : "inherit"}
              onClick={() => onFilterChange("type", option.value)}
              sx={{
                width: "100%",
                justifyContent: "start",
                bgcolor: isActive ? "grey.900" : "white",
                color: isActive ? "white" : "black",
                "&:hover": {
                  bgcolor: isActive ? "grey.800" : "grey.100",
                },
              }}
            >
              {option.label}
            </CustomButton>
          );
        })}

        <CustomButton
          variant={filters.type === "Todos" ? "contained" : "outlined"}
          color={filters.type === "Todos" ? "primary" : "inherit"}
          onClick={() => onFilterChange("type", "Todos")}
          sx={{
            width: "100%",
            justifyContent: "start",
            bgcolor: filters.type === "Todos" ? "grey.900" : "white",
            color: filters.type === "Todos" ? "white" : "black",
            "&:hover": {
              bgcolor: filters.type === "Todos" ? "grey.800" : "grey.100",
            },
          }}
        >
          Ver Todas
        </CustomButton>
      </Box>
    </CustomCard>
  );
};
