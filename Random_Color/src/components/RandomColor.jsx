import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    function handleCreateRandomHexColor() {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomNo(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor)
    }
    function RandomNo(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomRgbColor() {
        const r = RandomNo(256);
        const g = RandomNo(256);
        const b = RandomNo(256);

        setColor(` rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if(typeOfColor === "hex") handleCreateRandomHexColor()
        else handleCreateRandomRgbColor()
    }, [typeOfColor])

    return (
        <div className='text-center' style={{ width: "100vw", height: "94vh", background: color }}>
            <div >
                <button onClick={() => setTypeOfColor('hex')} className='bg-white text-black py-1 border-2 border-teal-400 px-4 text-xl mx-2'>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')} className='bg-white text-black py-1 border-2 border-teal-400 px-4 text-xl mx-2'>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className='bg-white text-black py-1 border-2 border-teal-400 px-4 text-xl mx-2'>Generate Random Color</button>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center mt-40 text-3xl font-bold text-white'>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color" } </h3>
                <h1 className='text-5xl font-bold'> {color}</h1>
            </div>
        </div>
    )
}

export default RandomColor
