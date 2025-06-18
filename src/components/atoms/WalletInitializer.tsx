'use client';

import { useEffect } from 'react';
import { walletConnection } from '@/lib/viem/walletConnection';

const WalletInitializer = (): null => {
    useEffect(() => {
        walletConnection()
            .then((res) => {
                console.log('Wallet conectada:', res);
            })
            .catch((err) => {
                console.warn('No se pudo conectar la wallet:', err);
            });
    }, []);

    return null;
};

export default WalletInitializer;
