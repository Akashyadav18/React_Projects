import React, { useEffect, useState } from 'react'

const Random = () => {

    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(null);

    const fetchQuote = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://api.quotable.io/quotes/random', {
                method: 'GET',
            })
            const data = await res.json();
            if(data && data.length > 0) {
                setQuote(data[0])
                setLoading(false);
            }
            
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote()
    }, []);

    console.log(quote);

    function handleRefresh () {
        fetchQuote();
    }

    return (
        <div className='flex flex-col gap-10 justify-center items-center mt-10'>
            <h1 className='text-3xl font-bold'>Random Quote Generate</h1>
            <div>
            {
                loading ? <p className='text-2xl font-bold'>Loading...</p> : (
                    <div className='flex flex-col items-center justify-center gap-3 shadow-md border p-5'>
                        <p className='text-xl font-bold'>{quote.author}</p>
                        <p className='text-lg font-semibold'>{quote.content}</p>
                    </div>
                )
            }
            </div>
            <button onClick={handleRefresh} className='shadow py-2 px-5 text-lg font-semibold rounded-md hover:bg-[#a3e635] hover:text-white'>Refresh</button>
        </div>
    )
}

export default Random
