import { Abi, Client, getContract } from "viem";

interface InstanceContractProps {
    address: `0x${string}`;
    client: Client;
    abi: Abi;
}

export const InstanceContract = (
    { address, client, abi }: InstanceContractProps
) => {
    const contract = getContract({
        address,
        abi,
        client
    });

    return {
        read: contract.read,
        write: contract.write,
        simulate: contract.simulate,
        event: contract.getEvents,
        createEventFilter: contract.createEventFilter,
        watchEvent: contract.watchEvent
    };
};