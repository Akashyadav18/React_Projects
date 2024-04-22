import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";


const ImageSlider = ({ url, limit, page }) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);

            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await res.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url]);

    if (loading) {
        <h1>Loading ... </h1>
    }
    if (errorMsg !== null) {
        <h1>Some Error Occur</h1>
    }

    function handlePrevious () {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext () {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    console.log(images);    

    return (
        <div className='w-full h-screen'>
            <h1 className='text-4xl font-bold mb-2 text-center'>ImageSlider</h1>
            <div className='flex justify-center items-center relative'>
                <FaRegArrowAltCircleLeft onClick={handlePrevious} className=' z-10 absolute left-0 ml-5 cursor-pointer' color='white' size={30} />
                {
                    images && images.length > 0 ?
                        images.map((imageItem) => (
                            <div key={imageItem.id}>
                                <img src={imageItem.download_url} alt={imageItem.download_url}
                                    className='shadow-[0px, 0px, 7px, #666] max-w-fit max-h-[calc(100vh-3rem)]'
                                />
                            </div>
                        ))
                        : null
                }
                <FaRegArrowAltCircleRight onClick={handleNext} className=' z-10 absolute right-0 mr-5 cursor-pointer' color='white' size={30} />

                <span>
                    {images && images.length ?
                        images.map((_, index) => (
                            <div className='flex absolute z-10 bottom-6'>
                                <button key={index} className=' text-teal-400 bg-yellow-300 h-10 w-10 rounded-full border-none outline-none m-[0, 0.2rem] cursor-pointer'>Hello</button>
                            </div>
                        ))
                        : null}
                </span>
            </div>
        </div>
    )
}

export default ImageSlider
