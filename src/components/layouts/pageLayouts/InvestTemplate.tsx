'use client';

import React from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Alert,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    Shield,
    Wallet,
    CheckCircle,
    AttachMoney,
} from "@mui/icons-material";
import {CustomCard} from "@/components/atoms/CustomCard";
import {InvestConfiguration, ProfitCalculator} from "@/app/lender/invest/components";
export const InvestTemplate = () => {
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("md"));

    const loans = [
        {
            name: "María González",
            purpose: "Gastos personales",
            amount: 50000,
            term: "1 mes",
            profit: 4500,
            total: 54500
        },
        {
            name: "Carlos Rodríguez",
            purpose: "Pago de servicios",
            amount: 70000,
            term: "2 meses",
            profit: 6000,
            total: 76000
        },
        {
            name: "Ana Martínez",
            purpose: "Compra de medicamentos",
            amount: 80000,
            term: "3 meses",
            profit: 7200,
            total: 87200
        }
    ];

    const InformacionImportante = () => (
        <CustomCard sx={{ height: 'auto' }}>
            <CardHeader
                title={
                    <Typography variant="h6" fontWeight="semibold">
                        Información Importante
                    </Typography>
                }
            />
            <CardContent sx={{ pt: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <Shield sx={{ color: 'blue.600', mt: 0.5, fontSize: 16 }} />
                        <Box>
                            <Typography variant="subtitle2" fontWeight="medium">
                                Diversificación
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Recomendamos diversificar en múltiples préstamos
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <CheckCircle sx={{ color: 'green.600', mt: 0.5, fontSize: 16 }} />
                        <Box>
                            <Typography variant="subtitle2" fontWeight="medium">
                                Inversión Segura
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Tu inversión está protegida por nuestro fondo de seguridad.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <Wallet sx={{ color: 'green.600', mt: 0.5, fontSize: 16 }} />
                        <Box>
                            <Typography variant="subtitle2" fontWeight="medium">
                                Liquidez
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Fondos disponibles después del plazo
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </CustomCard>
    );

    const ConfirmarInversion = () => (
        <Button
            variant="contained"
            size="large"
            fullWidth
            startIcon={<AttachMoney />}
            sx={{
                height: 48,
                bgcolor: 'green.600',
                '&:hover': { bgcolor: 'green.700' },
                fontWeight: 'medium'
            }}
        >
            Confirmar Inversión
        </Button>
    );

    const PrestamosIndividuales = () => (
        <CustomCard sx={{ height: 'auto' }}>
            <CardHeader
                title={
                    <Typography variant="h6" fontWeight="semibold">
                        Préstamos Individuales
                    </Typography>
                }
                subheader="Cada préstamo es financiado completamente por un solo inversionista"
            />
            <CardContent sx={{ pt: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {loans.map((loan, index) => (
                        <Card key={index} variant="outlined" sx={{ '&:hover': { bgcolor: 'grey.50' } }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="medium">
                                            {loan.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {loan.purpose}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={`+$${loan.profit.toLocaleString()}`}
                                        color="success"
                                        variant="outlined"
                                        size="small"
                                    />
                                </Box>

                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                    <Box sx={{ width: '50%' }}>
                                        <Typography variant="caption" color="text.secondary">
                                            Monto:
                                        </Typography>
                                        <Typography variant="body2" fontWeight="medium">
                                            ${loan.amount.toLocaleString()}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '50%' }}>
                                        <Typography variant="caption" color="text.secondary">
                                            Plazo:
                                        </Typography>
                                        <Typography variant="body2" fontWeight="medium">
                                            {loan.term}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Alert severity="info" sx={{ mb: 2, bgcolor: 'blue.50' }}>
                                    <Typography variant="caption" sx={{ textAlign: 'center', fontWeight: 'medium' }}>
                                        Inviertes: ${loan.amount.toLocaleString()} → Recibes: ${loan.total.toLocaleString()}
                                    </Typography>
                                </Alert>

                                <Button variant="contained" fullWidth size="small">
                                    Financiar préstamo completo
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </CardContent>
        </CustomCard>
    );

    return (
        <Box
            sx={{
                display: "grid",
                gap: 3.5,
                gridTemplateColumns: {
                    xs: "1fr",
                    lg: "1fr 450px"
                },
                [themeMUI.breakpoints.down("md")]: {
                    gap: 1.7,
                },
                minWidth: 0,
                overflow: 'hidden'
            }}
        >
            {/* Columna izquierda - Ocupa el espacio restante */}
            <Box
                sx={{
                    gridColumn: {
                        xs: "1 / -1",
                        lg: "1"
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 3.5,
                    [themeMUI.breakpoints.down("md")]: {
                        gap: 1.7,
                    },
                    minWidth: 0,
                    maxWidth: '100%'
                }}
            >
                {/* Configurar mi inversion */}
                <Box sx={{ order: { xs: 0, md: 0 }, minWidth: 0 }}>
                    <InvestConfiguration />
                </Box>

                {/* Calculadora de ganancias - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 1, minWidth: 0 }}>
                        <ProfitCalculator />
                    </Box>
                )}

                {/* Informacion importante - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 2, minWidth: 0 }}>
                        <InformacionImportante />
                    </Box>
                )}

                {/* Botón de confirmar inversión - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 3, minWidth: 0 }}>
                        <ConfirmarInversion />
                    </Box>
                )}

                {/* Prestamos individuales */}
                <Box sx={{ order: { xs: 4, md: 1 }, minWidth: 0 }}>
                    <PrestamosIndividuales />
                </Box>
            </Box>

            {/* Columna derecha - Ancho fijo de 450px - SOLO EN DESKTOP */}
            {!isMobile && (
                <Box
                    sx={{
                        gridColumn: "2",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3.5,
                        minWidth: 0,
                        maxWidth: '450px'
                    }}
                >
                    {/* Calculadora de ganancias - SOLO EN DESKTOP */}
                    <ProfitCalculator />

                    {/* Informacion importante - SOLO EN DESKTOP */}
                    <InformacionImportante />

                    {/* Botón de confirmar inversión - SOLO EN DESKTOP */}
                    <ConfirmarInversion />
                </Box>
            )}
        </Box>
    );
};