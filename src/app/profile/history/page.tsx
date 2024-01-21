import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import React from "react";

const HistoryComponent = ({
    heading,
    date,
    desc,
}: {
    heading: string;
    date: string;
    desc?: string;
}) => {
    return (
        <>
            <div
                className={cn(
                    "relative flex w-full flex-col rounded-b-3xl p-6 after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:content-['']",
                    desc !== undefined
                        ? "bg-secondary after:bg-tertiary"
                        : "bg-tertiary after:bg-secondary",
                )}
            >
                <div className='space-y-2'>
                    <h2 className="font-semibold text-primary">{date}</h2>
                    <h1 className="text-center text-2xl font-semibold text-primary">
                        {heading}
                    </h1>
                    {desc && (
                        <p className="text-center text-xl font-semibold text-primary">
                            {desc}
                        </p>
                    )}
                </div>
                <div className='absolute inset-0 z-20 h-full w-full shadow rounded-b-3xl'></div>
            </div>
        </>
    );
};

const data: { date: string; heading: string; desc?: string }[] = [
    {
        date: "21-02-2024",
        heading: "Władca Pierścieni: Drużyna Pierścienia",
        desc: "Gatunek: fantasy, przygodowe ",
    },
    {
        date: "20-02-2024",
        heading: "Sudoku poziom 5",
    },
    {
        date: "19.02.2024",
        heading: "Kroniki Diuny -  Tom 1",
        desc: "Gatunek: sci-fi",
    },
    {
        date: "18.02.2024",
        heading: "Krzyżówka poziom 3",
    },
    {
        date: "17.02.2024",
        heading: "Harry Potter i Kamień Filozoficzny",
        desc: "Gatunek: fantasy",
    },
    {
        date: "16.02.2024",
        heading: "Hashi poziom 8",
    },
    {
        date: "15.02.2024",
        heading: "Władca Pierścieni: Dwie Wieże",
        desc: "Gatunek: fantasy, przygodowe",
    },
];

const History = () => {
    return (
        <div>
            <Header className="absolute z-50 justify-center">
                <h1>Historia Aktywności</h1>
            </Header>
            <div className="absolute inset-0 mt-0 flex h-full grow flex-col items-center justify-evenly overflow-y-scroll pb-16 pt-80">
                {data.map((el, _) => (
                    <HistoryComponent
                        key={el.date}
                        heading={el.heading}
                        date={el.date}
                        desc={el.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default History;
