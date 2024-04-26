import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import DropDown from './DropDown';

const Search = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const res = await fetch('https://dummyjson.com/users?limit=100');
            const data = await res.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
            }
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    function handleChange(e) {
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredUser = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUser(filteredUser);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    function handleClick (e) {
        console.log(e.target.innerText);
        setShowDropDown(false);
        setSearchParam(e.target.innerText);
    }

    console.log(users, filteredUser);

    return (
        <div>
            {
                loading ? <p className='text-3xl font-bold'>Loading ...</p> : (
                    <input value={searchParam} onChange={handleChange} className='text-xl font-semibold border-2 border-gray-400 p-2 w-[300px]' type='text' placeholder='Search User...' />
                )
            }
            <div className=''>
            {
                showDropDown && <DropDown handleClick={handleClick} data={filteredUser}/>
            }
            </div>
        </div>
    )
}

export default Search
