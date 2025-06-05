'use client';

import { Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {Currency} from "@/enums/currency";

interface PriceLabelProps extends TypographyProps {
    number: string;
    currency: Currency;
}

export default function PriceLabel(
    { number, currency, sx, ...rest }: PriceLabelProps
) {
    const theme = useTheme();

    return (
        <Typography
            variant="body2"
            sx={{
                fontFamily: 'Inter',
                fontWeight: 800,
                fontSize: '20px',
                lineHeight: 1,
                letterSpacing: '0.02em',
                color: 'text.primary',
                textAlign: 'inherit',
                [theme.breakpoints.down('md')]: {
                    fontSize: '25px',
                },
                ...sx,
            }}
            {...rest}
        >
            ${number} {Currency[currency]}
        </Typography>
    );
}