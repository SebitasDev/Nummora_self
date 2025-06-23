import { Card, CardProps } from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material";

export const CustomCard = ({ children, sx, ...rest }: CardProps) => {
   const themeMUI = useTheme();
    return (
        <Card
            elevation={1}
            variant="outlined"
            sx={{
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",
                ...sx,
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                },
            }}
            {...rest}
        >
            {children}
        </Card>
    );
};
