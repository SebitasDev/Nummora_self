'use client';

import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import Link from 'next/link';
import WalletInitializer from "@/components/atoms/WalletInitializer";
import {useGlobalLayout} from "@/hooks";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    
    const { value, setValue, shouldHideNav } = useGlobalLayout();
    
    return ( 
        <Box sx={{ pb: 7 }}>
            <Box sx={{ p: 1, backgroundColor: "#F9FAFB" }}>
                {children}
            </Box>
            {!shouldHideNav && (
                <Box>
                    <WalletInitializer/>
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
            )}
        </Box>
    );
}
