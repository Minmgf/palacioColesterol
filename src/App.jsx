import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Index from './pages/index'
import Contacto from './pages/contacto'


function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element ={<Login/>} />
      <Route path ='/home' element ={<Index/>} />
      <Route path ='/contact' element ={<Contacto/>} />
    </Routes>

    </>
  )
}
export default App