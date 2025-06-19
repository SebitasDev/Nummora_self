import React, { useState } from 'react';
import {Box, InputAdornment, Stack, Button, FormControl, OutlinedInput, Typography} from '@mui/material';

export const AmountInput = () => {
    const [amount, setAmount] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSelectAmount = (value: number | "all") => {
        if (value === "all") {
            setAmount("123456");
        } else {
            setAmount(value.toString());
        }
    };

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
                Monto a Retirar
            </Typography>
            <FormControl fullWidth >
                <OutlinedInput
                    id="standard-adornment-amount"
                    value={amount}
                    onChange={handleChange}
                    placeholder="0"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>

            <Stack direction="row" spacing={1} mt={2}>
                {[25000, 50000, 100000].map(value => (
                    <Button
                        key={value}
                        sx={{
                            borderColor: 'rgba(0, 0, 0, 0.3)',
                            fontWeight: 'bold',
                            color: 'black',
                            textTransform: 'none',
                        }}
                        variant="outlined"
                        onClick={() => handleSelectAmount(value)}
                    >
                        ${value.toLocaleString('es-CO')}
                    </Button>
                ))}
                <Button
                    variant="outlined"
                    onClick={() => handleSelectAmount("all")}
                    sx={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        color: 'black',
                    }}>
                    Total
                </Button>
            </Stack>
        </Box>
    );
};
