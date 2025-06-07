'use client'

import { Pie } from 'react-chartjs-2';
import {Box} from "@mui/material";
import {BoxProps} from "@mui/system";
import {useInvestmentDistributionChart} from "@/app/dashboard/lender/hooks";

interface InvestmentDistributionChartProps extends BoxProps {}

export const InvestmentDistributionChart = (
    { sx } : InvestmentDistributionChartProps
) => {

    const { options, data } = useInvestmentDistributionChart()
    
    return (
        <Box sx={{
            width: 250, 
            height: 250, 
            margin: '0 auto',
            ...sx
        }}>
            <Pie data={data} options={options} />
        </Box>
    );
}