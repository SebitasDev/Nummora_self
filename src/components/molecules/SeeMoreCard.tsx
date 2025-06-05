import CardTitle from "@/components/atoms/CardTitle";
import {Box, Paper} from "@mui/material";
import {useTheme} from "@mui/system";
import {MoreIcon} from "@/components/atoms/MoreIcon";

export const SeeMoreCard = () => {
    const themeMUI = useTheme()
    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
                p: 1.8,
                alignItems: "flex-start",
                height: "100%",
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                },
            }}
        >
            <MoreIcon/>
            <Box sx={{ flexGrow: 1 }} />
            <CardTitle sx={{ mt: 1.2 }}>Ver más</CardTitle>
        </Paper>

    );
}