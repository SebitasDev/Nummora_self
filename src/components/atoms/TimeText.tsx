import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Stack, Typography} from "@mui/material";
import React from "react";

interface TimeTextProps {
    timeFrame: string;
}

export const TimeText = ({timeFrame} : TimeTextProps) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
                {timeFrame}
            </Typography>
        </Stack>
    )
}