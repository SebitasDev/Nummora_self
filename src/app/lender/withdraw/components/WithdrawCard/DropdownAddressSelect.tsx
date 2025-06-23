import React from "react";
import {
    Box,
    FormControl, InputLabel,
    MenuItem,
    Select, SelectChangeEvent,
    Typography
} from "@mui/material";

interface DropdownAddressSelectProps {
    options: string[];
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
};

export const DropdownAddressSelect: React.FC<DropdownAddressSelectProps> = ({ options = [], value, onChange}) => {
    return (
        <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                Cuenta de destino
            </Typography>

            <FormControl fullWidth size="small">
                <InputLabel htmlFor="Select-account">Selecciona una Direccion</InputLabel>
                <Select
                    labelId="address-select-label"
                    id="address-select"
                    value={value}
                    onChange={onChange}
                    sx={{
                        borderRadius: 2,
                        backgroundColor: "#FAFAFA",
                        fontSize: 14,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
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

export const shortenAddress = (addr: string): string =>
    addr.length > 10 ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : addr;
