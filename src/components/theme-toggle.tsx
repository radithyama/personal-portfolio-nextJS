"use client"

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle(){
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <Button variant="ghost" size="icon"
        className="relative rounded-full"
        aria-label="Toggle dark mode"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            <FaSun className="absolute h-4 w-4 rotate-0
            scale-100 transition-all dark:-rotate-90
            dark:scale-0"></FaSun>
            <FaMoon className="absolute h-4 w-4 rotate-90
            scale-0 transition-all dark:-rotate-0
            dark:scale-100"></FaMoon>
        </Button>
    )
}
