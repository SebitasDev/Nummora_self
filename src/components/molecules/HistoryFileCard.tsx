import {CustomCard} from "@/components/atoms/CustomCard";
import {Avatar, Box, CardContent, Stack, Typography} from "@mui/material";
import React from "react";
import {shortenAddress} from "@/components/atoms/DropdownAddressSelect";
import {Batch} from "@/components/atoms/Batch";

type HistoryFileCardProps = {
    value: string;
    accountAddress: string;
}

export const HistoryFileCard = ({value, accountAddress}: HistoryFileCardProps) => {
    return (
        <CustomCard>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar
                            sx={{
                                bgcolor: "#E8F9F0",
                                color: "green",
                                width: 40,
                                height: 40,
                            }}
                        >
                            <img src="/arrow.svg" alt="withdrawImage" width={24} height={24} />
                        </Avatar>
                        <Stack spacing={1}>
                            <Typography fontWeight="bold">
                                {value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {shortenAddress(accountAddress)}
                            </Typography>
                        </Stack>
                    </Box>
                    <Box   >
                        <Stack alignItems={'center'} spacing={1}>
                            <Batch
                                label={"Completado"}
                                sx={{
                                    backgroundColor: "#E8F9F0",
                                    color: "green"
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                2025-06-23
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </CardContent>
        </CustomCard>
    )
}