import React from 'react'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  return (
    <div className='bg-[#ffffff]'>
      <HashRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
       <Footer />
      </HashRouter>
    </div>
  )
}

export default App