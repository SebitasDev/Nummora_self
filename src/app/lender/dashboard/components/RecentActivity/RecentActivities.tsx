import {Box, Button} from "@mui/material"
import SectionHeader from "@/components/atoms/SectionHeader";
import {CardRecentActivity} from "@/app/lender/dashboard/components/RecentActivity/CardRecentActivity";
import {useRecentActivities} from "@/app/lender/dashboard/hooks";
import WalletIcon from '@mui/icons-material/Wallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';

export const RecentActivities = () => {
    const { themeMUI, isMdUp, theme } = useRecentActivities();
    
    return (
        <Box sx={{
            gridColumn: {
                xs: "1 / -1",
                md: "span 8"
            },
            order: {
                xs: 7,
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
        }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <SectionHeader
                    title={"Actividad reciente"}
                    titleSize={isMdUp ? 20 : 15}
                />

                <Button
                    variant="outlined"
                    sx={{
                        color: "text.primary",
                        borderColor: "#E4E4E7",
                        fontSize: 15,
                        fontWeight: "600",
                        textTransform: "none",
                        borderRadius: 1.8,
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)"
                        },
                        [themeMUI.breakpoints.down("md")]: {
                            marginLeft: "auto"
                        }
                    }}
                >
                    Ver todo
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                <CardRecentActivity
                    title={"Pago recibido - Prestamo #1234"}
                    subtitle={"Hace 2 horas"}
                    icon={
                        <WalletIcon
                            sx={{
                                color: theme.palette.loandColors.active,
                                [themeMUI.breakpoints.down("md")]: {
                                    fontSize: "24px"
                                }
                            }}
                        />
                    }
                    amount={"15.000"}
                    color={theme.palette.loandColors.active}
                    backgroundColor={theme.palette.loandBackgrounds.active}
                    status={"Completado"}
                />

                <CardRecentActivity
                    title={"Nuevo préstamo aprobado - Prestamo #1235"}
                    subtitle={"Hace 1 día"}
                    icon={
                        <CreditCardIcon
                            sx={{
                                color: theme.palette.loandColors.pending,
                                [themeMUI.breakpoints.down("md")]: {
                                    fontSize: "24px"
                                }
                            }}
                        />
                    }
                    amount={"50.000"}
                    color={theme.palette.loandColors.pending}
                    backgroundColor={theme.palette.loandBackgrounds.pending}
                    status={"Pendiente"}
                />

                <CardRecentActivity
                    title={"Inversión realizada - Portafolio diversificado"}
                    subtitle={"Hace 2 días"}
                    icon={
                        <SavingsIcon
                            sx={{
                                color: theme.palette.loandColors.completed,
                                [themeMUI.breakpoints.down("md")]: {
                                    fontSize: "24px"
                                }
                            }}
                        />
                    }
                    amount={"25.000"}
                    color={theme.palette.loandColors.completed}
                    backgroundColor={theme.palette.loandBackgrounds.completed}
                    status={"Activo"}
                />
            </Box>
        </Box>
    )
}