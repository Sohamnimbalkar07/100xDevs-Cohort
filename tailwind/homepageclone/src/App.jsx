import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <div className='flex justify-around'>
        <div className='bg-red-500'>hi there from first div</div>
        <div className='bg-yellow-500'>hi there from second div</div>
        <div className='bg-green-500'>hi there from third div</div>
      </div>

      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>hi there from first div</div>
        <div className='bg-yellow-500 col-span-4'>hi there from second div</div>
        <div className='bg-green-500 col-span-2'>hi there from third div</div>
      </div>
    </div>
  )
}

export default App
