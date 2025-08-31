import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/system";
import Theme from "@/theme/theme";

export const useEarningPredictions = () => {
    const themeMUI = useTheme();
    const isMdDown = useMediaQuery(themeMUI.breakpoints.down("md"));
    const theme = Theme;
    
    const data = [
        { month: "Ene 2025", conservador: 100000, predicción: 110000, optimista: 120000 },
        { month: "Feb 2025", conservador: 105000, predicción: 115000, optimista: 125000 },
        { month: "Mar 2025", conservador: 110000, predicción: 120000, optimista: 130000 },
        { month: "Apr 2025", conservador: 115000, predicción: 125000, optimista: 135000 },
        { month: "May 2025", conservador: 120000, predicción: 130000, optimista: 140000 },
        { month: "Jun 2025", conservador: 125000, predicción: 135000, optimista: 150000 },
    ];
    
    return {
        themeMUI,
        isMdDown,
        data,
        theme
    }
}