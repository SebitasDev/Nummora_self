import { Chip, ChipProps } from "@mui/material";
import React from "react";


export const Batch: React.FC<ChipProps> = ({ sx, ...rest }: ChipProps) => {

    return (
        <Chip
            size={'small'}
            sx={{
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
