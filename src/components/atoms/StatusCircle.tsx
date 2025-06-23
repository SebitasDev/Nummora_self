'use client';

import {Box} from "@mui/material";
import {BoxProps} from "@mui/system";

interface StatusCircleProps extends BoxProps{
    statusColor: string;
}

export const StatusCircle = (
    { statusColor = "gray", sx, ...props } : StatusCircleProps
) => {
    return (
        <Box
            {...props}
            sx={{
                width: "15px",
                height: "15px",
                backgroundColor: `${statusColor}`,
                borderRadius: "100%",
                marginRight: "5px",
                ...sx
            }}
        >
            
        </Box>
    )
}