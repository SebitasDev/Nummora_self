import { Chip, ChipProps } from "@mui/material";
import React from "react";


export const Batch: React.FC<ChipProps> = ({ sx, ...rest }: ChipProps) => {

    return (
        <Chip
            size={'small'}
            sx={{
                fontWeight: "bold",
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.7rem',
                    md: '0.8rem',
                    lg: '0.8rem',
                },
                borderRadius: "18px",
                px: { xs: 1.5, sm: 2 },
                textTransform: "capitalize",
                ...sx,
            }}
            {...rest}
        />
    );
};
