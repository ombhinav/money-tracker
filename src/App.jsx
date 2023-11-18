import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Amount, setAmount] = useState(0)
  let amount = 0;
  

  return (
    <>
      <div>
        <h1 className='box-content mb-6 p-4 border-4 text-orange-400 container'>Money Tracker</h1>
      </div>
      <h1 className='text-xl '>Total Amount Spent: ₹{amount}</h1>
      <div className="card">
        <input type='number' min={0} max={99999} placeholder="Enter your amount" className='rounded-full p-4 w-[100%] mb-3' ></input>
        <div className='flex'>

        <button className='p-4 m-4' onClick={() => setAmount((amount) => amount + 1)} >Add Item</button>
        <button className= 'p-4 m-4' >
          Total Items:  {count}
        </button>
        </div>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
