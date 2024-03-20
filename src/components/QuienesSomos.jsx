import React from 'react'
import food from '../assets/imgs/food.webp'

const QuienesSomos = () => {
  return (
    <>
        <div className='  text-3xl flex flex-col items-center py-16 font-lilitaOne justify-center sm:flex md:flex px-36  text-white [background-color:#1E1E1E]'>
            <h2 className='underline decoration-orange-400'>Quienes Somos!</h2>

            <div className="flex-wrap sm:flex-col sm:flex-nowrap md:flex-col lg:flex-row xl:flex ">
                <p className='pt-12 pr-0 text-wrap text-l sm:text-l md:text-2xl lg:text-3xl xl:text-3xl '>
                    Nuestra historia es tan única como nuestros sabores. Fundada por un chef irreverente y un amante del humor absurdo, nuestra tienda es el resultado de un experimento culinario que salió completamente de control. Imagina a un chef lanzando papas fritas por los aires y riendo histéricamente mientras monta una hamburguesa gigante en el centro de la cocina. Esa es más o menos la escena que dio origen a "El Palacio del Colesterol". 
                </p>

                <img src={food} className='hidden mx-12 w-80 sm:invisible md:hidden lg:hidden xl:flex xl:visible' alt="" />

            </div>

        </div>


    </>
  )
}

export default QuienesSomos
