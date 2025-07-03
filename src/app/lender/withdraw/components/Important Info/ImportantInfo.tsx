import { Typography, Stack, CardHeader, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CustomCard } from "@/components/atoms/CustomCard";

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
  const fontSize = {
    xs: "0.7rem",
    sm: "0.9rem",
    md: "1rem",
  };
  return (
    <CustomCard sx={{ p: 1.2 }}>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <ErrorOutlineIcon color="warning" />
            <Typography variant="h5" fontWeight={700}>
              Información Importante
            </Typography>
          </Stack>
        }
      />
      <CardContent>
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
      </CardContent>
    </CustomCard>
  );
}
