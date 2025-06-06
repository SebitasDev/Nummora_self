'use client'

import SectionTitle from "@/components/atoms/SectionTitle";
import {UserProfileCard} from "@/components/organims/UserProfileCard";
import {Currency, Roles} from "@/enums";
import {LoanStatusGrid} from "@/components/organims/LoanStatusGrid";
import {Box, useTheme} from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registras módulos necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


// Tipa explícitamente el objeto options
const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Ganancias mensuales'
        }
    }
};

const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
        {
            label: 'Ganancias',
            data: [150000, 180000, 210000, 250000],
            borderColor: '#00C707',
            backgroundColor: 'rgba(0, 199, 7, 0.3)',
            tension: 0.4
        }
    ]
};

export const DashboardTemplate = () => {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                textAlign: 'left',
                mt: 1.3,
                [themeMUI.breakpoints.down('sm')]: {
                    textAlign: 'center',
                },
            }}
        >
            {/* Title */}
            <SectionTitle>Mis préstamos</SectionTitle>

            {/* User profile */}
            <UserProfileCard
                avatarURL={"URL.com"}
                userRole={Roles.Inversionista}
                userName={"Pepito"}
                currency={Currency.COP}
            />
            
            {/* Loan status grid */}
            <LoanStatusGrid/>

            <Line data={data} options={options} />
        </Box>
    );
}