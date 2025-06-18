import { createWalletClient, custom } from 'viem';
import {celo, celoAlfajores, mainnet} from 'viem/chains';

export const walletConnection = async () => {
    const provider = typeof window !== 'undefined' ? (window as any).ethereum : undefined;

    if (!provider) {
        throw new Error('Wallet no disponible en este navegador');
    }
    const client = createWalletClient({
        chain: celoAlfajores,
        transport: custom(provider),
    });
    
    const [address] = await client.requestAddresses();

    return { address, client };
};
