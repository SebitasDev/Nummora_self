import {
  Box,
  InputAdornment,
  Stack,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  BoxProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useInvestAmount } from "@/app/lender/withdraw/hooks/useInvestAmount";
import Theme from "@/theme/theme";

export const AmountInput = ({ sx, ...rest }: BoxProps) => {
  const { amount, handleChange, handleSelectAmount } = useInvestAmount();
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;
  return (
    <Box sx={{ ...sx }} {...rest}>
      <Typography variant="subtitle1" fontWeight={"bold"} mb={1}>
        Monto a Retirar
      </Typography>
      <FormControl fullWidth>
        <OutlinedInput
          sx={{
            fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
            letterSpacing: "-0.5px",
            [themeMUI.breakpoints.down("md")]: {
              fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
            },
          }}
          id="standard-adornment-amount"
          value={amount}
          onChange={handleChange}
          placeholder="0"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>

      <Stack direction="row" display="flex" flexWrap="wrap">
        {[25000, 50000, 100000].map((value) => (
          <Button
            key={value}
            sx={{
              borderColor: "rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
              width: "30%",
              height: "10%",
              color: "black",
              marginRight: "0.5rem",
              mt: "0.6rem",
              textTransform: "none",
              fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
              letterSpacing: "-0.5px",
              [themeMUI.breakpoints.down("md")]: {
                fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
              },
            }}
            variant="outlined"
            onClick={() => handleSelectAmount(value)}
          >
            ${value.toLocaleString("es-CO")}
          </Button>
        ))}
        <Button
          variant="outlined"
          onClick={() => handleSelectAmount("all")}
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
            textTransform: "none",
            color: "black",
            width: "30%",
            height: "10%",
            mt: "0.6rem",
            fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
            letterSpacing: "-0.5px",
            [themeMUI.breakpoints.down("md")]: {
              fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
            },
          }}
        >
          Total
        </Button>
      </Stack>
    </Box>
  );
};
