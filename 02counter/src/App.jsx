import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15)
  // let counter =15
const addValue = ()=>{
setcounter((prevCouter) => prevCouter +1)
setcounter((prevCouter) => prevCouter +2)
setcounter((prevCouter) => prevCouter +2)
setcounter((prevCouter) => prevCouter +1)
}

const removeValue = ()=>{
  setcounter((prevCouter) => prevCouter -1)
  setcounter((prevCouter) => prevCouter -6)
  setcounter((prevCouter) => prevCouter -9)
  setcounter((prevCouter) => prevCouter -1)
}

  return (
    <>
      <h1>React Course O1 {counter}</h1>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
