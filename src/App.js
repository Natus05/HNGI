import React from 'react'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='bg-[#ffffff]'>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
      </Router>
    </div>
  )
}

export default App