"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export function Theme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    return (
        <button onClick={toggleTheme} className="px-2.5 py-2 rounded-md cursor-pointer dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black text-black dark:text-white relative z-10" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "light" ? (
                <Moon className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            ) : (
                <Sun className="h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-0" />
            )}
        </button>
    );
}