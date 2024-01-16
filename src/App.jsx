import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/navbar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar/>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    </>
  )
}

export default App
