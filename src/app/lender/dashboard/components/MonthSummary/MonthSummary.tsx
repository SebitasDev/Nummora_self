import {Box, Divider, Typography, useTheme} from "@mui/material"
import {useMediaQuery} from "@mui/system";
import Theme from "@/theme/theme";
import SectionHeader from "@/components/atoms/SectionHeader";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";

export const MonthSummary = () => {
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
    const theme = Theme;
    
    return (
        <Box 
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 4"
                },
                order: {
                    xs: 8,
                    md: 'initial'
                },
                width : '100%',
                height: "300px",
                padding: 2.9,
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto"
                }
            }}
        >
            <SectionHeader
                title={"Resumen del mes"}
                titleSize={isMdUp ? 20 : 15}
            />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant={"body1"}
                        color={"gray"}
                        fontSize={"16px"}
                    >
                        Ingresos totales
                    </Typography>

                    <PriceLabel
                        number={"45.000"}
                        currency={Currency.COP}
                        sx={{
                            color: theme.palette.loandColors.active,
                            fontSize: "17px"
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant={"body1"}
                        color={"gray"}
                        fontSize={"16px"}
                    >
                        Prestamos activos
                    </Typography>

                    <Typography
                        variant={"body1"}
                        fontSize={"16px"}
                        fontWeight={"800"}
                    >
                        5
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant={"body1"}
                        color={"gray"}
                        fontSize={"16px"}
                    >
                        Tasa de retorno
                    </Typography>

                    <Typography
                        variant={"body1"}
                        fontSize={"16px"}
                        fontWeight={"800"}
                        color={theme.palette.loandColors.completed}
                    >
                        15,2%
                    </Typography>
                </Box>
            </Box>

            <Divider/>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant={"body1"}
                    fontSize={"16px"}
                >
                    Rendimiento
                </Typography>

                <Typography
                    variant={"body1"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                >
                    Excelente
                </Typography>
            </Box>
        </Box>
    )
}