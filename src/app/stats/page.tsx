'use client'

import React, { useEffect, useState } from "react";
import { Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Text } from "recharts";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"



type Data = {
    name: string
    minutes: number
    color: string
}

const defaultData = [
    {
        name: "Facebook",
        minutes: 130,
        color: '#0866FF'
    },
    {
        name: "YouTube",
        minutes: 190,
        color: '#FF0000'
    },
    {
        name: "TikTok",
        minutes: 84,
        color: '#000000'
    },
    {
        name: "Instagram",
        minutes: 118,
        color: '#E4405F'
    },
];


const Stats = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const[data, setData] = useState(defaultData)

    if (!mounted) return <></>;

    const time = data.reduce((acc, obj) => acc + obj.minutes, 0)
    const hours = Math.floor(time / 60)
    const minutes = time % 60

    const biggestTime = Math.max(...data.map(el => el.minutes))

    return <div>
        <Header className='flex justify-center'>
            <h1 className='text-xl'>
                Dzisiaj spędziłeś na telefonie
            </h1>
        </Header>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie data={data} dataKey="minutes" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={140} fill="#82ca9d">
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color}/>
                        ))
                    }
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
                <text x="50%" y="47%" className='text-2xl text-center' textAnchor="middle" dominantBaseline="middle">
                    {hours}h {minutes}min
                </text>
            </PieChart>
        </ResponsiveContainer>

        <div className='bg-secondary p-4 flex flex-col space-y-4 rounded-3xl m-4'>
            {data
                .toSorted((a, b) => b.minutes - a.minutes)
                .map((el, i) =>
                <div key={el.name}>
                    <h2>
                        {el.name} - {Math.floor(el.minutes / 60)}h {el.minutes % 60}min
                    </h2>
                    <Progress
                        indicatorColor={el.color}
                        value={100 * el.minutes / biggestTime}
                    />
                </div>
            )}
        </div>

    </div>;
};

export default Stats;
