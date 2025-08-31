export const theme = {
  palette: {
    // Colores principales de la marca
    primary: {
      main: "#4ade80",
      light: "#86efac",
      dark: "#22c55e",
      contrastText: "#ffffff",
      background: "#f0fdf4",
    },
    secondary: {
      main: "#1e40af",
      light: "#3b82f6",
      dark: "#1e3a8a",
      background: "#eff6ff",
    },

    // Colores de fondo
    background: {
      default: "#F9FAFB",
      paper: "#ffffff",
    },

    // Colores de texto
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },

    // Estados de préstamos - Colores principales
    loan: {
      active: {
        main: "#5787F0",
        light: "#60a5fa",
        background: "#EFF6FF",
        contrastText: "#ffffff",
      },
      pending: {
        main: "#EF7C40",
        light: "#fb923c",
        background: "#FFF7ED",
        contrastText: "#ffffff",
      },
      completed: {
        main: "#22A753",
        light: "#4ade80",
        background: "#F0FDF4",
        contrastText: "#ffffff",
      },
    },

    // Colores adicionales del sistema
    success: {
      main: "#22A753",
      light: "#4ade80",
      background: "#F0FDF4",
    },
    warning: {
      main: "#EF7C40",
      light: "#fb923c",
      background: "#FFF7ED",
    },
    info: {
      main: "#5787F0",
      light: "#60a5fa",
      background: "#EFF6FF",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      background: "#FEF2F2",
      contrastText: "#ffffff",
    },

    // Colores neutros adicionales
    grey: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeightBold: 800,
  },

  shape: {
    borderRadius: 12,
  },

  fontSize: {
    input: "1.1rem",
    chip: {
      xs: "0.85rem",
      md: "0.95rem",
    },
    amountLabel: {
        xs: "1.1rem",
        md: "1.3rem",
    },
    subtitle: {
        xs: "1rem",
        md: "1.1rem",
    },
    labels: {
        xs: "0.9rem",
        md: "1rem",
    }
  },
};

export default theme;
