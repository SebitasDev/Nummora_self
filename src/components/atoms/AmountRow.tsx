import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";

type AmountRowProps = {
    label: string;
    value: string;
    bold?: boolean;
    green?: boolean;
} & BoxProps;

export const AmountRow: React.FC<AmountRowProps> = ({
                                                        label,
                                                        value,
                                                        bold = false,
                                                        sx,
                                                        green = false,
                                                        ...rest
                                                    }) => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            sx={sx}
            {...rest}
        >
            <Typography variant="body2" color="text.secondary">
                {label}
            </Typography>
            <Typography
                variant="body2"
                fontWeight={bold ? "bold" : "normal"}
                color={green ? 'success.light': bold ? "text.primary" : "text.secondary"}
            >
                {value}
            </Typography>
        </Box>
    );
};
