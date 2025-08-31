import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box } from "@mui/material";
import React from "react";
import {useEarningChart} from "@/app/lender/dashboard/hooks";

export const EarningChart: React.FC = () => {
    const { data, themeMUI, theme } = useEarningChart();
    
    return (
        <Box 
            sx={{ 
                width: "100%", 
                height: "300px", 
                mt: 1.5,
                [themeMUI.breakpoints.down("md")]: { height: "200px" }
            }}
        >
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <CartesianGrid stroke="#d1d5db" strokeDasharray="4 4" />
                    <XAxis dataKey="mes" />
                    <YAxis
                        tickFormatter={(value) => value.toLocaleString("es-CO")}
                        domain={[0, 100000]}
                    />
                    <Tooltip
                        formatter={(value: number) => `$${value.toLocaleString("es-CO")}`}
                    />
                    <Area
                        type="monotone"
                        dataKey="valor"
                        stroke={theme.palette.primary.dark}
                        strokeWidth={2}
                        fill={theme.palette.primary.light}
                        fillOpacity={0.15}
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};
