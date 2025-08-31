'use client'


import { Button, ButtonProps } from '@mui/material';

export default function PillButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            disableElevation
            {...props}
            sx={{
                borderRadius: '999px',
                textTransform: 'none',
                fontWeight: 540,
                fontSize: "15px",
                backgroundColor: '#f3eef7',
                color: '#1a1a1a',
                px: 3,
                py: 1.5,
                ...props.sx,
            }}
        />
    );
}