import {Box} from "@mui/material";
import React from "react";

export const WalletConnectButton = () => {
    return (
        <Box
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 12",
                },
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
                mb: 2,
            }}
        >
            <appkit-button />
        </Box>
    );
}