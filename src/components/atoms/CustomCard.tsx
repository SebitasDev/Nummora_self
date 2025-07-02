import {Box, BoxProps} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material";

export const CustomCard = ({ children, sx, ...rest }: BoxProps) => {
   const themeMUI = useTheme();
    return (
        <Box
            sx={{
                p: 2.9,
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                border: "1px solid #E0E0E0",
                backgroundColor: "#fff",
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};
