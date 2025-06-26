import {Box, InputAdornment, Stack, Button, FormControl, OutlinedInput, Typography} from '@mui/material';
import {BoxProps} from "@mui/system";
import {useAmountInput} from "@/app/lender/withdraw/hooks/useAmountInput";

export const AmountInput = ({sx, ...rest}: BoxProps) => {
    const { amount, handleChange, handleSelectAmount } = useAmountInput();

    return (
        <Box
        sx={{
            ...sx
        }}
        {...rest}
        >
            <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
                Monto a Retirar
            </Typography>
            <FormControl fullWidth >
                <OutlinedInput
                    sx={{
                        fontSize: {
                            xs: '0.9rem',
                            sm: '1rem',
                            md: '1rem',
                            lg: '1rem',
                        },
                    }}
                    id="standard-adornment-amount"
                    value={amount}
                    onChange={handleChange}
                    placeholder="0"
                    startAdornment={
                    <InputAdornment

                        position="start"
                    >
                        $
                    </InputAdornment>}
                />
            </FormControl>

            <Stack
                direction="row"
                display="flex"
                flexWrap="wrap"
            >
                {[25000, 50000, 100000].map(value => (
                    <Button
                        key={value}
                        sx={{
                            borderColor: 'rgba(0, 0, 0, 0.3)',
                            fontWeight: 'bold',
                            width: "20%",
                            height: '10%',
                            color: 'black',
                            marginRight: '0.5rem',
                            mt: '0.6rem',
                            textTransform: 'none',
                            fontSize: {
                                xs: '0.6rem',
                                sm: '0.7rem',
                                md: '0.8rem',
                                lg: '0.8rem',
                            },
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
                        width: '20%',
                        height: '10%',
                        mt: "0.6rem",
                        fontSize: {
                            xs: '0.6rem',
                            sm: '0.7rem',
                            md: '0.8rem',
                            lg: '0.8rem',
                        },
                    }}>
                    Total
                </Button>
            </Stack>

        </Box>
    );
};
