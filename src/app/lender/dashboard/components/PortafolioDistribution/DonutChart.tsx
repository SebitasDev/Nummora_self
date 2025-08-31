import {Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip,} from "recharts";
import {Box} from "@mui/material";
import React from "react";
import {usePortfolioDistribution} from "@/app/lender/dashboard/hooks";

export const DonutChart = () => {
    const { themeMUI, portfolioData } = usePortfolioDistribution();
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "180px",
                mt: 2,
                [themeMUI.breakpoints.down("md")]: { height: "180px" }
            }}
        >
            <ResponsiveContainer>
                <RechartsPieChart>
                    <Pie
                        data={portfolioData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={4.5}
                        dataKey="value"
                    >
                        {portfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                </RechartsPieChart>
            </ResponsiveContainer>
        </Box>
    )
}