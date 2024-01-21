import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const TextTask = () => {
    return <div className='bg-secondary w-full p-4 flex flex-col space-y-4 rounded-3xl'>
        <h3 className='text-center'>Władca Pierścieni: Drużyna Pierścienia</h3>
        <p className='text-center'>Gatunek: fantasy, przygodowe</p>
        <Button>Wybierz</Button>
    </div>;
}

const GameTask = (props: {src: string, name: string}) => {
    return <div className='bg-secondary w-full p-4 flex flex-col space-y-4 rounded-3xl'>
        <div className="relative w-full aspect-square">
            <Image
                className="rounded-[32px]"
                src={props.src}
                alt={""}
                fill
            />
        </div>
        <Button>{props.name}</Button>
    </div>;
}

export default function Home() {
    return <div className=''>
        <Header className='flex justify-center'>
            <h1 className='text-xl'>
                Wybierz Swoje Dzienne Zadanie
            </h1>
        </Header>
        <div className="m-4">
            <h2 className="text-lg mb-4 text-center">
                Quiz z wybranego tekstu kultury zgodnego z twoimi zainteresowaniami
            </h2>
            <div className="flex flex-col justify-between space-y-4">
                <TextTask />
                <TextTask />
            </div>
        </div>
        <div className="m-4">
            <h2 className="text-lg mb-4 text-center">
                Prosta edukacyjna łamigłówka
            </h2>
            <div className='flex justify-between space-x-4'>
                <GameTask
                    src={'/sudoku.png'}
                    name={'Sudoku'}
                />
                <GameTask
                    src={'/crossword.png'}
                    name={'Krzyżówka'}
                />
            </div>
        </div>
    </div>;
}
