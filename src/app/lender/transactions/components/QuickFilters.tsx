import { Box, Card, CardHeader } from "@mui/material";
import { CustomButton } from "@/components/atoms/CustomButton";
import { Filters } from "../types/activity";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";

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
        {typeOptions.map((option) => (
          <CustomButton
            key={option.value}
            variant={filters.type === option.value ? "contained" : "outlined"}
            color={filters.type === option.value ? "primary" : "inherit"}
            onClick={() => onFilterChange("type", option.value)}
            sx={{
              width: "100%",
              justifyContent: "start",
              bgcolor: filters.type === option.value ? "grey.900" : "white",
              color: filters.type === option.value ? "white" : "black",
              "&:hover": {
                bgcolor:
                  filters.type === option.value ? "grey.800" : "grey.100",
              },
            }}
          >
            {option.label}
          </CustomButton>
        ))}

        <CustomButton
          variant="outlined"
          sx={{
            width: "100%",
            justifyContent: "start",
            color: "text.secondary",
          }}
        >
          Ver Todas
        </CustomButton>
      </Box>
    </CustomCard>
  );
};
