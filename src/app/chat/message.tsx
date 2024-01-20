import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type Props = {
    message: string;
    areYouAuthor: boolean;
};

const Message = (props: Props) => {
    return (
        <div className={props.areYouAuthor ? "flex justify-end" : ""}>
            <div
                className={cn(
                    "w-min min-w-64 space-y-4 rounded border p-4",
                    props.areYouAuthor ? "bg-primary text-white" : "",
                )}
            >
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default Message;
