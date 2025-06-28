import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box, Typography} from "@mui/material";
import React from "react";

interface TimeTextProps {
    timeFrame: string;
}

export const TimeText = ({timeFrame}:TimeTextProps) => {
    return (
        <Box display="inline-flex" gap={0.4} >
            <AccessTimeIcon
                sx=
                    {{
                        fontSize: {
                            xs: '0.6rem',
                            sm: '0.7rem',
                            md: '0.8rem',
                            lg: '0.8rem',
                        },
                        color: "text.secondary"
                }}
            />
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    fontSize: {
                        xs: '0.6rem',
                        sm: '0.7rem',
                        md: '0.8rem',
                        lg: '0.8rem',
                    },
                }}
            >
                {timeFrame}
            </Typography>
        </Box>
    )
}