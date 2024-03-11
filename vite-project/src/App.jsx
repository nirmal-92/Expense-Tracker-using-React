import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Expense Tracker</div>
      <div className='income-expense-container'>
        <div className='income'>
          <div className='title'>
            Income
          </div>
          <div>
            5000
          </div>
          </div>
          <div className='block'></div>
          <div className='expense'>
            <div className='title'>
              Expense
            </div>
            <div>
              -300
            </div>
          </div>
      </div>
    </>
  )
}

export default App
