'use client';

import {TextField, TextFieldProps} from "@mui/material"
import React from "react";

export const TextInput = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ sx, placeholder, ...props }, ref) => {
        return (
            <TextField
                {...props}
                inputRef={ref}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '999px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '999px',
                        paddingLeft: 2,
                        '& fieldset': {
                            border: 'none',
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                    },
                    '& input': {
                        paddingY: '10px',
                    },
                    ...sx
                }}
                InputProps={{
                    sx: {
                        fontSize: 16,
                        color: 'text.primary',
                    },
                }}
            />
        )
    }
)