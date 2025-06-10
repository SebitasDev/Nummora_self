'use client'

import {TextInput} from "@/components/atoms/TextInput";
import PillButton from "@/components/atoms/PillButton";
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useLogin} from "@/app/auth/login/hooks";
import {Controller} from "react-hook-form";
import {RoleGroup} from "@/app/auth/login/components/RoleGroup";

export const LoginForm = () => {
    
    const {register, handleSubmit, errors, onSubmit, control} = useLogin();
    
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
            
            <RoleGroup control={control} errors={errors}/>
            
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