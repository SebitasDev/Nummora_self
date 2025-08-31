import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CustomProgressProps {
    value: number;
    color: string;
}

export const CustomProgress = ({ value, color }: CustomProgressProps) => {
    const [displayedValue, setDisplayedValue] = useState(0);
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const frameRate = 1000 / 60;
        const steps = duration / frameRate;
        const stepValue = value / steps;

        const interval = setInterval(() => {
            start += stepValue;
            if (start >= value) {
                setDisplayedValue(value);
                setBarWidth(value);
                clearInterval(interval);
            } else {
                setDisplayedValue(Math.round(start));
                setBarWidth(start);
            }
        }, frameRate);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                sx={{
                    width: "100px",
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: `${barWidth}%`,
                        height: "100%",
                        backgroundColor: color,
                        transition: "width 0.2s ease-out",
                    }}
                />
            </Box>
            <Typography fontWeight="bold">{displayedValue}%</Typography>
        </Box>
    );
}
