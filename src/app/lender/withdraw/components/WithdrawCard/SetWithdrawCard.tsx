import { AmountInput } from "@/app/lender/withdraw/components/WithdrawCard/AmountInput";
import {
  Button,
  CardContent,
  CardHeader,
  Typography,
  Stack,
} from "@mui/material";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import { CustomCard } from "@/components/atoms/CustomCard";
import { WithdrawMethod } from "@/app/lender/withdraw/components/WithdrawCard/WithdrawMethod";
import React, { useState } from "react";

export const SetWithdrawCard = () => {
  const [selectedAddress, setSelectedAddress] = useState("");

  return (
    <CustomCard sx={{ p: 1.7 }}>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccountBalanceWalletOutlined sx={{ color: "success.light" }} />
            <Typography variant="h5" fontWeight={700}>
              Configurar Retiro
            </Typography>
          </Stack>
        }
        subheader={<p>Selecciona el metodo y monto que deseas retirar</p>}
      />
      <CardContent>
        <AmountInput sx={{ mb: 4 }} />
        <WithdrawMethod
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        ></WithdrawMethod>
        <Button
          disabled={selectedAddress === ""}
          sx={{
            bgcolor: "success.light",
            width: "100%",
            marginTop: 4,
          }}
          variant="contained"
        >
          Confirmar Retiro
        </Button>
      </CardContent>
    </CustomCard>
  );
};
