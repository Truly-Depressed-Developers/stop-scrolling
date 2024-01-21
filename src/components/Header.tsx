import { cn } from "@/lib/utils";
import React from "react";

const Header = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "z-50 flex w-screen justify-between rounded-b-2xl bg-primary p-10 text-2xl font-semibold text-white shadow-xl",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Header;
