import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box, Typography} from "@mui/material";
import React from "react";

export const TimeText = ({timeFrame}) => {
    return (
        <Box display="flex" spacing={1}>
            <AccessTimeIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
                {timeFrame}
            </Typography>
        </Box>
    )
}