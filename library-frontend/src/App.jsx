import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllBooksPage from './pages/AllBooksPage'

function App() {

  return (
    <>
     <Routes>
      <Route path='/books' element={<AllBooksPage/>}/>
     </Routes>
    </>
  )
}

export default App
