import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-600 text-3xl">ReactPizza {count}</h1>
      <p className='te'></p>
      <Button className='bg-black text-white cursor-pointer' onClick={() => setCount(count + 1)}>increment</Button>
    </>
  )
}

export default App
