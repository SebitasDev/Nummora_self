import {Avatar, Box, CardActionArea, Chip, Stack, Typography} from "@mui/material";
import CustomCard from "@mui/material/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "@mui/material/Link";
import React from "react";
import {Batch} from "@/components/atoms/Batch";

export const WithdrawMethod = () => {
    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
                Metodo de Retiro
            </Typography>
            <CustomCard>
                    <CustomCard
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            border: "1px solid #e0e0e0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Avatar
                                sx={{
                                    bgcolor: "#E8F9F0",
                                    color: "green",
                                    width: 40,
                                    height: 40,
                                }}
                            >
                                <img src="/lemon-icon.svg" alt="Lemon" width={24} height={24} />
                            </Avatar>

                            <Box>
                                <Typography fontWeight="bold">Lemon (Crypto)</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Comisión:{" "}
                                    <Box component="span" color="success.main" fontWeight="bold">
                                        1.5%
                                    </Box>
                                </Typography>
                                <Link href="#" underline="hover" fontSize={14}>
                                    📖 Aprende a retirar con Lemon
                                </Link>
                            </Box>
                        </Box>

                        <Stack alignItems="flex-end" spacing={1}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <AccessTimeIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                                <Typography variant="body2" color="text.secondary">
                                    5–15 minutos
                                </Typography>
                            </Box>
                           <Batch type={'seleccionar'}/>
                        </Stack>
                    </CustomCard>
            </CustomCard>
        </Box>
    )
}