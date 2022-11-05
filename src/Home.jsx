import React from 'react'
import Main from './components/Main'
import Social from './components/Social'


function Home() {
  return (
    <div>
        <div className='flex flex-col items-center py-[64px] px-[0px] gap-[24px]'>
          <Main />
          <Social />
        </div>
 </div>
  )
}

export default Home