'use client'

import SectionTitle from "@/components/atoms/SectionTitle";
import {UserProfileCardBorrower} from "@/components/organims/UserProfileCardBorrower";
import {Currency, Roles} from "@/enums";
import {LoanStatusGridBorrower} from "@/components/organims/LoanStatusGridBorrower";
import {Box, useTheme} from "@mui/material";
import {ChartsCarousel} from "@/app/dashboard/borrower/components/";

export const DashboardBorrower = () => {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                mt: 1.3,
                textAlign: 'center',

                [themeMUI.breakpoints.up('sm')]: {
                    display: 'grid',
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateAreas: `
                  "title       title         title"
                  "userProfile loanStatus    loanStatus"
                  "chartsAndKPI      chartsAndKPI        chartsAndKPI"
                `,
                    gap: 2,
                },
            }}
        >
            {/* Title */}
            <Box gridArea="title">
                <SectionTitle>Mis creditos</SectionTitle>
            </Box>

            {/* User profile */}
            <Box gridArea="userProfile">
                <UserProfileCardBorrower
                    avatarURL={"URL.com"}
                    userRole={Roles.Deudor}
                    userName={"Juancito"}
                    currency={Currency.COP}
                />
            </Box>

            {/* Loan status grid */}
            <Box gridArea="loanStatus">
                <LoanStatusGridBorrower />
            </Box>
            <Box gridArea="chartsAndKPI">
                <ChartsCarousel sx={{ mt: 3, mb: 3 }} />
            </Box>
        </Box>
    );
}