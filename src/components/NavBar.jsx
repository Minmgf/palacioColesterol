import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div id='navBar' className='w-full h-16 [background-color:#1A1B1D]'>
        <div className="menu [grid-area:menu] text-white flex gap-6 text-3xl font-lilitaOne ml-5 pt-4">
        <Link to="/home" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Inicio</Link>
        <Link to="/contact" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Quienes Somos</Link>
        <a href="#" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Sedes</a>
        <Link to="/product" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>Productos</Link>        
        <a href="#" className='hover:text-orange-400 active:scale-[.98] hover:underline underline-offset-4 decoration-gray-800'>API</a>
        </div>
        <div className="title [grid-area:title] [color:#BF7728] font-lilitaOne text-3xl text-end pr-5 pt-4">
            <a href="#">
            PALACIO DEL COLESTEROL
            </a>
        </div>
    </div>
  )
}

export default NavBar
