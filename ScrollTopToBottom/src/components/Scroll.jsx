import React, { useEffect, useRef, useState } from 'react'

const Scroll = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            const res = await fetch('https://dummyjson.com/products?limit=100');
            const data = await res.json();
            if (data && data.products && data.products.length) {
                setData(data.products);
                setLoading(false);
            }

        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    console.log(data);

    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    function handleScrollBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>Scroll to Top and Bottom</h1>
            <h3 className='text-lg font-semibold'>This is Top Section</h3>
            <button onClick={handleScrollBottom} className=' border-2 border-gray-300 py-2 px-4 rounded'>Scroll to Bottom</button>
            <div>
                {
                    loading ? <p>Loading ...</p> : (
                        data && data && data.length ?
                            data.map((item) => (
                                <div key={item.id}>
                                    <p>{item.brand}</p>
                                </div>
                            ))
                            : null
                    )
                }
            </div>
            <button onClick={handleScrollTop} className=' border-2 border-gray-300 py-2 px-4 rounded'>Scroll to Top</button>
            <p ref={bottomRef} className='text-lg font-semibold'>This is Bottom of Page</p>
        </div>
    )
}

export default Scroll
