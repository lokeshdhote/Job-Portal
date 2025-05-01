import { useState } from 'react'

import './App.css'

import RoutesFile from '../Routes/RoutesFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutesFile/>
    </>
  )
}

export default App
