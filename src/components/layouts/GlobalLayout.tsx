'use client';

import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from 'react';
import Link from 'next/link';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    const [value, setValue] = useState(0);
    
    return (
        <Box sx={{ pb: 7 }}>
            <Box sx={{ p: 1 }}>
                {children}
            </Box>

            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTop: '1px solid #eee',
                    backgroundColor: '#fff',
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels={false}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        component={Link}
                        href={"/dashboard/lender"}
                        icon={<DashboardIcon sx={{ color: value === 0 ? '#00C707' : 'black' }} />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href={"/loans"}
                        icon={<AccountBalanceIcon sx={{ color: value === 1 ? '#00C707' : 'black' }} />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href={"/wallet"}
                        icon={<AccountBalanceWalletIcon sx={{ color: value === 2 ? '#00C707' : 'black' }} />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href={"/profile"}
                        icon={<PersonIcon sx={{ color: value === 3 ? '#00C707' : 'black' }} />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
