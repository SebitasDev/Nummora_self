'use client';

import React, {useState} from 'react';
import {
    Box,
    Typography,
    Grid,
    Card, useMediaQuery, useTheme,
} from "@mui/material";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import {CustomCard} from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import Theme from "@/theme/theme";
import {AssuranceSecurity, InvestAmount, InvestType} from "@/app/lender/invest/components";

export const InvestConfiguration = () => {
    const theme = Theme;
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("md"));
    const [amount, _] = useState(0);
    
    return (
        <CustomCard 
            sx={{ 
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                p: 2.9
            }}
        >
            <SectionHeader
                icon={<SavingsOutlinedIcon sx={{ color: theme.palette.primary.dark }} />}
                title={"Configurar Inversión"}
                subtitle={"Define el monto y términos de tu inversión para calcular las ganancias potenciales"}
                subtitleSize={isMobile ? "12px" : 'initial' }
            />
            <Box sx={{ pt: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {/* Monto a Invertir */}
                    <InvestAmount/>

                    {/* Tipo de Inversión */}
                    <InvestType/>

                    {/* Garantía de Seguridad */}
                    <AssuranceSecurity/>

                    {/* Resumen de Inversión */}
                    <Card variant="outlined" sx={{ bgcolor: 'grey.50', p: 2 }}>
                        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
                            Resumen de Inversión
                        </Typography>
                        <Grid container spacing={2}>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant="caption" color="text.secondary">
                                    Monto inicial:
                                </Typography>
                                <Typography variant="body2" fontWeight="bold">
                                    ${amount.toLocaleString()}
                                </Typography>
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant="caption" color="text.secondary">
                                    Tipo:
                                </Typography>
                                <Typography variant="body2" fontWeight="bold">
                                    Flexible
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="caption" color="text.secondary">
                                    Tasa esperada:
                                </Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ color: 'green.600' }}>
                                    12.0% anual garantizada
                                </Typography>
                            </Box>
                        </Grid>
                    </Card>
                </Box>
            </Box>
        </CustomCard>
    );
}