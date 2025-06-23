import {Box, Typography} from "@mui/material";
import {CustomProgress} from "@/components/atoms/CustomProgress";
import React from "react";

interface PerformanceProgressProps {
    value?: number;
    color?: string;
    name?: string;
}

export const PerformanceMetricProgress = (
    { value = 10, color = "gray", name = "Null" } : PerformanceProgressProps
) => {
    
    return(
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography color={"gray"} fontWeight={"bold"}>
                {name}
            </Typography>
            <CustomProgress value={value} color={color} />
        </Box>
    )
}