import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SectionHeader from "@/components/atoms/SectionHeader";
import {EarningPredictionChart} from "@/app/lender/dashboard/components/EarningPredictions/EarningPredictionChart";
import {useEarningPredictions} from "@/app/lender/dashboard/hooks";
import {
    InformationEarningPredictions
} from "@/app/lender/dashboard/components/EarningPredictions/InformationEarningPredictions";
import {CustomCard} from "@/components/atoms/CustomCard";

export const EarningPrediction = () => {
    const { isMdDown } = useEarningPredictions();
    
    return (
        <CustomCard 
            sx={{
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
                padding: 2.9
            }}
        >
            <SectionHeader
                title={"Predicción de ganancias a futuro"}
                subtitle={
                    isMdDown ? "" : "Proyeccíon de los ingresos a los próximos 6 meses"
                }
                titleSize={isMdDown ? 15 : 20}
                subtitleSize={15}
                icon={<TrendingUpIcon sx={{ fontSize: "20px", fontWeight: "bold" }}/>}
            />
            
            <EarningPredictionChart/>

            <InformationEarningPredictions/>
        </CustomCard>
    )
}