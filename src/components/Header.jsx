import React from 'react'
import headerImage from '../assets/imgs/header.webp'

const Header = () => {
  return (
    <div className=' [background-color:#1E1E1E] py-14'>
        {/* <div className='bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${headerImage})` }}>
          <img src={headerImage} alt=""  className='opacity-0 '/>
        </div> */}
        <div className="flex flex-col items-center justify-center font-lilitaOne" >
          <h1 className="text-3xl text-center text-white underline underline-offset-4 decoration-orange-500">
          Explora Nuestra Orgía de Sabores
          </h1>
          <p className='w-9/12 mt-12 text-xl text-center text-white '>
          ¡Bienvenidos a "<span className='text-orange-500'>El Palacio del Colesterol</span>"! Aquí, desafiamos los límites de la indulgencia culinaria con un menú lleno de nombres ingeniosos y platillos tentadores. Desde nuestras colosales "Torres de Colesterol" hasta las adictivas "Minas de Salud", <span className='text-orange-500'>cada bocado es una aventura de sabor</span>  que nunca olvidarás. ¡Prepárate para una experiencia gastronómica audaz y deliciosa que desafiará todas tus expectativas!            
          </p>
        </div>
    </div>
  )
}

export default Header
