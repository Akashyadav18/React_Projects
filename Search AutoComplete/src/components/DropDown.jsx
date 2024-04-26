import React from 'react'

const DropDown = ({ data , handleClick}) => {
    return (
        <div className=''>
            {
                data && data.length ?
                    data.map((item, index) => (
                        <div key={index} className=''>
                            <p onClick={handleClick}  className='py-2 shadow cursor-pointer text-lg font-semibold'>{item}</p>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}

export default DropDown
