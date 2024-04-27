import React, { useRef } from 'react'

const Section = () => {

    const ref = useRef();

    const list = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "600px",
                background: "red"
            },
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "600px",
                background: "blue"
            },
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "600px",
                background: "orange"
            },
        },
        {
            label: "Forth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "violet"
            },
        },
        {
            label: "Fifth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "pink"
            },
        }
    ]

    function handleScroll () {
        let position = ref.current.getBoundingClientRect().top
        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
    }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-lg font-semibold'>Scroll to Particular Section</h1>
            <button onClick={handleScroll} className=' border-2 border-gray-300 py-2 px-4 rounded'>Click To Scroll</button>
            <div>
                {list.map((item, index) => (
                    <div ref={index === 3 ? ref : null} key={item.label} style={item.style}>
                        <p className='text-lg font-semibold'>{item.label}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Section
