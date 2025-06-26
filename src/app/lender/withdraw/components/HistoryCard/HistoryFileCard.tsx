import {CustomCard} from "@/components/atoms/CustomCard";
import {Avatar, Box, Stack, Typography, ChipProps} from "@mui/material";
import React from "react";
import {shortenAddress} from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import {Batch} from "@/components/atoms/Batch";

interface HistoryFileCardProps extends ChipProps {
    value: string;
    accountAddress: string;
    label: string;
    date: string;
}

export const HistoryFileCard = ({value, accountAddress, label, date, sx}: HistoryFileCardProps) => {
    return (
        <CustomCard
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                borderWidth: 2,
                borderStyle: "solid",
                px: 2,
                py: 4,
            }}
        >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "0.3rem",

                    }}
                    position={'initial'}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "#E8F9F0",
                                color: "green",
                                width: {
                                    xs :30,
                                    md:35,
                                },
                                height: {
                                    xs :30,
                                    md:35,
                                }
                            }}
                        >
                            <img
                                src="/arrow.svg"
                                alt="withdrawImage"
                                style={{
                                    width: "40%",
                                    height: "40%",
                                    objectFit: "contain",
                                }}
                            />
                        </Avatar>
                        <Stack spacing={1}>
                            <Typography
                                fontWeight="bold"
                                sx={{
                                    fontSize: {
                                        xs: '0.6rem',
                                        sm: '0.7rem',
                                        md: '0.8rem',
                                        lg: '0.8rem',
                                    },
                                }}
                            >
                                $ {value}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: {
                                        xs: '0.5rem',
                                        sm: '0.6rem',
                                        md: '0.8rem',
                                        lg: '0.8rem',
                                    },
                                }}
                            >
                                Lemon (Crypto) {shortenAddress(accountAddress)}
                            </Typography>
                        </Stack>
                    </Box>
                    <Box   >
                        <Stack alignItems={'center'} spacing={1}>
                            <Batch
                                label={label}
                                sx={{
                                    ...sx
                                }}
                            />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: {
                                        xs: '0.6rem',
                                        sm: '0.7rem',
                                        md: '0.8rem',
                                        lg: '0.8rem',
                                    },
                                }}
                            >
                                {date}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
        </CustomCard>
    )
}