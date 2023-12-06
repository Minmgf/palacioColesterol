import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Index from './pages/index'
import Contacto from './pages/contacto'
import Productos from './pages/productos'


function App() {
  return (
    <>
    <Routes>
      <Route path ='/login' element ={<Login/>} />
      <Route path ='/home' element ={<Index/>} />
      <Route path ='/product' element ={<Productos/>} />
      <Route path ='/contact' element ={<Contacto/>} />
    </Routes>

    </>
  )
}
export default App