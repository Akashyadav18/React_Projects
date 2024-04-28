import React from 'react'
import UseFetch from './UseFetch'
import { useEffect } from 'react';

const Test = () => {

    const { data, pending, error } = UseFetch('https://dummyjson.com/products', {});
    console.log(data, pending, error);

    useEffect(() => {
        // Handle loading, error, and data here
        if (pending) {
            console.log("pending loading");
        } else if (error) {
            console.log(error.message);
        } else {
            // Render your data
            console.log(data); // Check the data structure
        }
    }, [data, pending, error]);

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {/* <div>
                {
                    data && data.products && data.products.length ?
                        data.products.map((item) => (
                            <div key={item.id}>
                                <p>{item.title}</p>
                            </div>
                        ))
                        : null
                }
            </div> */}
        </div>
    )
}

export default Test
