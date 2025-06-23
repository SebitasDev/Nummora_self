import {useState} from "react";
import {usePathname} from "next/navigation";

export const useGlobalLayout = () => {
    const [value, setValue] = useState(0);
    const pathname = usePathname();
    const hiddenPaths = ['/auth/login', '/auth/register', '/auth/forgot-password'];
    const shouldHideNav = hiddenPaths.includes(pathname);
    
    return {
        value,
        setValue,
        shouldHideNav
    }
}