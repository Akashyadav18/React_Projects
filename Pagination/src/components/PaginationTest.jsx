import React, { useState } from 'react'
import Pagination from './Pagination'

const PaginationTest = () => {

    const dummyData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`
    }))

    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

    function handlePageChange(currentPage) {
        setCurrentPage(currentPage);
    }

    return (
        <div className='flex flex-col gap-20'>
            <h1 className='text-4xl font-bold'>Pagination</h1>
            <div className=' grid grid-cols-4 gap-10'>
                {
                    currentListOfItems.map((item) => (
                        <div key={item.id}>
                            <p className=' border-2 border-red-200 py-2 px-5 rounded'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(dummyData.length / itemPerPage)} onPageChange={handlePageChange} />
        </div>
    )
}

export default PaginationTest
