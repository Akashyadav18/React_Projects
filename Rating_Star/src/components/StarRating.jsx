import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

const StarRating = ({ noOfStar = 10 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick (getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter (getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave () {
        setHover(rating)
    }

    return (
        <div className='flex gap-2 justify-center items-center'>
            {
                [...Array(noOfStar)].map((_, index) => { index += 1
                    return <FaStar key={index} className={index <= (hover || rating) ? "text-yellow-300" : " text-black"}  onClick={() => handleClick(index)} onMouseMove={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} size={40} />
            })
            }
        </div>
    )
}

export default StarRating
