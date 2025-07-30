import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/system";
import Theme from "@/theme/theme";

export const useStyles = () => {
    const themeMUI = useTheme();
    const isMdDown = useMediaQuery(themeMUI.breakpoints.down("md"));
    const theme = Theme;
    
    return {
        themeMUI,
        isMdDown,
        theme
    }
}