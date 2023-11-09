import {Link} from 'react-router-dom'
import ModalLogin from './ModalLogin';

const NavBar = () => {

  return (
    <div id='navBar' className='w-full h-16 [background-color:#1A1B1D]'>
        <div className="menu [grid-area:menu] text-white flex gap-6 text-3xl font-lilitaOne ml-5 pt-4">
        <Link to="/" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Inicio</Link>
        <Link to="/contact" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Quienes Somos</Link>
        <Link to="/product" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Productos</Link>        
        <Link to="/login" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Login </Link>        
        </div>

        
        <div className="title [grid-area:title] [color:#BF7728] font-lilitaOne text-3xl text-end pr-5 pt-4">
        <ModalLogin/>
        </div>
    </div>
  )
}

export default NavBar
