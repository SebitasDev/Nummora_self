import {CustomCard} from "@/components/atoms/CustomCard"
import {Alert, Box, Grid, Typography} from "@mui/material"
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import {useInvest} from "@/app/lender/invest/hooks";
import {CheckCircle,} from "@mui/icons-material";
import SectionHeader from "@/components/atoms/SectionHeader";
import {AdditionalMetrics, ProfitFirstMonth, TotalProfit} from "@/app/lender/invest/components";

export const ProfitCalculator = () => {

    const { amount, theme } = useInvest();
    
    return (
        <CustomCard
            sx={{
                height: 'auto',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1px solid #bbf7d0',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <SectionHeader
                icon={<CalculateOutlinedIcon sx={{ color: theme.palette.primary.dark }} />}
                title={"Calculadora de Ganancias con Reinversión"}
                titleColor={theme.palette.primary.dark}
            />
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 3 
                }}
            >
                {/* Primer Mes */}
                <ProfitFirstMonth/>

                {/* Ganancia Total */}
                <TotalProfit/>

                {/* Métricas adicionales */}
                <AdditionalMetrics/>

                {/* Comparación */}
                <CustomCard
                    sx={{
                        backgroundColor: "#EFF6FF",
                        border: "1.5px solid #BFDBFE"
                    }}
                >
                    <Typography color={theme.palette.secondary.dark} variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                        Comparación:
                    </Typography>
                    <Box sx={{ display: "flex"}}>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant="caption" color="text.secondary">
                                Sin reinversión:
                            </Typography>
                            <Typography variant="body2" fontWeight="medium">
                                ${Math.floor(amount * 1.12).toLocaleString()}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant="caption" color="text.secondary">
                                Con reinversión:
                            </Typography>
                            <Typography variant="body2" fontWeight="medium" sx={{ color: 'green.600' }}>
                                ${Math.floor(amount * 1.44).toLocaleString()}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'green.700', fontWeight: 'medium', mt: 1 }}>
                        Ganancia adicional: ${Math.floor(amount * 0.32).toLocaleString()}
                    </Typography>
                </CustomCard>

                {/* Reinversión Automática */}
                <Alert severity="warning" sx={{ bgcolor: 'yellow.50' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <CheckCircle sx={{ color: 'yellow.600', mt: 0.5, fontSize: 16 }} />
                        <Box>
                            <Typography variant="subtitle2" fontWeight="medium" sx={{ color: 'yellow.800' }}>
                                Reinversión Automática
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'yellow.700' }}>
                                Cada mes las ganancias se suman al capital para financiar más personas y generar mayor rentabilidad.
                            </Typography>
                        </Box>
                    </Box>
                </Alert>
            </Box>
        </CustomCard>
    )
}