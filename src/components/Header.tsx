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
                "bg-primary mb-1 flex justify-between rounded-b-2xl p-10 text-2xl font-semibold text-white shadow-xl",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Header;
