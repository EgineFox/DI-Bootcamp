import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

import { Routes, Route, Link } from 'react-router'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product/:id' element={<Home></Home>}></Route>
    </Routes>
    <Home></Home>
    <About></About>
    <Shop></Shop>
    </>
  )
}

export default App
