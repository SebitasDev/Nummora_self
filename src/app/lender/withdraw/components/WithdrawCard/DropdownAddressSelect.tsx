import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useShortenedAddress } from "@/app/lender/dashboard/hooks/useShortenedAddress";

interface DropdownAddressSelectProps {
  options: string[];
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export const DropdownAddressSelect = ({
  options = [],
  value,
  onChange,
}: DropdownAddressSelectProps) => {
  const shortenAddress = useShortenedAddress;
  return (
    <Box display="flex" flexDirection="column" gap={1} width="100%">
      <Typography variant="subtitle2" fontWeight="bold" mb={1}>
        Cuenta de destino
      </Typography>

      <FormControl fullWidth size="small">
        <InputLabel
          htmlFor="Select-account"
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "0.7rem",
              md: "0.8rem",
            },
          }}
        >
          Selecciona una Direccion
        </InputLabel>
        <Select
          labelId="address-select-label"
          id="address-select"
          value={value}
          onChange={onChange}
          sx={{
            borderRadius: 2,
            backgroundColor: "#FAFAFA",
            fontSize: 14,
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
          }}
        >
          {options.map((address) => (
            <MenuItem key={address} value={address}>
              {shortenAddress(address)}
            </MenuItem>
          ))}
          <MenuItem
            value="add-new"
            sx={{ fontStyle: "italic", color: "primary.main" }}
          >
            ➕ Agregar nueva dirección
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
