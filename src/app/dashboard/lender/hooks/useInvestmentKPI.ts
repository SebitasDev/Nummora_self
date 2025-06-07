import {useMediaQuery, useTheme} from "@mui/system";

export const useInvestmentKPI = () => {
    
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down('sm'));
    const roiPercentage = ((234000 / 1500000) * 100).toFixed(2);

    const formatCurrency = (amount: number) =>
        amount.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });

    const settingsCarousel = {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return {
        formatCurrency,
        roiPercentage,
        settingsCarousel,
        isMobile
    }
}