import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [pending, setPending,] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setPending(true);

            const res = await fetch(url, { ...options });
            if (!res.ok) throw new Error(res.statusText);
            const result = await res.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (error) {
            console.log(error.message);
            setError(error);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, pending, error };
}

export default UseFetch
