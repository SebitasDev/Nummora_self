"use client";

import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import { AttachMoney } from "@mui/icons-material";
import { useInvest } from "@/app/lender/invest/hooks";

export const InvestAmount = () => {
  const { amount, setAmount, theme } = useInvest();

  const presetAmounts = [100000, 500000, 1000000, 2000000];
  const popularAmounts = [100000, 2000000];

  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        fontSize={"18px"}
        sx={{ mb: 1 }}
      >
        Monto a Invertir
      </Typography>

      <TextField
        fullWidth
        type="number"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoney sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 1.7,
            borderColor: "rgb(143,147,143, 0.3)",
            height: 48,
            fontSize: theme.fontSize.input,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
        }}
      >
        {presetAmounts.map((preset) => (
          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 0,
              width: `calc(50% - 4px)`,
            }}
            key={preset}
          >
            <Button
              size="medium"
              fullWidth
              disableRipple
              onClick={() => setAmount(preset)}
              sx={{
                position: "relative",
                border: "1px solid rgb(143,147,143, 0.3)",
                color: "black",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(143,147,143,0.11)",
                },
                ...(popularAmounts.includes(preset) && {
                  backgroundColor: "#FFF7ED",
                  border:
                    "1px solid rgb(253 186 116 / var(--tw-border-opacity, 1))",
                  color: "rgb(194 65 12 / var(--tw-text-opacity, 1))",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#FFEDD5",
                    "&.MuiButton-outlined": {
                      borderColor: "#C24113",
                    },
                  },
                }),
              }}
            >
              ${preset.toLocaleString()}
              {popularAmounts.includes(preset) && (
                <Typography
                  component="span"
                  sx={{
                    position: "absolute",
                    top: -7,
                    right: -6,
                    fontSize: "0.7rem",
                  }}
                >
                  🔥
                </Typography>
              )}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
