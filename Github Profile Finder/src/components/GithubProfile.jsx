import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const GithubProfile = () => {

    const [userName, setUserName] = useState('AkashYadav18');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        fetchGithubUserData();
    }

    const fetchGithubUserData = async () => {
        try {
            setLoading(true);

            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            if (data) {
                setUserData(data);
                setLoading(false);
                setUserName("");
            }
            console.log(data);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center gap-10 mt-20'>
            <div className=' flex gap-10 text-xl font-semibold'>
                <input className='py-2 px-5 w-[350px] border-2 rounded border-gray-300' type='text' onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='Search Github Username' />
                <button className='py-2 px-5 border-2 rounded border-gray-300' onClick={handleSubmit}>Search</button>
            </div>
            <div>
                {
                    loading ? <p className='text-center text-3xl font-bold'>Loading ...</p> : (
                        <div>
                            {
                                userData !== null ? <UserCard user={userData} /> : null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default GithubProfile
