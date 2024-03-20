import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    let Links = [
        {name: 'Inicio', link: '/home'},
        {name: 'Sedes', link: '/sedes'},
        {name: 'Productos', link: '/products'},
        {name: 'Login', link: '/login'},
    ]
    
    let [isOpen, setisOpen] = useState(false);

    return (
      <>
        <div className='fixed z-30 w-full shadow-md'>
            <div className="items-center justify-between py-4 [background-color:#1E1E1E] px-7 md:px-10 md:flex lg:flex">
                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl cursor-pointer ">
                    <Link to={'/home'} className='flex items-center gap-2'> 
                        <BeakerIcon className="w-6 h-6 text-white" />
                        <span className='text-orange-400 font-lilitaOne'> Palacio del Colesterol </span>
                    </Link>
                </div>
                {/* Hamburger Menu */}
                <div onClick={() => setisOpen(!isOpen)} className="absolute text-white cursor-pointer w-7 h-7 right-8 top-6 md:hidden">
                    {
                        isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* Nav Links here  */}
                <ul className={`md:flex md:items-center text-white font-lilitaOne md:pb-0 pb-12 absolute md:static [background-color:#1E1E1E] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => 
                            <li key={index} className='hover:text-orange-400 my-7 md:my-0 md:ml-8'> 
                                <Link to={link.link}> {link.name} </Link> 
                            </li>
                        )
                    }
                    <Link to={'/home'} className='px-3 py-1 text-white bg-orange-500 rounded btn md:ml-8 md:static'> Ordena Ya! </Link>
                </ul>
            </div>
        </div>
      </>
      
      
    )
}

export default NavBar
