'use client';

import { Typography, TypographyProps, Tooltip } from '@mui/material';
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
        <Tooltip
            title={`$${number} ${Currency[currency]}`}
            arrow
            enterTouchDelay={0}
            leaveTouchDelay={3000}
            placement="bottom"
        >
            <Typography
                variant="body2"
                noWrap
                sx={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: "20px",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    color: "text.primary",
                    textAlign: "inherit",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    cursor: "default",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "16px",
                    },
                    ...sx,
                }}
                {...rest}
            >
                ${number} {Currency[currency]}
            </Typography>
        </Tooltip>
    );
}