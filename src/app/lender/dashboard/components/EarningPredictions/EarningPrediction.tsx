import {Box} from "@mui/material";
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SectionHeader from "@/components/atoms/SectionHeader";
import {EarningPredictionChart} from "@/app/lender/dashboard/components/EarningPredictions/EarningPredictionChart";
import {useEarningPredictions} from "@/app/lender/dashboard/hooks";
import {
    InformationEarningPredictions
} from "@/app/lender/dashboard/components/EarningPredictions/InformationEarningPredictions";

export const EarningPrediction = () => {
    const { themeMUI, isMdUp } = useEarningPredictions();
    
    return (
        <Box sx={{
            gridColumn: {
                xs: "1 / -1",
                md: "span 6"
            },
            order: {
                xs: 5,
                md: 'initial'
            },
            width : '100%',
            height: "450px",
            padding: 2.9,
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
            [themeMUI.breakpoints.down('md')]: {
                height: "auto",
            }
        }}>
            <SectionHeader
                title={"Predicción de ganancias a futuro"}
                subtitle={
                    isMdUp ? `Proyeccíon de los ingresos a los próximos 6 meses` : ""
                }
                titleSize={isMdUp ? 20 : 15}
                subtitleSize={15}
                icon={<TrendingUpIcon sx={{ fontSize: "20px", fontWeight: "bold" }}/>}
            />
            
            <EarningPredictionChart/>

            <InformationEarningPredictions/>
        </Box>
    )
}