import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import DatingCards from './Components/DatingCards'
import SwipeButtons from "./Components/SwipeButtons"
function App() {


  return (
    <div className='app'>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </ div>
  )
}

export default App
