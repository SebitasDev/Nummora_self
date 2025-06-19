import { Card, CardProps } from "@mui/material";
import React from "react";

export const CustomCard = ({ children, sx, ...rest }: CardProps) => {
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
            }}
            {...rest}
        >
            {children}
        </Card>
    );
};
