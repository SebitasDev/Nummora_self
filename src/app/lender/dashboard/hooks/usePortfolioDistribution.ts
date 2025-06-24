import {useTheme} from "@mui/system";
import Theme from "@/theme/theme";

export const usePortfolioDistribution = () => {
    const themeMUI = useTheme();
    const theme = Theme;

    const portfolioData = [
        { name: "Terminados", value: 82, color: theme.palette.loan.completed.main },
        { name: "Pendientes", value: 5, color: theme.palette.loan.pending.main },
        { name: "Activos", value: 13, color: theme.palette.loan.active.main },
    ];
    
    return {
        themeMUI,
        portfolioData,
        theme
    }
}