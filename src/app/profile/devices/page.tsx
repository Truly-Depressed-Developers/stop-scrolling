import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Device = ({ name }: { name: string }) => {
    return (
        <div className="m-4 flex items-center justify-between rounded-xl bg-secondary p-4">
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M31.875 35.625V9.375H13.125V35.625H31.875ZM31.875 1.875C32.8696 1.875 33.8234 2.27009 34.5266 2.97335C35.2299 3.67661 35.625 4.63044 35.625 5.625V39.375C35.625 40.3696 35.2299 41.3234 34.5266 42.0266C33.8234 42.7299 32.8696 43.125 31.875 43.125H13.125C12.1304 43.125 11.1766 42.7299 10.4733 42.0266C9.77009 41.3234 9.375 40.3696 9.375 39.375V5.625C9.375 3.54375 11.0437 1.875 13.125 1.875H31.875ZM16.875 13.125H28.125V16.875H16.875V13.125ZM16.875 20.625H24.375V24.375H16.875V20.625Z"
                    fill="black"
                />
            </svg>
            <h1 className="font-semibold text-black">{name.toUpperCase()}</h1>
            <Link href={"/profile/devices"}>
                <svg
                    width="34"
                    height="30"
                    viewBox="0 0 34 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M33.4142 16.4142C34.1953 15.6332 34.1953 14.3668 33.4142 13.5858L20.6863 0.857864C19.9052 0.0768158 18.6389 0.0768158 17.8579 0.857864C17.0768 1.63891 17.0768 2.90524 17.8579 3.68629L29.1716 15L17.8579 26.3137C17.0768 27.0948 17.0768 28.3611 17.8579 29.1421C18.6389 29.9232 19.9052 29.9232 20.6863 29.1421L33.4142 16.4142ZM0 17L32 17V13L0 13L0 17Z"
                        fill="black"
                    />
                </svg>
            </Link>
        </div>
    );
};

const Devices = () => {
    return (
        <div className="flex h-full flex-col">
            <Header className="justify-center">
                <h1>Połączone urządzenia</h1>
            </Header>
            <div className="grow">
                <Device name="Samsung Galaxy S22" />
                <Device name="Realme C51" />
                <Device name="Xiaomi Redmi note 12 Pro" />
            </div>
            <div className="m-4 mx-auto ">
                <Button className="bg-primary p-6 text-xl font-semibold text-white">
                    Dodaj nowe urządzenie
                </Button>
            </div>
        </div>
    );
};

export default Devices;
