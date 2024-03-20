import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Index from "./pages/index"
import Sedes from "./pages/Sedes"
import Products from "./pages/Products"
import Login from "./pages/Login"

function App() {
  return (
    <>

    <Routes>
      <Route path ='/login' element ={<Login/>} />
      <Route path ='/' element ={<Index/>} />
      <Route path ='/home' element ={<Index/>} />
      <Route path ='/products' element ={<Products/>} />
      <Route path ='/sedes' element ={<Sedes/>} />
    </Routes>


    </>
  )
}

export default App
