import React from "react";
import { Box, Typography } from "@mui/material";
import { AmountRow } from "@/components/atoms/AmountRow";

type ResumenDelRetiroProps = {
    montoSolicitado: string;
    comision: string;
    totalRecibir: string;
};

export const ResumenDelRetiro: React.FC<ResumenDelRetiroProps> = ({
                                                                      montoSolicitado,
                                                                      comision,
                                                                      totalRecibir,
                                                                  }) => {
    return (
        <Box
            mt={2}
            p={2}
            border="1px solid #e0e0e0"
            borderRadius={2}
            bgcolor="#FAFAFA"
        >
            <Typography variant="subtitle2" fontWeight="bold" mb={2}>
                Resumen del Retiro
            </Typography>

            <AmountRow label="Monto solicitado" value={montoSolicitado} />
            <AmountRow label="Comisión" value={comision} />
            <AmountRow
                label="Total a recibir"
                value={totalRecibir}
                bold
                chipStyle
            />
        </Box>
    );
};
