import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {LoginSchema} from "@/lib/zod/authShema";

type LoginFormData = z.infer<typeof LoginSchema>;

export const useLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit = (data: LoginFormData) => {
        console.log("Datos valido:", data)
    }
    
    return {
        register,
        handleSubmit,
        errors,
        onSubmit
    }
}