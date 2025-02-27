import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


      <Footer />

      
    </div>
  )
}

export default App
