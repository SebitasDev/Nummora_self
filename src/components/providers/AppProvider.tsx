'use client';

import {CssBaseline, Container, Box, useTheme} from '@mui/material';
import ReactQueryProvider from '@/lib/react-query/provaider';
import GlobalLayout from '@/components/layouts/GlobalLayout';

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <Box>
            <CssBaseline/>
            <GlobalLayout>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            paddingX: '7rem',
                            [theme.breakpoints.down('md')]: {
                                paddingX: '0rem',
                            }
                        }}
                    >
                        <ReactQueryProvider>{children}</ReactQueryProvider>
                    </Box>
                </Container>
            </GlobalLayout>
        </Box>
    );
}
