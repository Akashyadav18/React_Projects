import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentModel from './components/ParentModel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentModel/>
    </>
  )
}

export default App
