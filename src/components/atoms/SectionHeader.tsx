import { Box, Typography } from "@mui/material";
import React from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    titleSize?: number;
    subtitleSize?: number;
    icon?: React.ReactNode;
}

export default function SectionHeader(
    { title, subtitle, titleSize, subtitleSize, icon } : SectionHeaderProps
) {
    return (
        <Box>
            <Box 
                display="flex"
                alignItems="center"
                gap={1}
            >
                {icon}
                <Typography
                    variant="h5" 
                    fontWeight="bold" 
                    color="text.primary"
                    sx={{
                        fontSize: titleSize
                    }}
                >
                    {title}
                </Typography>
            </Box>
            {subtitle && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={0.5}
                    sx={{
                        fontSize: subtitleSize
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    )
}