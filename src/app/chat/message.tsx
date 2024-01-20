import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type Props = {
    message: string
    areYouAuthor: boolean
}

const Message = (props: Props) => {
    return <div className={props.areYouAuthor ? "flex justify-end" : ""}>
        <div className="space-y-4 border rounded p-4 w-min min-w-64" style={props.areYouAuthor ? {backgroundColor: '#93c941'} : {}}>
            <p>{props.message}</p>
        </div>
    </div>
};

export default Message;
