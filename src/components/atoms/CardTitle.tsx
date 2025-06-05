'use client';

import { Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function CardTitle({ children, sx, ...rest }: TypographyProps) {
    const theme = useTheme();

    return (
        <Typography
            variant="body2"
            sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'text.primary',
                textAlign: 'inherit',
                [theme.breakpoints.down('md')]: {
                    fontSize: '18px',
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Typography>
    );
}