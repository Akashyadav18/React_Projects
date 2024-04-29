import React from 'react'

const Pagination = ({ totalPages, onPageChange, currentPage }) => {

    function generateNoOfPages() {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages
    }

    return (
        <div className='flex justify-evenly items-center'>
            <button onClick={() => onPageChange(currentPage -1)} disabled={currentPage ===1} className='border-2 border-gray-400 py-2 px-5 rounded-md'>Prev</button>
            {
                generateNoOfPages().map((pageNo) => (
                    <div key={pageNo}>
                        <button className='border-2 border-gray-400 py-1 px-3 rounded-md' onClick={() => onPageChange(pageNo)}>{pageNo}</button>
                    </div>
                ))
            }
            <button onClick={() => onPageChange(currentPage +1)} disabled={currentPage === totalPages} className={`border-2 border-gray-400 py-2 px-5 rounded-md`}>Next</button>
        </div>
    )
}

export default Pagination
