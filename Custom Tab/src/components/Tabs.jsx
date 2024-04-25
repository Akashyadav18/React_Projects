import React from 'react'
import { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className='flex flex-col justify-center items-center gap-16 '>
            <div className='flex gap-10'>
                {
                    tabsContent.map((tabItem, index) => (
                        <div onClick={() => handleOnClick(index)} key={tabItem.label}>
                            <button className='text-2xl font-bold py-2 px-4 border rounded'>{tabItem.label}</button>
                        </div>
                    ))
                }
            </div>
            <div className='text-lg font-semibold bg-yellow-200 h-[calc(100vh-7rem)] w-full text-center'>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content }
            </div>
        </div>
    )
}

export default Tabs
