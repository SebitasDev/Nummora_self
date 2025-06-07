import { Box, Card, Typography } from '@mui/material';
import {useInvestmentKPI} from "@/app/dashboard/lender/hooks/useInvestmentKPI";
import {SemiannualEarningsChart} from "@/app/dashboard/lender/components/SemiannualEarningsChart";
import {InvestmentDistributionChart} from "@/app/dashboard/lender/components/InvestmentDistributionChart";
import Slider from "react-slick";

const InvestmentKPI = () => {
    
    const { formatCurrency, roiPercentage, settingsCarousel, isMobile } = useInvestmentKPI();
    
    return (
        <Box>
            {isMobile ? (
                <Box
                    sx={{
                        mt: 2
                    }}
                >
                    <Slider {...settingsCarousel}>
                        <Box>
                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Retorno total
                                </Typography>
                                <Typography variant="h6">
                                    {formatCurrency(234000)} ({roiPercentage}%)
                                </Typography>
                            </Card>
                        </Box>
                        <Box>
                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Interés promedio ganado
                                </Typography>
                                <Typography variant="h6">{18.5}%</Typography>
                            </Card>
                        </Box>
                        <Box>
                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Total invertido
                                </Typography>
                                <Typography variant="h6">{formatCurrency(1500000)}</Typography>
                            </Card>
                        </Box>
                    </Slider>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        mt: 2,
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}
                >

                    <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Total invertido
                        </Typography>
                        <Typography variant="h6">{formatCurrency(1500000)}</Typography>
                    </Card>

                    <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Interés promedio ganado
                        </Typography>
                        <Typography variant="h6">{18.5}%</Typography>
                    </Card>

                    <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Retorno total
                        </Typography>
                        <Typography variant="h6">
                            {formatCurrency(234000)} ({roiPercentage}%)
                        </Typography>
                    </Card>
                </Box>
            )}
        </Box>
    );
};

export default InvestmentKPI;
``
