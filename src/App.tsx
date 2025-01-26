import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ReactPizza {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}

export default App
