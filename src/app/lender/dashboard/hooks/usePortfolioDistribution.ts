import {useTheme} from "@mui/system";
import Theme from "@/theme/theme";

export const usePortfolioDistribution = () => {
    const themeMUI = useTheme();
    const theme = Theme;

    const portfolioData = [
        { name: "Terminados", value: 82, color: theme.palette.loandColors.completed },
        { name: "Pendientes", value: 5, color: theme.palette.loandColors.pending },
        { name: "Activos", value: 13, color: theme.palette.loandColors.active },
    ];
    
    return {
        themeMUI,
        portfolioData,
        theme
    }
}