import React from 'react'

const DropDown = ({ data }) => {
    return (
        <div className=''>
            {
                data && data.length ?
                    data.map((item, index) => (
                        <div key={index} className=''>
                            <p className='py-2 shadow text-lg font-semibold'>{item}</p>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}

export default DropDown
