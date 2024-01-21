import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Category = (props: { heading: string; link: string }) => {
    return (
        <div className="flex w-full flex-col space-y-4 rounded-3xl bg-secondary p-6">
            <h1 className="text-center text-3xl font-semibold text-primary">
                {props.heading}
            </h1>
            <Link href={`"/profile/${props.link}"`} className="flex w-full">
                <Button className="mx-4 w-full bg-primary py-6 text-xl">
                    Zobacz
                </Button>
            </Link>
        </div>
    );
};

const Profile = () => {
    return (
        <div className="flex h-full grow flex-col">
            <Header className="justify-center">
                <h1>Profil użytkownika</h1>
            </Header>
            <div className="m-4 flex h-full grow flex-col items-center justify-evenly">
                <Category heading="Historia Aktywności" link={"history"} />
                <Category heading="Połączone urządzenia" link={"devices"} />
                <Category heading="Podsumowanie" link={"summary"} />
            </div>
        </div>
    );
};

export default Profile;
