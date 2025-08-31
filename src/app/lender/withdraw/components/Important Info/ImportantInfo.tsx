import { Typography, Stack, CardHeader, CardContent, Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";

const infoRows = [
  {
    icon: <CheckCircleOutlineIcon color="success" fontSize="small" />,
    text: "Los retiros se procesan de lunes a viernes",
  },
  {
    icon: <CheckCircleOutlineIcon color="success" fontSize="small" />,
    text: "Monto mínimo de retiro: $10,000",
  },
  {
    icon: <CheckCircleOutlineIcon color="success" fontSize="small" />,
    text: "Sin límite máximo de retiro",
  },
  {
    icon: <ErrorOutlineIcon color="warning" fontSize="small" />,
    text: "Las comisiones varían según el método seleccionado",
  },
];

export default function ImportantInfo() {
  const fontSize = "16px";
  return (
    <CustomCard sx={{ p: 1.2 }}>
      <CardHeader
        title={
          <SectionHeader
            title="Información Importante"
            icon={<ErrorOutlineIcon color="warning" />}
          />
        }
      />
      <Box sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          {infoRows.map((row, idx) => (
            <Stack key={idx} direction="row" alignItems="center" spacing={1}>
              {row.icon}
              <Typography variant="body1" sx={{ fontSize }}>
                {row.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </CustomCard>
  );
}
