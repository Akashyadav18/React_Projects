import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date())
      }, 1000);

      return (() => {
        clearInterval(intervalId);
      })

    }, [])

  return (
    <div className=' flex flex-col gap-6'>
      <h1 className='text-3xl font-bold'>Digital Clock</h1>
      <div className='flex justify-center items-center gap-3 text-3xl font-bold'>
        <p> {time.getHours().toString().padStart(2, '0')}</p>:
        <p> {time.getMinutes().toString().padStart(2, '0')}</p>:
        <p> {time.getSeconds().toString().padStart(2, '0')}</p>
      </div>
      <div className='text-xl font-bold'>
        {
          time.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: "long",
            day: "numeric",
          })
        }
      </div>
    </div>
  )
}

export default App
