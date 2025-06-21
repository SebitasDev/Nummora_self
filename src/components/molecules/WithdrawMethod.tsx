import {
    Avatar,
    Box,
    Collapse,
    Stack,
    Typography,
    SelectChangeEvent,
    Button,
    CardActionArea,
    Divider
} from "@mui/material";
import { useState } from "react";
import CustomCard from "@mui/material/Card";
import Link from "@mui/material/Link";
import React from "react";
import { Batch } from "@/components/atoms/Batch";
import { TimeText } from "@/components/atoms/TimeText";
import { DropdownAddressSelect } from "@/components/atoms/DropdownAddressSelect";
import { ResumenDelRetiro } from "@/components/molecules/ResumenDelRetiro";

export const WithdrawMethod = () => {
    const [expanded, setExpanded] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const addressOptions = [
        "0x89a2F4c3DcaE7d8e97aBC4c5C121AE344321B67D",
        "0xbc1qxv2k8dbhfX7fhxOwlh28A3EFc289a762D9A1",
    ];

    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Método de Retiro
            </Typography>

            <CustomCard variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
                <CardActionArea onClick={handleToggle}>
                    <Box
                        sx={{
                            p: 2,
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
                                <img src="/lemon-icon.svg" alt="Lemon" width={24} height={24} />
                            </Avatar>
                            <Stack spacing={1}>
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
                            </Stack>
                        </Box>

                        <Stack alignItems="center" spacing={1}>
                            <TimeText timeFrame={"5 - 15 minutos"} />
                            <Batch
                                label={"Seleccionar"}
                                sx={{
                                    bgcolor: "#E8F9F0",
                                    color: "green",
                                }}
                            />
                        </Stack>
                    </Box>
                </CardActionArea>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider sx={{ mx: 2, my: 1 }} />
                    <Box px={2} pb={2}>
                        <DropdownAddressSelect
                            options={addressOptions}
                            value={selectedAddress}
                            onChange={(e: SelectChangeEvent) =>
                                setSelectedAddress(e.target.value)
                            }
                        />
                        <ResumenDelRetiro
                            montoSolicitado="$100.000"
                            comision="$1.500"
                            totalRecibir="$98.500"
                        />
                    </Box>
                </Collapse>
            </CustomCard>
        </Box>
    );
};
