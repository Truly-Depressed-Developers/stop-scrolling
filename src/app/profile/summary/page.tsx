"use client"

import React from "react";
import {
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Line, ComposedChart
} from "recharts";
import Header from "@/components/Header";

type Data = {
    month: string
    minutes: number
    estimatedMinutes?: number
}

let data: Data[] = [
    {
        month: 'Styczeń',
        minutes: 2100,
    },
    {
        month: 'Luty',
        minutes: 2000,
    },
    {
        month: 'Marzec',
        minutes: 2500,
    },
    {
        month: 'Kwiecień',
        minutes: 2600,
    },
    {
        month: 'Maj',
        minutes: 2300,
    },
    {
        month: 'Czerwiec',
        minutes: 2700,
    },
    {
        month: 'Lipiec',
        minutes: 2350,
    },
    {
        month: 'Sierpień',
        minutes: 2550,
    },
    {
        month: 'Wrzesień',
        minutes: 2400,
    },
    {
        month: 'Październik',
        minutes: 2900,
    },
    {
        month: 'Listopad',
        minutes: 2300,
    },
    {
        month: 'Grudzień',
        minutes: 2100,
    },
];


// Linear regression

let xSum=0, ySum=0 , xxSum=0, xySum=0;
let count = data.length;
for (let i = 0, len = count; i < count; i++) {
    xSum += i;
    ySum += data[i].minutes;
    xxSum += i * i;
    xySum += i * data[i].minutes;
}

let a = (count * xySum - xSum * ySum) / (count * xxSum - xSum * xSum);
let b = (ySum / count) - (a * xSum) / count;

for (let i = 0; i < data.length; i++) {
    data[i].estimatedMinutes = i * a + b
}


const Summary = () => {
    return <div className="flex h-full flex-col">
        <Header className="justify-center">
            <h1>Podsumowanie miesiąca</h1>
        </Header>
        <ResponsiveContainer width="100%" height={400} className='mt-6'>
            <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="#d0a616" activeBar={<Rectangle fill="#c8cdff" stroke="#464d77" />} />
                <Line dataKey="estimatedMinutes" stroke="#464d77" dot={false} activeDot={false} legendType="none" />
            </ComposedChart>
        </ResponsiveContainer>
        <div className="m-4 flex items-center justify-between rounded-xl bg-secondary p-4 h-full text-center text-xl">
            {
                a > 0 ?
                    <>W tym miesiącu zwiększyłeś ilość czasu spędzanego przed telefonem</>
                    :
                    <>W tym miesiącu udało ci się obniżyć ilość czasu spędzanego przed telefonem</>
            }
        </div>
    </div>
};

export default Summary;
