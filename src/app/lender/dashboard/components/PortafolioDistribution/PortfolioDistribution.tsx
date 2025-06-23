import {Box, Typography} from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";
import React from "react";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import {usePortfolioDistribution} from "@/app/lender/dashboard/hooks";
import {DonutChart} from "@/app/lender/dashboard/components/PortafolioDistribution/DonutChart";
import {
    ItemPortfolioDistribution
} from "@/app/lender/dashboard/components/PortafolioDistribution/ItemPortfolioDistribution";


export const PortfolioDistribution = () => {
    const { themeMUI, theme } = usePortfolioDistribution();
    
    return (
        <Box 
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 4"
                },
                order: {
                    xs: 4,
                    md: 'initial'
                },
                width : '100%',
                height: "470px",
                padding: 2.9,
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                }
            }}
        >
            <SectionHeader
                title={"Distribucion del portafolio"}
                subtitle={`Estado actual de tus prestamos`}
                titleSize={20}
                subtitleSize={15}
            />
            
            <DonutChart/>
            
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.4,
                    mt: 2,
                    color: "#4B5563",
                    width: "100%",
                }}
            >
                <ItemPortfolioDistribution 
                    itemName={"Activos"} 
                    itemColor={theme.palette.loandColors.active} 
                    itemValue={"89.000"} 
                    itemCurrency={Currency.COP} 
                    itemLoanCount={5}
                />

                <ItemPortfolioDistribution
                    itemName={"Pendientes"}
                    itemColor={theme.palette.loandColors.pending}
                    itemValue={"43.500"}
                    itemCurrency={Currency.COP}
                    itemLoanCount={2}
                />

                <ItemPortfolioDistribution
                    itemName={"Terminados"}
                    itemColor={theme.palette.loandColors.completed}
                    itemValue={"1.009.000"}
                    itemCurrency={Currency.COP}
                    itemLoanCount={5}
                />
            </Box>
        </Box>
    )
}