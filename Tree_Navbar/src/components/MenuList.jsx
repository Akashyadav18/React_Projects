import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {
    return (
        <ul className='max-w-[250px] py-5 bg-[#8b5cf6] text-white flex flex-col gap-5 px-8'>
            {
                list && list.length ?
                    list.map((listItem) => (
                        <div className='flex flex-col gap-2 text-xl font-semibold'>
                            <MenuItem item={listItem} />
                        </div>
                    ))
                    : null
            }
        </ul>
    )
}

export default MenuList
