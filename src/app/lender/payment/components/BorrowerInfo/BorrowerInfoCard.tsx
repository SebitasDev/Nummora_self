import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { useShortenedAddress } from "@/app/lender/dashboard/hooks/useShortenedAddress";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Theme from "@/theme/theme";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

export const BorrowerInfoCard = () => {
  const theme = Theme;
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const shortenAddress = useShortenedAddress;
  return (
    <CustomCard display="flex" flexDirection="column" gap={3} p={3}>
      <SectionHeader
        title="Informacion del deudor"
        icon={
          <PersonOutlineIcon
            fontSize="large"
            sx={{ color: theme.palette.secondary.light }}
          />
        }
      />
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          sx={{
            bgcolor: "#f4f5f7",
            color: "#f4f5f7",
            width: {
              xs: 35,
              md: 40,
            },
            height: {
              xs: 35,
              md: 40,
            },
          }}
        ></Avatar>
        <Stack spacing={1}>
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight="bold"
            sx={{
              fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
              letterSpacing: "-0.5px",
              [themeMUI.breakpoints.down("md")]: {
                fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
              },
              width: "fit-content",
            }}
          >
            Maria Gonzales
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
            fontSize={isMdUp ? 14 : 11}
          >
            Score : 750
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "0.3rem",
        }}
        position={"initial"}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          fontSize={isMdUp ? 14 : 11}
          fontWeight="bold"
        >
          Direccion del pago
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          fontSize={isMdUp ? 14 : 11}
          fontWeight="bold"
        >
          {shortenAddress("0x4c0896bBfA45B0f2F59C758D05F5f12e8456A987")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "0.3rem",
        }}
        position={"initial"}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          fontSize={isMdUp ? 14 : 11}
          fontWeight="bold"
        >
          Total Prestamos
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight="bold"
          fontSize={isMdUp ? 14 : 11}
        >
          3 activos
        </Typography>
      </Box>
    </CustomCard>
  );
};
