import {useMediaQuery, useTheme} from "@mui/system";
import Theme from "@/theme/theme";

export const useRecentActivities = () => {
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
    const theme = Theme;

    return {
        themeMUI,
        isMdUp,
        theme
    };
}