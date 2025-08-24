import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "@/lib/zod/authShema";
import {LoginFormData} from "@/types";
import {useRouter} from "next/navigation";
import {UserRoles} from "@/enums/UserRoles";
import {useWalletAccount} from "@/hooks/useWalletAccount";
import {NummusTokenAbi} from "@/contracts";
import {contractRead} from "@/utilities";

export const useLogin = () => {

    const { isConnected, user } = useWalletAccount();
    const { push } = useRouter();
    const read = contractRead();
    
    const { register, handleSubmit, formState: { errors }, control } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema)
    })
    
    const onSubmit = async (data: LoginFormData) => {
        if (parseInt(data.role) === UserRoles.Lender)
        {
            const balance = await read<bigint>({
                ContractAddress: process.env.NEXT_PUBLIC_NUMMUS_TOKEN_ADDRESS as `0x${string}`,
                abi: NummusTokenAbi,
                functionName: "balanceOf",
                args: [user]
            });
            console.log(balance);
            push('/lender/dashboard');
        }
        else 
            push('/borrower/dashboard');
    }
    
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        control,
        isConnected,
        account: user
    }
}