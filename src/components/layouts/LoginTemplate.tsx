'use client'

import {Box, Typography} from "@mui/material";
import {LoginForm} from "@/app/auth/login/components/LoginForm";
import PillButton from "@/components/atoms/PillButton";

export const LoginTemplate = () => {
    return (
        <Box>
            <Typography
                variant={"h5"}
                sx={{textAlign: "center", marginTop: "20px"}}
            >
                Nummora
            </Typography>

            <Typography
                variant={"h3"}
                fontWeight={"bold"}
                sx={{textAlign: "center", marginTop: "15%"}}
            >
                Bienvenido a Nummora
            </Typography>

            <LoginForm/>

            <PillButton
                sx={{
                    mt: 2,
                    width: "100%",
                    fontWeight: 700
                }}
            >
                Olvide mi contraseña
            </PillButton>

            <PillButton
                sx={{
                    mt: 2,
                    width: "100%",
                    backgroundColor: "white",
                    border: "1px solid #0000001F",
                    fontWeight: 700
                }}
            >
                Crear cuenta
            </PillButton>
        </Box>
    );
}