import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({ item }) => {

    const [display, setDisplay] = useState({});

    function handleToggle (getCurrentLabel) {
        setDisplay({
            ...display,
            [getCurrentLabel] : !display[getCurrentLabel]
        })
    }

    console.log(display);

    return (
        <li className=''>
            <div className='flex gap-2'>
                <p>{item.label}</p>
                {item && item.children && item.children.length ? <span onClick={() => handleToggle(item.label)}>
                    {
                        display[item.label] ? <span className='text-2xl font-bold cursor-pointer'>-</span> : <span className='text-2xl font-bold cursor-pointer   '>+</span>
                    }
                </span> : null}
            </div>
            {
                item && item.children && item.children.length > 0 && display[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem
