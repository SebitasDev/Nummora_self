import { Box, useTheme } from "@mui/material";

export default function WithdrawLayout() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                [theme.breakpoints.up("md")]: {
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr", // main content + sidebar
                    gridTemplateAreas: `
        "title          saldoResumen"
        "formulario     estadisticas"
        "historial      infoImportante"
      `,
                    gap: 3,
                },
                p: 3,
            }}
        >
            <Box gridArea="title">
                <h2>Retirar Dinero</h2>
                <p>Retira tus ganancias de forma segura kjgjhgkjfl hcvuhgclyfvlyclucyix7texlyc7tdxi7tdktdtexiytezi6c;gfkh gluhfvlufviyfvluy</p>
            </Box>

            <Box gridArea="formulario">
                <h2>Retirar Dinero</h2>
            </Box>

            {/* Historial de retiros */}
            <Box gridArea="historial">
                <h2>Retiros</h2>
            </Box>

            {/* Resumen de saldo */}
            <Box gridArea="saldoResumen">
                {/* SummaryCard */}<h2>Resumen</h2>
            </Box>

            {/* Estadísticas del mes */}
            <Box gridArea="estadisticas">
                {/* StatsCard */}<h2>Estadisticas</h2>
            </Box>

            {/* Información importante */}
            <Box gridArea="infoImportante">
                {/* ImportantInfoCard */}<h2>Info Importante</h2>
            </Box>

        </Box>
    );
}
