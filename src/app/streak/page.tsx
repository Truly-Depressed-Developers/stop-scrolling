"use client";

import React, { useEffect, useRef } from "react";
import Achievement from "./Achievement";
import Header from "@/components/Header";

const Streak = () => {
    const streak = 57;

    const achievementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        achievementRef.current?.scrollTo(0, 1500);
    }, []);

    return (
        <>
            <div className="absolute left-[23.8%] -z-50 h-screen w-2 bg-black" />
            <div className="flex flex-col">
                <Header>
                    <h1>Aktualna seria: </h1>
                    <span className="flex items-center">
                        <p>{streak}</p>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678C10.7366 13.2989 11 12.663 11 12C11 10.62 10.5 10 10 9C8.928 6.857 9.776 4.946 12 3C12.5 5.5 14 7.9 16 9.5C18 11.1 19 13 19 15C19 15.9193 18.8189 16.8295 18.4672 17.6788C18.1154 18.5281 17.5998 19.2997 16.9497 19.9497C16.2997 20.5998 15.5281 21.1154 14.6788 21.4672C13.8295 21.8189 12.9193 22 12 22C11.0807 22 10.1705 21.8189 9.32122 21.4672C8.47194 21.1154 7.70026 20.5998 7.05025 19.9497C6.40024 19.2997 5.88463 18.5281 5.53284 17.6788C5.18106 16.8295 5 15.9193 5 15C5 13.847 5.433 12.706 6 12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5Z"
                                stroke="#d0a616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </Header>
                <div
                    ref={achievementRef}
                    className="mx-2 flex max-h-[77vh] grow flex-col overflow-y-scroll"
                >
                    <div className="absolute left-0 top-[10%] z-10 aspect-square w-screen bg-gradient-to-b from-white to-transparent pointer-events-none" />
                    {[...Array(12)].map((_, i) => (
                        <Achievement
                            key={i}
                            number={180 - i * 15}
                            toCollected={180 - i * 15 < streak ? true : false}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Streak;
