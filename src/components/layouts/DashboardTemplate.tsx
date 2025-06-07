'use client'

import SectionTitle from "@/components/atoms/SectionTitle";
import {UserProfileCard} from "@/components/organims/UserProfileCard";
import {Currency, Roles} from "@/enums";
import {LoanStatusGrid} from "@/components/organims/LoanStatusGrid";
import {Box, useTheme} from "@mui/material";
import {ChartsCarousel, InvestmentKPI} from "@/app/dashboard/lender/components/";

export const DashboardTemplate = () => {
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
                <SectionTitle>Mis préstamos</SectionTitle>
            </Box>

            {/* User profile */}
            <Box gridArea="userProfile">
                <UserProfileCard
                    avatarURL={"URL.com"}
                    userRole={Roles.Inversionista}
                    userName={"Pepito"}
                    currency={Currency.COP}
                />
            </Box>
            
            {/* Loan status grid */}
            <Box gridArea="loanStatus">
                <LoanStatusGrid />
            </Box>

            <Box gridArea="chartsAndKPI">
                <InvestmentKPI/>
                <ChartsCarousel sx={{ mt: 3, mb: 3 }} />
            </Box>
        </Box>
    );
}