import {useEarningStore} from "@/app/lender/dashboard/store";
import {EarningDataPoint} from "@/app/lender/dashboard/interfaces";
import {useTheme} from "@mui/system";
import Theme from "@/theme/theme";

export const useEarningChart = () => {
    const { period } = useEarningStore();
    const theme = Theme;
    const themeMUI = useTheme();
    
    const data: EarningDataPoint[] = [
        { mes: "Ene", valor: 45000 },
        { mes: "Feb", valor: 51000 },
        { mes: "Mar", valor: 49000 },
        { mes: "Abr", valor: 60000 },
        { mes: "May", valor: 55000 },
        { mes: "Jun", valor: 65000 },
        { mes: "Jul", valor: 72000 },
        { mes: "Ago", valor: 70000 },
        { mes: "Sep", valor: 76000 },
        { mes: "Oct", valor: 83000 },
        { mes: "Nov", valor: 90000 },
        { mes: "Dic", valor: 98000 },
    ];

    const filteredData = (() => {
        switch (period) {
            case "6":
                return data.slice(0,6);
            case "3":
                return data.slice(0,3);
            case "12":
            default:
                return data;
        }
    })();

    return {
        data: filteredData,
        themeMUI,
        theme
    };
}
