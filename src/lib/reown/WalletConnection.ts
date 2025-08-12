import {WagmiAdapter} from "@reown/appkit-adapter-wagmi";
import {celo, mainnet, polygon} from "@reown/appkit/networks";
import {QueryClient} from "@tanstack/react-query";
import {createAppKit} from "@reown/appkit/react";

export const WalletConnection = () => {
    const projectId = '62c66ed4cd07119457a08ddce0d80464';

    const wagmiAdapter = new WagmiAdapter({
        ssr: true,
        networks: [mainnet, polygon, celo],
        projectId
    });

    const queryClient = new QueryClient();

    const modal = createAppKit({
        adapters: [wagmiAdapter],
        networks: [mainnet, polygon, celo],
        projectId,
        metadata: {
            name: 'Lender Dashboard',
            description: 'Dashboard para prestamistas',
            url: 'https://lender-dashboard.com',
            icons: ['https://lender-dashboard.com/icon.png']
        },
        themeMode: 'dark',
        themeVariables: {
            '--w3m-font-family': 'Inter, sans-serif',
            '--w3m-accent': '#1976d2',
        }
    });
    
    return {
        wagmiAdapter,
        queryClient,
        modal
    }
}