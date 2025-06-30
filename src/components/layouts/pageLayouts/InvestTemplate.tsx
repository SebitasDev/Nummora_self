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
import CalculateIcon from '@mui/icons-material/Calculate';
import {CustomCard} from "@/components/atoms/CustomCard";
import {InvestConfiguration} from "@/app/lender/invest/components";
import {useInvest} from "@/app/lender/invest/hooks";
export const InvestTemplate = () => {
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("md"));
    const { amount } = useInvest();

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

    const CalculadoraGanancias = () => (
        <CustomCard
            sx={{
                height: 'auto',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1px solid #bbf7d0'
            }}
        >
            <CardHeader
                avatar={<CalculateIcon sx={{ color: 'green.800' }} />}
                title={
                    <Typography variant="h6" fontWeight="semibold" sx={{ color: 'green.800' }}>
                        Calculadora de Ganancias con Reinversión
                    </Typography>
                }
                sx={{ color: 'green.800' }}
            />
            <CardContent sx={{ pt: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {/* Primer Mes */}
                    <Card variant="outlined" sx={{ bgcolor: 'white', border: '1px solid #bbf7d0' }}>
                        <CardContent>
                            <Typography variant="subtitle1" fontWeight="medium" sx={{ color: 'green.800', mb: 2 }}>
                                Primer Mes
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Tu inversión inicial:
                                    </Typography>
                                    <Typography variant="body2" fontWeight="medium">
                                        ${amount.toLocaleString()}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Personas que puedes financiar:
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ color: 'green.700' }}>
                                        {Math.floor(amount / 50000)} personas
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Ganancia del primer mes:
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ color: 'green.600' }}>
                                        ${Math.floor(amount * 0.09).toLocaleString()}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Capital para el mes 2:
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ color: 'green.800' }}>
                                        ${Math.floor(amount * 1.09).toLocaleString()}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Ganancia Total */}
                    <Card sx={{ bgcolor: 'green.600', color: 'white' }}>
                        <CardContent>
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <Typography variant="h4" fontWeight="bold">
                                    ${Math.floor(amount * 1.44 - amount).toLocaleString()}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Ganancia total después de 12 meses
                                </Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Box
                                    sx={{
                                        width: '50%',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        ${Math.floor(amount * 1.44).toLocaleString()}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                        Capital final
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center', width: '50%' }}>
                                    <Typography variant="h6" fontWeight="bold">
                                        144%
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                        Rentabilidad anual
                                    </Typography>
                                </Box>
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Métricas adicionales */}
                    <Grid container spacing={1}>
                        <Box sx={{ width: '33.33%' }}>
                            <Card variant="outlined" sx={{ bgcolor: 'white', textAlign: 'center', p: 1.5 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ color: 'green.700' }}>
                                    {Math.floor(amount / 25000)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Personas al final
                                </Typography>
                            </Card>
                        </Box>
                        <Box sx={{ width: '33.33%' }}>
                            <Card variant="outlined" sx={{ bgcolor: 'white', textAlign: 'center', p: 1.5 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ color: 'green.700' }}>
                                    144%
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Rentabilidad real
                                </Typography>
                            </Card>
                        </Box>
                        <Box sx={{ width: '33.33%' }}>
                            <Card variant="outlined" sx={{ bgcolor: 'white', textAlign: 'center', p: 1.5 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ color: 'green.700' }}>
                                    {Math.floor(amount / 30000)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Personas extra
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>

                    {/* Comparación */}
                    <Alert severity="info">
                        <Typography variant="subtitle2" fontWeight="medium" sx={{ mb: 1 }}>
                            Comparación:
                        </Typography>
                        <Grid container spacing={1}>
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
                        </Grid>
                        <Typography variant="body2" sx={{ color: 'green.700', fontWeight: 'medium', mt: 1 }}>
                            Ganancia adicional: ${Math.floor(amount * 0.32).toLocaleString()}
                        </Typography>
                    </Alert>

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
            </CardContent>
        </CustomCard>
    );

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
                    lg: "repeat(3, 1fr)"
                },
                [themeMUI.breakpoints.down("lg")]: {
                    gap: 1.7,
                }
            }}
        >
            {/* Columna izquierda - Ocupa 2 de las 3 columnas */}
            <Box
                sx={{
                    gridColumn: {
                        xs: "1",
                        lg: "1 / 3"
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 3.5,
                    [themeMUI.breakpoints.down("lg")]: {
                        gap: 1.7,
                    }
                }}
            >
                {/* Configurar mi inversion */}
                <Box sx={{ order: { xs: 0, lg: 0 } }}>
                    <InvestConfiguration />
                </Box>

                {/* Calculadora de ganancias - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 1 }}>
                        <CalculadoraGanancias />
                    </Box>
                )}

                {/* Informacion importante - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 2 }}>
                        <InformacionImportante />
                    </Box>
                )}

                {/* Botón de confirmar inversión - SOLO EN MÓVIL */}
                {isMobile && (
                    <Box sx={{ order: 3 }}>
                        <ConfirmarInversion />
                    </Box>
                )}

                {/* Prestamos individuales */}
                <Box sx={{ order: { xs: 4, lg: 1 } }}>
                    <PrestamosIndividuales />
                </Box>
            </Box>

            {/* Columna derecha - Ocupa 1 de las 3 columnas - SOLO EN DESKTOP */}
            {!isMobile && (
                <Box
                    sx={{
                        gridColumn: "3",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3.5,
                    }}
                >
                    {/* Calculadora de ganancias - SOLO EN DESKTOP */}
                    <CalculadoraGanancias />

                    {/* Informacion importante - SOLO EN DESKTOP */}
                    <InformacionImportante />

                    {/* Botón de confirmar inversión - SOLO EN DESKTOP */}
                    <ConfirmarInversion />
                </Box>
            )}
        </Box>
    );
};