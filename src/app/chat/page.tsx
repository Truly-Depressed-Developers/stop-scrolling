import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Message from "@/app/chat/message";

const Chat = () => {
    return <div className="flex flex-col h-full p-4">
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src=""/>
                    <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-extrabold">Psycholog</h1>
            </div>
            <p>Od 10 lat zajmuje się pomocą osobom uzależnionym od telefonów</p>
        </div>
        <Separator className="my-4" />
        <div className="flex-grow overflow-y-auto space-y-4">
            <Message
                message={"Cześć, w czym mogę ci pomóc?"}
                areYouAuthor={false}
            />
            <Message
                message={"Mam problem z [...]"}
                areYouAuthor={true}
            />
        </div>
        <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Wiadomość" />
            <Button type="submit">Wyślij</Button>
        </div>
    </div>;
};

export default Chat;
