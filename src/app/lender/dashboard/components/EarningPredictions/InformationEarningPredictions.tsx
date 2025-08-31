import {useEarningPredictions} from "@/app/lender/dashboard/hooks";
import {Box} from "@mui/material";
import {Currency} from "@/enums";
import {
    InfoCardEarningPrediction
} from "@/app/lender/dashboard/components/EarningPredictions/InfoCardEarningPrediction";

export const InformationEarningPredictions = () => {
    const { theme, themeMUI } = useEarningPredictions();
    
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "90%",
                m: "auto",
                gap: 1.2,
                mt: 2,
                [themeMUI.breakpoints.down('md')]: {
                    width: "100%",
                    m: 0
                }
            }}
        >
            <InfoCardEarningPrediction
                backgroundColor={"#F9FAFB"}
                color={"gray"}
                title={"Conservador"}
                number={"112K"} 
                currency={Currency.COP}
            />

            <InfoCardEarningPrediction
                backgroundColor={theme.palette.secondary.background}
                color={theme.palette.secondary.dark}
                title={"Predicción"}
                number={"125K"}
                currency={Currency.COP}
            />

            <InfoCardEarningPrediction
                backgroundColor={theme.palette.primary.background}
                color={theme.palette.primary.dark}
                title={"Optimista"}
                number={"150K"}
                currency={Currency.COP}
            />
        </Box>
    )
}