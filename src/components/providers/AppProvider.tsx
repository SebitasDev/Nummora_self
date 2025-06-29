'use client';

import {CssBaseline, Container, Box} from '@mui/material';
import ReactQueryProvider from '@/lib/react-query/provaider';
import LenderLayout from '@/components/layouts/LenderLayout';

export default function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <CssBaseline/>
            <LenderLayout>
                <Container maxWidth="xl">
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </Container>
            </LenderLayout>
        </Box>
    );
}
