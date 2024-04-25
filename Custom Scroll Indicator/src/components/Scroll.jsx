import React, { useEffect, useState } from 'react'

const Scroll = ({ url }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState();

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);

            const res = await fetch(getUrl);
            const data = await res.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }


        } catch (error) {
            console.log(error);
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (errorMsg) {
        <h1>Some Error Occurs While fetching Data</h1>
    }

    function handleScrollPercentage() {
        console.log("BodyTop: ", document.body.scrollTop,
            "Top :", document.documentElement.scrollTop,
            "Height :", document.documentElement.scrollHeight,
            "ClientHeight :", document.documentElement.clientHeight
        );

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight || document.documentElement.clientTop;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);
        return window.removeEventListener("scroll", () => { })
    }, []);

    console.log("% ", scrollPercentage);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' sticky top-0 z-10 bg-zinc-400 w-full text-center'>
                <h1 className='text-2xl font-bold py-4'>Custom Scroll Indicator</h1>
                <div className=' bg-green-400'>
                    <div style={{ width: `${scrollPercentage}%` }} className='h-3 bg-violet-400'>

                    </div>
                </div>
            </div>
            {
                loading ? <h1 className='text-lg font-semibold'>Loading ...</h1> :
                    data && data.length > 0 ?
                        data.map((dataItem) => (
                            <div key={dataItem.id}>
                                <p className='text-lg font-semibold'>{dataItem.title}</p>
                            </div>
                        ))
                        : null
            }

        </div>
    )
}

export default Scroll
