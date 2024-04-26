import React from 'react'

const UserCard = ({ user }) => {

    const { avatar_url, followers, following, public_repos, name, login, created_at } = user
    const createdDate = new Date(created_at)
    return (
        <div className=' border-2 border-gray-400 flex flex-col justify-evenly items-center py-4 w-[500px]'>
            <a href={`https://github.com/${login}`} target='_blank' className='flex flex-col justify-center items-center gap-4 w-full '>
                <div className='w-[250px]'>
                    <img src={avatar_url} alt={avatar_url} className=' rounded-full' />
                </div>
                <div className='text-2xl font-bold'>Name : {name || login}</div>
                <div className='text-lg font-semibold'>User Joined On : {" "} {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", { month: 'short', })} ${createdDate.getFullYear()}`}</div>
                <div className=' flex justify-around items-center gap-8 text-lg font-semibold'>
                    <p>Followers : {followers}</p>
                    <p>Following : {following}</p>
                    <p>Repository : {public_repos}</p>
                </div>
            </a>
        </div>
    )
}

export default UserCard
