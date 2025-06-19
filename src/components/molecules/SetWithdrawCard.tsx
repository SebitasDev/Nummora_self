import {Stack, useTheme} from "@mui/system"
import {AmountInput} from "@/components/atoms/AmountInput";
import { CardContent, CardHeader, FormControl, Input, InputAdornment, InputLabel, Typography} from "@mui/material";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import CustomCard from "@mui/material/Card";

export const  SetWithdrawCard = () => {
    const theme = useTheme();
    return(
        <CustomCard
        elevation={1}
        variant="outlined"
        sx={{p:2
        }}
        >
            <CardHeader
                title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <AccountBalanceWalletOutlined sx={{ color: "success.main" }} />
                        <Typography variant="h5" fontWeight={700}>
                            Configurar Retiro
                        </Typography>
                    </Stack>
                }
                subheader={<p>Selecciona el metodo y monto que deseas retirar</p>}
            />
            <CardContent>
                <AmountInput/>
            </CardContent>
        </CustomCard>
    )
}