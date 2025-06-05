'use client'
import {Avatar, Box, Typography} from "@mui/material";
import {Roles} from "@/enums";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {UserProfile} from "@/types";
import {VerifiedBadge} from "@/components/atoms/VerifiedBadge";

export const ProfileHeader = (
    { user } : { user : UserProfile }
) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.7,
            }}
        >
            <Avatar
                alt={user.name}
                //src="{avatarURL}"
                sx={{ width: 48, height: 48 }}
            />

            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '15px',
                        color: 'black',
                        fontWeight: 500,
                        lineHeight: 1.5,
                    }}
                >
                    {
                        user.role == Roles.Inversionista ?
                            "Inversionista" : "Deudor"
                    }
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 0.8}}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '19px',
                            fontWeight: 700,
                            color: 'text.primary',
                            lineHeight: 1,
                        }}
                    >
                        {user.name}
                    </Typography>

                    <VerifiedBadge/>
                </Box>
            </Box>
        </Box>
    )
}