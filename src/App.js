import React from 'react'
import Container from './components/Container'

function App() {
  return (
    <div className='sm:overflow-y-scroll bg-[#ffffff]'>
       <div className='flex flex-col items-center py-[64px] px-[0px] gap-[24px]'>
          <Container />
       </div>
    </div>
  )
}

export default App