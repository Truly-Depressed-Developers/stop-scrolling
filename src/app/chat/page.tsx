"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Message from "@/app/chat/message";


const defaultMessages = [
    {
        text: "Cześć, w czym mogę ci pomóc?",
        areYouAuthor: false
    },
    {
        text: "Mam problem z ilością czasu spędzanego na social mediach",
        areYouAuthor: true
    },
    {
        text: "Ok, postarajmy się znaleźć rozwiązanie problemu dopasowane dla ciebie. Czym się interesujesz?",
        areYouAuthor: false
    },
]

const defaultAnswers = [
    {
        text: "Brzmi ciekawie. Opracuję dla ciebie plan działania na następny tydzień",
        areYouAuthor: false
    },
]

type Message = {
    text: string
    areYouAuthor: boolean
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState('');

    if (messages.length == 0) {
        setMessages(defaultMessages)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        setMessages(messages => [...messages, {text: message, areYouAuthor: true}])
        setMessage('')
        setTimeout(()=>{
            setMessages(messages => [...messages, defaultAnswers[0]])
        }, 2000)
    };

    return (
        <div className="flex h-full flex-col p-4">
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>JK</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-extrabold">mgr Jan Kowalski</h1>
                </div>
                <p>
                    Od 10 lat zajmuje się pomocą osobom uzależnionym od telefonów
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex-grow space-y-4 overflow-y-auto">
                {messages.map(message =>
                    <Message
                        key={message.text}
                        message={message.text}
                        areYouAuthor={message.areYouAuthor}
                    />
                )}
            </div>
            <div className="flex w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Wiadomość"
                    value={message}
                    onChange={handleInputChange}
                />
                <Button
                    className="bg-accent"
                    type="submit"
                    onClick={handleSubmit}>
                    Wyślij
                </Button>
            </div>
        </div>
    );
};

export default Chat;
