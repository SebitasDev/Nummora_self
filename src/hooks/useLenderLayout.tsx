import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import {useTheme, useMediaQuery} from "@mui/material";
import Theme from "@/theme/theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";

export const useLenderLayout = () => {
    const pathname = usePathname();
    const [value, setValue] = useState(0);

    const navigationItems = [
        { label: "Dashboard", href: "/lender/dashboard", icon: <DashboardIcon /> },
        { label: "Invertir", href: "/lender/invest", icon: <AccountBalanceIcon /> },
        {
            label: "Retirar",
            href: "/lender/withdraw",
            icon: <AccountBalanceWalletIcon />,
        },
        { label: "Reportes", href: "/profile", icon: <PersonIcon /> },
    ];
    
    useEffect(() => {
        const currentIndex = navigationItems.findIndex(item => item.href === pathname);
        setValue(currentIndex !== -1 ? currentIndex : 0);
    }, [pathname]);

    const hiddenPaths = ['/auth/login', '/auth/register', '/auth/forgot-password'];
    const shouldHideNav = hiddenPaths.includes(pathname);

    const themeMUI = useTheme();
    const theme = Theme;
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("md"));

    return {
        value,
        setValue,
        shouldHideNav,
        theme,
        themeMUI,
        isMobile,
        navigationItems
    }
}