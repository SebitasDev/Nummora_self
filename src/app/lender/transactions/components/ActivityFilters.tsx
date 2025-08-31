// src/components/molecules/ActivityFilters.tsx
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Filters } from "../types/activity";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

interface Props {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
}

export const ActivityFilters = ({ filters, onFilterChange }: Props) => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  return (
    <CustomCard sx={{ p: 3 }}>
      <SectionHeader
        title={"Filtros"}
        icon={
          <FilterAltOutlinedIcon sx={{ color: "#2563EB" }} fontSize="large" />
        }
      />
      <Box
        display="flex"
        flexDirection={isMdUp ? "row" : "column"}
        gap={2}
        sx={{ mt: 3 }}
      >
        <Box flex={1} minWidth={240}>
          <Typography fontWeight="bold" mb={1}>
            Buscar
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Buscar actividad"
            value={filters.search}
            onChange={(e) => onFilterChange("search", e.target.value)}
          />
        </Box>
        <Box flex={1} minWidth={180}>
          <Typography fontWeight="bold" mb={1}>
            Tipo
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={filters.type}
            onChange={(e) => onFilterChange("type", e.target.value)}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Pago recibido">Pago recibido</MenuItem>
            <MenuItem value="Préstamo aprobado">Préstamo aprobado</MenuItem>
            <MenuItem value="Inversión realizada">Inversión realizada</MenuItem>
          </TextField>
        </Box>
        <Box flex={1} minWidth={180}>
          <Typography fontWeight="bold" mb={1}>
            Período
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={filters.period}
            onChange={(e) => onFilterChange("period", e.target.value)}
          >
            <MenuItem value="Todo">Todo</MenuItem>
            <MenuItem value="Hoy">Hoy</MenuItem>
            <MenuItem value="Últimos 7 días">Últimos 7 días</MenuItem>
            <MenuItem value="Este mes">Este mes</MenuItem>
          </TextField>
        </Box>
      </Box>
    </CustomCard>
  );
};
