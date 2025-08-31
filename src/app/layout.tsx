import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import AppProvider from "@/components/providers/AppProvider";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Nummora App',
    description: 'Plataforma de préstamos DeFi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
          <body className={inter.className}>
              <AppRouterCacheProvider options={{ key: 'mui' }}>
                  <AppProvider>{children}</AppProvider>
              </AppRouterCacheProvider>
          </body>
      </html>
  );
}
