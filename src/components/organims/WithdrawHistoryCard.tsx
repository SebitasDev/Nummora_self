import {CustomCard} from "@/components/atoms/CustomCard";
import {CardContent, CardHeader, Typography} from "@mui/material";
import React from "react";
import {HistoryFileCard} from "@/components/molecules/HistoryFileCard";

export const WithdrawHistoryCard = () => {
    return (
        <CustomCard>
            <CardHeader
            title={
                <Typography variant="h5" fontWeight={700}>
                Historial de Retiros
            </Typography>            }
            subheader={<p>Tus ultimos movimientos en retiros</p>}/>
            <CardContent>
                <HistoryFileCard value={'50.000'} accountAddress={'asasdbaobsdahvsdpavhvaspva'} />
            </CardContent>
        </CustomCard>
    )
}