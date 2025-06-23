import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
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
                <LineChart data={data}>
                    <CartesianGrid stroke="#d1d5db" strokeDasharray="4 4" />
                    <XAxis dataKey="mes" />
                    <YAxis
                        tickFormatter={(value) => value.toLocaleString("es-CO")}
                        domain={[0, 100000]}
                    />
                    <Tooltip
                        formatter={(value: number) => `$${value.toLocaleString("es-CO")}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="valor"
                        stroke={theme.palette.loandColors.active}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};
