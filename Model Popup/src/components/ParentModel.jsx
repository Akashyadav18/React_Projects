import React, { useState } from 'react'
import Model from './Model';

const ParentModel = () => {

    const [showModelPopup, setShowModelPopup] = useState(false);

    function handleToggleModelPopup () {
        setShowModelPopup(!showModelPopup);
    }

    function onClose () {
        setShowModelPopup(false);
    }

    return (
        <div className='flex justify-center items-center'>
            <button onClick={handleToggleModelPopup} className='mt-[150px] py-2 px-5 bg-[#fb923c] text-white rounded text-xl font-semibold border-2 border-gray-200'>Open Model Popup</button>
            {
                showModelPopup && <Model onClose={onClose} footer={<div>Footer</div>}/>
            }
        </div>
    )
}

export default ParentModel
