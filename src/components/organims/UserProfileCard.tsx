import {Box, Paper} from "@mui/material";
import CardTitle from "@/components/atoms/CardTitle";
import PriceLabel from "@/components/atoms/PriceLabel";
import PillButton from "@/components/atoms/PillButton";
import {useTheme} from "@mui/system";
import {Roles, Currency} from "@/enums";
import {ProfileHeader} from "@/components/molecules/ProfileHeader";

interface UserProfileCardProps {
    avatarURL?: string;
    userRole: Roles;
    userName: string;
    currency: Currency
}

export const UserProfileCard = (
    { userRole, userName, currency, avatarURL } : UserProfileCardProps
) => {
    const themeMUI = useTheme();
    return (
        <Paper
            elevation={2}
            sx={{
                width: '100%',
                height: 'auto',
                p: 2.5,
                mt: 2,
                borderRadius: 5
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
                <CardTitle>Mis ganancias:</CardTitle>

                <PriceLabel number={"34.444"} currency={currency}/>
            </Box>

            <PillButton
                sx={{
                    [themeMUI.breakpoints.down("md")] : {
                        width: '100%',
                    }
                }}
            >
                Expandir
            </PillButton>
        </Paper>
    )
}