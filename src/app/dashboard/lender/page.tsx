'use client'

import {DashboardTemplate} from "@/components/layouts/DashboardTemplate";
import {useEffect} from "react";
import {walletConnection} from "@/lib/viem/walletConnection";
import {InstanceContract} from "@/lib/viem/InstanceContract";
import NumusTokenJson from "@/contracts/abis/NumusToken.json";
import {Abi, createPublicClient, http} from "viem";
import {celoAlfajores} from "viem/chains";

export default function LenderPage() {
    useEffect(() => {
        const initWallet = async () => {
            try {
                const { address } = await walletConnection();
                console.log('Wallet conectada:', address);

                const numusToken = NumusTokenJson as Abi;

                const client = createPublicClient({
                    chain: celoAlfajores,
                    transport: http('https://alfajores-forno.celo-testnet.org')
                });

                const balanceOfAbi = [
                    {
                        "name": "balanceOf",
                        "type": "function",
                        "stateMutability": "view",
                        "inputs": [
                            {
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ]
                    }
                ] as const;

                const tokenContract = InstanceContract({
                    address: '0x5F685c686869FA5fa178d2bAD7d2d0a6c3974371',
                    client,
                    abi: balanceOfAbi
                });

                console.log("Token Contract:", tokenContract);
                
                const balance = await tokenContract.read.balanceOf([address]);
                console.log("Balance:", balance?.toString());
            } catch (error) {
                console.warn('No se pudo conectar la wallet:', error);
            }
        };
        initWallet();
    }, []);
    return <DashboardTemplate/>; 
}