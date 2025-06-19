import { Chip, ChipProps } from "@mui/material";
import React from "react";

type BatchType = "seleccionar" | "completado" | "procesando";

interface BatchProps extends Omit<ChipProps, "type"> {
    type: BatchType;
}

export const Batch: React.FC<BatchProps> = ({ type, sx, ...rest }) => {
    const config = {
        seleccionar: {
            label: "Seleccionar",
            bgcolor: "#E8F9F0",
            color: "green",
        },
        completado: {
            label: "Completado",
            bgcolor: "#E8F9F0",
            color: "green",
        },
        procesando: {
            label: "Procesando",
            bgcolor: "#FFF8E1",
            color: "#FFA000",
        },
    };

    const { label, bgcolor, color } = config[type];

    return (
        <Chip
            label={label}
            clickable={type === "seleccionar"}
            sx={{
                bgcolor,
                color,
                fontWeight: "bold",
                fontSize: 14,
                borderRadius: "18px",
                px: 2,
                ...sx,
            }}
            {...rest}
        />
    );
};
