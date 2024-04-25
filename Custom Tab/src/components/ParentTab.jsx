import React from 'react'
import Tabs from './Tabs'

function RandomContent() {
    return <h1>Some Random content</h1>
}

const ParentTab = () => {

    const tabs = [
        {
            label: 'Tab 1',
            content: "This is Tab 1",
        },
        {
            label: 'Tab 2',
            content: [
                <div className='flex flex-col gap-20'>
                    <div>This is Tab 2</div>,
                    <div>This is Arrya tab 2</div>
                </div>
            ]
        },
        {
            label: 'Tab 3',
            content: <div>This is Tab 3</div>
        },
        {
            label: 'Tab 4',
            content: <RandomContent />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return (
        <div>
            <Tabs tabsContent={tabs} onChange={handleChange} />
        </div>
    )
}

export default ParentTab
