import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const Theme = () => {

    const [theme, setTheme] = UseLocalStorage('theme', "dark");

    function handleToggleTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);

    return (
        <div className={`${theme === "dark" ? ' bg-black text-white' : ' bg-white text-black'} flex flex-col justify-center items-center h-screen`}>
            <p className='text-2xl font-bold mb-10'>Hello World</p>
            <button onClick={handleToggleTheme} className='text-xl font-semibold border-2 border-gray-400 py-2 px-5'>ChangeTheme</button>
        </div>
    )
}

export default Theme
