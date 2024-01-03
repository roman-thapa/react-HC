import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  const add = () => setCounter(prev =>prev+1)
  const remove = () => setCounter(prev => prev-1)
  return (
    <>
      <h1>Counter</h1>
      <h2>Current number: {counter}</h2>
      <button onClick={add}>Add number</button>
      <button onClick={remove}>Remove number</button>
    </>
  )
}

export default App
