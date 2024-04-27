import React, { useRef, useState } from 'react'
import ModeTest from './ModeTest';

const Model = () => {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    ModeTest(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent ?
                    <div ref={ref} className='border-gray-300 border-2 h-[200px] text-xl font-semibold'>
                        <h1>This is Random content</h1>
                        <p>Click out side to close</p>
                    </div>
                    :
                    <button className='border-2 border-gray-200 rounded py-2 px-4 text-2xl font-bold' onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}

export default Model
