import { useState } from 'react'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    </>
  )
}

export default App
