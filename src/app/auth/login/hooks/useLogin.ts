import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {LoginSchema} from "@/lib/zod/authShema";
import {LoginFormData} from "@/types";

export const useLogin = () => {

    const { register, handleSubmit, formState: { errors }, control } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit = (data: LoginFormData) => {
        console.log("Datos valido:", data)
    }
    
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        control
    }
}