import { http, useAccount, useWalletClient } from "wagmi";
import {createPublicClient, createWalletClient} from "viem";
import { somniaTestnet } from "@reown/appkit/networks";

export const useWalletAccount = () => {
    const { isConnected, address } = useAccount();
    const { data: walletClient } = useWalletClient();

    const client = createWalletClient({
        chain: somniaTestnet,
        transport: http()
    });

    const publicClient = createPublicClient({
        chain: somniaTestnet,
        transport: http()
    });

    return {
        isConnected,
        client,
        walletClient,
        publicClient,
        user: address,
    };
};