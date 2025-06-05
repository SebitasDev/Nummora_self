'use client'

import SectionTitle from "@/components/atoms/SectionTitle";
import {UserProfileCard} from "@/components/organims/UserProfileCard";
import {Currency, Roles} from "@/enums";
import {Box} from "@mui/material";
import {useTheme} from "@mui/system";
import {LoanStatusGrid} from "@/components/organims/LoanStatusGrid";

export default function LenderPage() {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                textAlign: 'left',
                [themeMUI.breakpoints.down('sm')]: {
                    textAlign: 'center',
                },
            }}
        >
            <SectionTitle>Mis préstamos</SectionTitle>

            <UserProfileCard
                avatarURL={"URL.com"}
                userRole={Roles.Inversionista}
                userName={"Pepito"}
                currency={Currency.COP}
            />

            <LoanStatusGrid/>
        </Box>
    );
}