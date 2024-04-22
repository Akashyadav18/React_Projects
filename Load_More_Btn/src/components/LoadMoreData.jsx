import React, { useEffect, useState } from 'react'

const LoadMoreData = () => {

    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const fetchProduct = async () => {
        try {

            setLoading(true);

            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await res.json();
            if (data && data.products && data.products.length) {
                setProduct((prevData) => [...prevData, ...data.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [count]);

    useEffect(() => {
        if(product && product.length == 100 ) setDisableBtn(true);
    }, [product]);

    console.log(product);

    return (

        <div className='flex flex-col gap-3 m-5'>
            <div className='grid grid-cols-4 gap-5'>
                {
                    loading ? <h1 className='text-xl font-bold text-center'>Loading ...</h1> :
                        product && product.length ?
                            product.map((item) => (
                                <div key={item.id} className='shadow-xl rounded'>
                                    <img src={item.thumbnail} alt={item.title}
                                        className=' object-fill w-full h-[300px] rounded'
                                    />
                                    <h1 className='text-center m-2 text-lg font-bold'>{item.title}</h1>
                                </div>
                            ))
                            : null
                }
            </div>
            <button disabled={disableBtn} onClick={() => setCount(count + 1)} className='border-2 py-2 px-5 text-lg font-semibold mt-5'>Load More Products</button>
            {
                disableBtn ? <p>You have Reach 100 products</p> : null
            }
        </div>
    )
}

export default LoadMoreData
