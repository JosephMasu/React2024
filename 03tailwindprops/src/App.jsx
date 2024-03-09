import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'MASU',
    age: 25,
    address:{
      city: 'Kampala',
      state: 'Makindye',
      country: 'Uganda'
    }
  }
  let newArr =[1,2,3,4,5,6,7,8,9]

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>VIte wit tailwind</h1>
    <Card username="Masu Joe"/>
    <Card username="Gaga M" myArr={newArr}/>
    <Card username="Masu Joe" post='Tech lead'/>
    
    </>
  )
}

export default App
