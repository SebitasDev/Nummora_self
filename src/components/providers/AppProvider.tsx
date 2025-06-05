'use client';

import { CssBaseline, Container } from '@mui/material';
import ReactQueryProvider from '@/lib/react-query/provaider';
import GlobalLayout from '@/components/layouts/GlobalLayout';

export default function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CssBaseline />
            <GlobalLayout>
                <Container maxWidth="lg">
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </Container>
            </GlobalLayout>
        </>
    );
}
