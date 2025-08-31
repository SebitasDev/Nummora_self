import {Button, ButtonProps, useTheme} from "@mui/material";
import React from "react";

interface CustomButtonProps extends ButtonProps {}

export const CustomButton = (
    {children, sx, ...rest } : CustomButtonProps
) => {
    const themeMUI = useTheme();
    return (
        <Button
            variant="outlined"
            sx={{
                color: "text.primary",
                borderColor: "#E4E4E7",
                fontSize: 15,
                fontWeight: "600",
                textTransform: "none",
                borderRadius: 1.8,
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)"
                },
                [themeMUI.breakpoints.down("md")]: {
                    marginLeft: "auto"
                },
                ...sx
            }}
            {...rest}
        >
            {children}
        </Button>
    )
}