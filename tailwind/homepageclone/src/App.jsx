import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RevenueCard } from './components/RevenueCard'
import './App.css'

function App() {
  return (
    <div>
      {/* <div className='flex justify-around'>
        <div className='bg-red-500'>hi there from first div</div>
        <div className='bg-yellow-500'>hi there from second div</div>
        <div className='bg-green-500'>hi there from third div</div>
      </div>

      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>hi there from first div</div>
        <div className='bg-yellow-500 col-span-4'>hi there from second div</div>
        <div className='bg-green-500 col-span-2'>hi there from third div</div>
      </div>

      <div className='bg-red-500 md:bg-blue-500'>hit there</div>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500'>Red</div>
        <div className='bg-green-500'>Green</div>
        <div className='bg-yellow-500'>Yellow</div>
      </div> */}
     
      <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
      </div>
    </div>
  )
}

export default App
