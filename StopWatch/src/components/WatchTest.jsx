import React from 'react'
import StopWatch from './StopWatch'

const WatchTest = () => {

    function handleTimeFinish () {
        console.log("Once the timer is finish make a api call");
    }

    return (
        <div>
            <h1 className='text-3xl font-bold'>CountDown Timer</h1>
            <StopWatch initialTimer={120} onTimeFinish={handleTimeFinish} />
            <p>After the time finish we can call Api</p>
        </div>
    )
}

export default WatchTest
