import { Avatar, Box, Typography } from "@mui/material";
import Theme from "@/theme/theme";
import { CustomCard } from "@/components/atoms/CustomCard";
import { CustomChip } from "@/components/atoms/CustomChip";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const UserProfileDashboard = () => {
  const theme = Theme;
  return (
    <CustomCard
      sx={{
        gridColumn: "1 / -1",
        order: 0,
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.7,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src="https://i.postimg.cc/k5tRM8Gn/77c54bad-b949-4ba7-b26e-1a22158b4768.png"
              alt="Descripción"
            />
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                Pepito
              </Typography>
              <CustomChip
                sx={{
                  fontSize: "10px",
                  backgroundColor: "#DCFCE7",
                  color: theme.palette.primary.dark,
                  px: 1,
                  width: "6rem",
                }}
              >
                ✓ Inversionista
              </CustomChip>
            </Box>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#9ca3af",
                textAlign: "left",
                fontWeight: "500",
              }}
            >
              Verificado
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
          <SettingsOutlinedIcon />
          <LogoutOutlinedIcon />
        </Box>
      </Box>
    </CustomCard>
  );
};
