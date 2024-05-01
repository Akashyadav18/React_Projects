import React, { useEffect, useRef, useState } from 'react'

const StopWatch = ({initialTimer, onTimeFinish}) => {

    const [time, setTime] = useState(initialTimer);
    const [isRunning, setIsRunning] = useState(true);
    const intervalReference = useRef();

    useEffect(() => {
        if(isRunning) {
            intervalReference.current = setInterval(() => {
                setTime((prevTime) => {
                    if(prevTime === 0 ) {
                        clearInterval(intervalReference.current);
                        setIsRunning(false);

                        if(onTimeFinish){
                            onTimeFinish()
                        } 

                        return 0;
                    }
                    return prevTime -1;
                })
            }, 1000);
        } else {
            clearInterval(intervalReference.current)
        } 
        
        return () => {
            clearInterval(intervalReference.current);
        }

    }, [isRunning, onTimeFinish]);

    const mins = Math.floor(time / 60);
    const sec = time % 60;

    function handlePauseAndResume () {
        setIsRunning((prevRunning) => !prevRunning);
    }

    function handleReset () {
        clearInterval(intervalReference.current);
        setTime(initialTimer);
        setIsRunning(false);
    }

    function handleStart () {
        setIsRunning(true);
    }

    return (
        <div className='flex flex-col gap-10 mt-10'>
            <p className='text-2xl font-bold'>
                {String(mins).padStart(2, '0')} : {String(sec).padStart(2, '0')}
            </p>
            <div className='text-xl font-bold flex gap-5 justify-center items-center'>
                <button className='border-2 border-gray-300 py-2 px-5' onClick={handlePauseAndResume}>{isRunning ? "Pause" : "Resume"}</button>
                <button className='border-2 border-gray-300 py-2 px-5' onClick={handleReset}>Reset</button>
                <button className='border-2 border-gray-300 py-2 px-5' onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default StopWatch
