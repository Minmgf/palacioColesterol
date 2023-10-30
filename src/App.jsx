import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Index from './pages/index'


function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element ={<Login/>} />
      <Route path ='/home' element ={<Index/>} />
    </Routes>

    </>
  )
}
export default App