'use client'

import {TextInput} from "@/components/atoms/TextInput";
import PillButton from "@/components/atoms/PillButton";
import {Box} from "@mui/material";
import {useLogin} from "@/app/auth/login/hooks/useLogin";

export const LoginForm = () => {
    
    const {register, handleSubmit, errors, onSubmit} = useLogin();
    
    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
                label={"Usuario"}
                sx={{mt: 2, py: 0.5}}
                placeholder={"Usuario"}
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
            />

            <TextInput
                label={"password"}
                sx={{mt: 2.3, py: 0.5}}
                placeholder={"Contraseña"}
                {...register("password")}
                type={"password"}
                error={!!errors.password}
                helperText={errors.password?.message}

            />

            <PillButton
                type={"submit"}
                sx={{
                    mt: 9,
                    width: "100%",
                    backgroundColor: "#00C707",
                    color: "white",
                    fontWeight: 700
                }}
            >
                Iniciar sesión
            </PillButton>
        </Box>
    );
}