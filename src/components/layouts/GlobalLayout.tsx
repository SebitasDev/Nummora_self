'use client';

import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Nummora
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
