import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentTab from './components/ParentTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentTab/>
    </>
  )
}

export default App
