import { Box, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useInvest } from "@/app/lender/invest/hooks";

export const AssuranceSecurity = () => {
  const { theme, themeMUI, isMobile } = useInvest();

  return (
    <Box>
      <Typography
        variant="h6"
        fontSize={"18px"}
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        Garantía de Seguridad
      </Typography>
      <CustomCard
        sx={{
          backgroundColor: "#F0FDF4",
          border: "1.5px solid #BBF7D0",
          p: 1.2,
          display: "flex",
        }}
      >
        <ShieldOutlinedIcon
          sx={{
            color: theme.palette.primary.dark,
            mr: 1,
            mt: 0.2,
            fontSize: "1.3rem",
          }}
        />
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            Inversión 100% Segura
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              mb: 1,
            }}
          >
            Tu dinero está completamente protegido con garantías respaldadas por
            el fondo de seguridad de Nummora.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                width: "50%",
              }}
            >
              <CheckCircleOutlinedIcon
                sx={{
                  color: theme.palette.primary.dark,
                  mr: 0.5,
                  fontSize: 16,
                  mt: isMobile ? 0 : 0.2,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  [themeMUI.breakpoints.down("md")]: {
                    lineHeight: 1.2,
                  },
                }}
              >
                Rentabilidad aproximada del 4% - 12% anual
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "50%",
              }}
            >
              <ShieldOutlinedIcon
                sx={{
                  color: theme.palette.primary.dark,
                  mr: 0.5,
                  fontSize: 16,
                  mt: isMobile ? 0 : 0.2,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  [themeMUI.breakpoints.down("md")]: {
                    lineHeight: 1.2,
                  },
                }}
              >
                Capital protegido
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomCard>
    </Box>
  );
};
