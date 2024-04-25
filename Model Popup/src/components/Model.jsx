import React from 'react'

const Model = ({ id, header, main, footer, onClose }) => {
    return (
        <div className=' fixed z-10 left-0 top-0 w-full h-screen overflow-auto pt-[150px] bg-[#bef264]'>
            <div id={id || 'Model'} className=' relative bg-white border-2 border-gray-400 w-[70%] m-auto'>
                <div>
                    <span onClick={onClose} className='cursor-pointer absolute right-0 top-0 text-2xl font-bold'>&times;</span>
                </div>
                <div className='flex flex-col gap-3 justify-around items-center text-center py-2 px-4'>
                    <div className='text-xl font-semibold w-full p-2 bg-[#93c5fd]'>Header</div>
                    <div className='text-xl font-semibold w-full p-2 bg-[#fdba74] h-[200px]'>Body</div>
                    <div className='text-xl font-semibold w-full p-2 bg-[#a5f3fc]'>{footer}</div>
                </div>
            </div>
        </div>
    )
}

export default Model
