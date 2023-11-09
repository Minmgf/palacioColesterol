import React from 'react'
import headerImage from '../assets/img/header.png'

const Header = () => {
  return (
    <div className="font-lilitaOne [background-color:#1E1E1E]">
      <div className='bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${headerImage})` }}>

      <img src={headerImage} className='opacity-0 hover:opacity'  />
      </div>
      <div className="flex flex-col items-center mt-24 text-white pb-11">
        <h1 className='text-3xl underline underline-offset-4 decoration-orange-500'>Explora Nuestra Orgía de Sabores</h1>
        <p className='w-9/12 py-12 text-xl text-center'>
        ¡Bienvenidos a "<span className='text-orange-500'>El Palacio del Colesterol</span>"! Aquí, desafiamos los límites de la indulgencia culinaria con un menú lleno de nombres ingeniosos y platillos tentadores. Desde nuestras colosales "Torres de Colesterol" hasta las adictivas "Minas de Salud", <span className='text-orange-500'>cada bocado es una aventura de sabor</span>  que nunca olvidarás. ¡Prepárate para una experiencia gastronómica audaz y deliciosa que desafiará todas tus expectativas!
        </p>
      </div>
    </div>
  )
}

export default Header
