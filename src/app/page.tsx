import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const TextTask = (props: { name: string; desc: string }) => {
    return (
        <div className="flex w-full flex-col space-y-4 rounded-3xl bg-secondary p-4">
            <h3 className="text-center">{props.name}</h3>
            <p className="text-center">{props.desc}</p>
            <Button>Wybierz</Button>
        </div>
    );
};

const GameTask = (props: { src: string; name: string }) => {
    return (
        <div className="flex w-full flex-col space-y-4 rounded-3xl bg-secondary p-4">
            <div className="relative aspect-square w-full">
                <Image
                    className="rounded-[32px]"
                    src={props.src}
                    alt={props.name + " image"}
                    fill
                />
            </div>
            <Button>{props.name}</Button>
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <Header className="flex justify-center">
                <h1 className="text-xl">Wybierz Swoje Dzienne Zadanie</h1>
            </Header>
            <div className="m-4">
                <h2 className="mb-4 text-center text-lg">
                    Quiz z wybranego tekstu kultury zgodnego z twoimi
                    zainteresowaniami
                </h2>
                <div className="flex flex-col justify-between space-y-4">
                    <TextTask
                        name={"Władca Pierścieni: Drużyna Pierścienia"}
                        desc={"Gatunek: fantasy, przygodowe "}
                    />
                    <TextTask
                        name={"Kroniki Diuny -  Tom 1"}
                        desc={"Gatunek: sci-fi"}
                    />
                </div>
            </div>
            <div className="m-4">
                <h2 className="mb-4 text-center text-lg">
                    Prosta edukacyjna łamigłówka
                </h2>
                <div className="flex justify-between space-x-4">
                    <GameTask src={"/sudoku.png"} name={"Sudoku"} />
                    <GameTask src={"/crossword.png"} name={"Krzyżówka"} />
                </div>
            </div>
        </div>
    );
}
