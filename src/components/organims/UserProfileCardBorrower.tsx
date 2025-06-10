import {Box, Paper} from "@mui/material";
import CardTitle from "@/components/atoms/CardTitle";
import PriceLabel from "@/components/atoms/PriceLabel";
import PillButton from "@/components/atoms/PillButton";
import {useTheme} from "@mui/system";
import {Roles, Currency} from "@/enums";
import {ProfileHeader} from "@/components/molecules/ProfileHeader";

interface UserProfileCardBorrowerProps {
    avatarURL?: string;
    userRole: Roles;
    userName: string;
    currency: Currency
}

export const UserProfileCardBorrower = (
    { userRole, userName, currency, avatarURL } : UserProfileCardBorrowerProps
) => {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "right",

                [themeMUI.breakpoints.down('sm')]: {
                    width: "auto",
                },
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    width: '100%',
                    height: '255px',
                    p: 2.5,
                    borderRadius: 5,

                    [themeMUI.breakpoints.down('sm')]: {
                        mt: 2,
                    },
                }}
            >
                <ProfileHeader
                    user={{
                        name: userName,
                        role: userRole,
                        avatarUrl: avatarURL
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 2,
                        mt: 2,
                        mb: 2.5
                    }}
                >
                    <CardTitle>Mis credtios:</CardTitle>

                    <PriceLabel number={"5.600"} currency={currency}/>
                </Box>

                <PillButton
                    sx={{
                        width: '100%'
                    }}
                >
                    Solicitar credito
                </PillButton>
            </Paper>
        </Box>
    )
}