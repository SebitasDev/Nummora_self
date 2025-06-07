'use client'

import SectionTitle from "@/components/atoms/SectionTitle";
import {UserProfileCard} from "@/components/organims/UserProfileCard";
import {Currency, Roles} from "@/enums";
import {LoanStatusGrid} from "@/components/organims/LoanStatusGrid";
import {Box, useTheme} from "@mui/material";
import {ChartsCarousel} from "@/app/dashboard/lender/components/";

export const DashboardTemplate = () => {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                mt: 1.3,
                textAlign: 'center',
                display: 'grid',
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateAreas: `
                  "title       title         title"
                  "userProfile loanStatus    loanStatus"
                  "charts      charts        charts"
                `,
                [themeMUI.breakpoints.down('sm')]: {
                    gridTemplateAreas: `
                    "title"
                    "userProfile"
                    "loanStatus"
                    "charts"
                  `, 
                  gridTemplateColumns: '1fr',
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

            <Box gridArea="charts">
                <ChartsCarousel sx={{ mt: 3, mb: 3 }} />
            </Box>
        </Box>
    );
}