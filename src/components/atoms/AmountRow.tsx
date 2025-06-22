import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";

type AmountRowProps = {
    label: string;
    value: string;
    bold?: boolean;
    chipStyle?: boolean;
} & BoxProps;

export const AmountRow: React.FC<AmountRowProps> = ({
                                                        label,
                                                        value,
                                                        bold = false,
    chipStyle = false,
                                                        sx,
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
                color={chipStyle ? "success.main" : bold ? "text.primary" : "text.secondary"}
                sx={
                    chipStyle
                        ? {
                            backgroundColor: "success.light",
                            color: "black",
                        padding: "2px",
                            borderRadius: 6,
                            fontWeight: "medium",
                        }
                        : undefined
                }
            >
                {value}
            </Typography>
        </Box>
    );
};
