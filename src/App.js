import React from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Social from './components/Social'

function App() {
  return (
    <div className='bg-[#ffffff]'>
       <div className='flex flex-col items-center py-[64px] px-[0px] gap-[24px]'>
          <Main />
          <Social />
          <Footer />
       </div>
    </div>
  )
}

export default App