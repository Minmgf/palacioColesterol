import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Index from './pages/index'
import Productos from './pages/productos'


function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element ={<Login/>} />
      <Route path ='/home' element ={<Index/>} />
      <Route path ='/product' element ={<Productos/>} />
    </Routes>

    </>
  )
}
export default App