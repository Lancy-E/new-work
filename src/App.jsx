import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Spotify from'./pages/Spotify'
import Login from './pages/Login'
import './App.css'
import { Routes,Route}from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
      <Route path='/'element={<Spotify/>}/>
      <Route path='/Login'element={<Login/>}/>

      

      </Routes>
    
  )
}

export default App
