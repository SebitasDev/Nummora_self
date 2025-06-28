import {
    Avatar,
    Box,
    Collapse,
    Stack,
    Typography,
    SelectChangeEvent,
    CardActionArea,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import {CustomCard} from "@/components/atoms/CustomCard";
import Link from "@mui/material/Link";
import React from "react";
import { CustomChip } from "@/components/atoms/CustomChip";
import { TimeText } from "@/components/atoms/TimeText";
import { DropdownAddressSelect } from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import { WithdrawSummary } from "@/app/lender/withdraw/components/WithdrawCard/WithdrawSummary";

interface WithdrawMethodProps {
    selectedAddress: string;
    setSelectedAddress: (addr: string) => void;
}

export const WithdrawMethod: React.FC<WithdrawMethodProps> = ({ selectedAddress, setSelectedAddress }) => {

    const [expanded, setExpanded] = useState(false);
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));

    const addressOptions = [
        "0x89a2F4c3DcaE7d8e97aBC4c5C121AE344321B67D",
        "0xbc1qxv2k8dbhfX7fhxOwlh28A3EFc289a762D9A1",
    ];

    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Box
            sx={{
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                },

            }}
        >
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Método de Retiro
            </Typography>

            <CustomCard
                sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    borderColor: expanded ? "success.light" : "divider",
                    borderWidth: 2,
                    borderStyle: "solid",
                    backgroundColor: expanded ? "#edfdf4" : "background.paper",
                }}
            >
                <Box
                    onClick={handleToggle}
                    sx={{
                        p: 0,
                        display: "flex",
                        alignItems: isMdUp ? "center" : "start",
                        justifyContent: "space-between",
                    }}

                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box
                            sx={{
                                backgroundColor: 'red',
                                p: 1,
                                heigth: '100%'
                            }}
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
                                    src="/lemon-icon.svg"
                                    alt="Lemon"
                                    style={{
                                        width: "40%",
                                        height: "40%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Avatar>
                        </Box>
                        <Stack
                            spacing={0.3}
                        >
                            <Typography fontWeight="bold" sx={{
                                fontSize: {
                                    xs: '0.6rem',
                                    sm: '0.7rem',
                                    md: '0.8rem',
                                    lg: '0.8rem',
                                },
                            }}
                            >
                                Lemon (Crypto)
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontSize: {
                                    xs: '0.6rem',
                                    sm: '0.7rem',
                                    md: '0.8rem',
                                    lg: '0.8rem',
                                },
                            }}
                                        color="text.secondary">
                                Comisión:{""}
                                <Box
                                    component="span"
                                    color="success.main"
                                    fontWeight="bold"
                                    sx={{
                                        ml: 0.5,
                                    }}
                                >
                                    1.5%
                                </Box>
                            </Typography >
                        </Stack>
                    </Box>

                    <Stack alignItems="center" spacing={0.3} display={'flex'}>
                        <TimeText timeFrame={"5 - 15 minutos"} />
                        <CustomChip
                            sx={{
                                backgroundColor: expanded ? "success.light" : "#E8F9F0",
                                color: expanded ? "white" :"green",
                                px: isMdUp ? 2 : 1.5
                            }}
                        >
                            <Typography
                                fontSize={isMdUp ? "0.8rem" : "0.6rem" }
                            >
                                Seleccionar
                            </Typography>
                        </CustomChip>
                    </Stack>
                </Box>
                <Link
                    sx={{
                        mt: 0.2,
                        ml: 6,
                        fontSize: {
                            xs: '0.5rem',
                            sm: '0.5rem',
                            md: '0.8rem',
                            lg: '0.8rem',
                        },
                    }}
                    href="#" underline="hover" fontSize={14}>
                    📖 Aprende a retirar con Lemon
                </Link>
            </CustomCard>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box px={2} pb={2} sx={{mt: 4}} display="flex" flexDirection="column">
                    <DropdownAddressSelect
                        options={addressOptions}
                        value={selectedAddress}
                        onChange={(e: SelectChangeEvent) =>
                            setSelectedAddress(e.target.value)
                        }
                    />
                    <WithdrawSummary
                        montoSolicitado="$100.000"
                        comision="$1.500"
                        totalRecibir="$98.500"
                    />
                </Box>
            </Collapse>
        </Box>
    );
};
