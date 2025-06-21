import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";


type AmountRowProps = {
    label: string;
    value: string;
    bold?: boolean;
};

export const AmountRow: React.FC<AmountRowProps> = ({ label, value, bold = false }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="body2" color="text.secondary">
                {label}
            </Typography>
            <Typography
                variant="body2"
                fontWeight={bold ? "bold" : "normal"}
                color={bold ? "text.primary" : "text.secondary"}
            >
                {value}
            </Typography>
        </Box>
    );
};
