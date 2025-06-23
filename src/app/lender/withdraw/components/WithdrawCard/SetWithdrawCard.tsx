import {Stack, useTheme} from "@mui/system"
import {AmountInput} from "@/app/lender/withdraw/components/WithdrawCard/AmountInput";
import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import CustomCard from "@mui/material/Card";
import {WithdrawMethod} from "@/app/lender/withdraw/components/WithdrawCard/WithdrawMethod";
import React, {useState} from "react";
import {DropdownAddressSelect} from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import {WithdrawSummary} from "@/app/lender/withdraw/components/WithdrawCard/WithdrawSummary";
import { SelectChangeEvent } from '@mui/material/Select';

export const  SetWithdrawCard = () => {
    const [expanded, setExpanded] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");
    const addressOptions = [
        "0x89a2F4c3DcaE7d8e97aBC4c5C121AE344321B67D",
        "0xbc1qxv2k8dbhfX7fhxOwlh28A3EFc289a762D9A1",
    ];
    const handleAddressChange = (event: SelectChangeEvent) => {
        setSelectedAddress(event.target.value);
    };

    return(
        <CustomCard
        elevation={1}
        variant="outlined"
        sx={{p: 1.7
        }}
        >
            <CardHeader
                title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <AccountBalanceWalletOutlined sx={{ color: "success.light" }} />
                        <Typography variant="h5" fontWeight={700}>
                            Configurar Retiro
                        </Typography>
                    </Stack>
                }
                subheader={
                <p>Selecciona el metodo y monto que deseas retirar</p>
            }
            />
            <CardContent>
                <AmountInput
                sx={{
                    marginBottom: 5
                }}
                />
                <WithdrawMethod selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress}></WithdrawMethod>
                <Button
                    disabled={selectedAddress === ''}
                    sx={{
                        bgcolor: "success.light",
                        width: "100%",
                        marginTop: 4
                }}
                    variant="contained">
                    Confirmar Retiro
                </Button>
                {expanded && (
                    <Box px={2} pb={2} pt={1}>
                        <DropdownAddressSelect
                            options={addressOptions}
                            value={selectedAddress}
                            onChange={handleAddressChange}
                        />


                        <WithdrawSummary
                            montoSolicitado="$100.000"
                            comision="$1.500"
                            totalRecibir="$98.500"
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth

                            sx={{ mt: 2, borderRadius: 2, textTransform: "none" }}
                        >
                            Confirmar Retiro
                        </Button>
                    </Box>
                )}
            </CardContent>
        </CustomCard>
    )
}