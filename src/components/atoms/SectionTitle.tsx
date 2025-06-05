'use client';

import { Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SectionTitle({ children, sx, ...rest }: TypographyProps) {
    const theme = useTheme();

    return (
        <Typography
            variant="body2"
            sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'text.primary',
                textAlign: 'inherit',
                [theme.breakpoints.down('md')]: {
                    fontSize: '17px',
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Typography>
    );
}