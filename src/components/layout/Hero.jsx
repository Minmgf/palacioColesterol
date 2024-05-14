import Image from "next/image";
import headerImage from '../../../public/header.png';
import Right from "../icons/Right";

export default function Hero(){
    return(
    <div className="font-lilitaOne [background-color:#1E1E1E]">
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${headerImage})` }}>
            <img src={'/header.png'} className=''  />
        </div>
        <div className="flex flex-col items-center mt-24 text-white pb-11">
        <h1 className='text-3xl underline underline-offset-4 decoration-orange-500'>Explora Nuestra Orgía de Sabores</h1>
        <p className='w-9/12 py-12 text-xl text-center'>
        ¡Bienvenidos a "<span className='text-orange-500'>El Palacio del Colesterol</span>"! Aquí, desafiamos los límites de la indulgencia culinaria con un menú lleno de nombres ingeniosos y platillos tentadores. Desde nuestras colosales "Torres de Colesterol" hasta las adictivas "Minas de Salud", <span className='text-orange-500'>cada bocado es una aventura de sabor</span>  que nunca olvidarás. ¡Prepárate para una experiencia gastronómica audaz y deliciosa que desafiará todas tus expectativas!
        </p>
        </div>
    </div>
        // <section className="mt-4 hero">
        //     <div className="py-12 pl-10">
        //         <h1 className="text-4xl font-semibold ">
        //             Everything <br />
        //             is better <br />
        //             with a&nbsp;
        //             <span className="text-primary">
        //                 Pizza
        //             </span>
        //         </h1>
        //         <p className="my-6 text-sm text-gray-500 ">
        //             Pizza is the missing piece that makes
        //             every day complete, a simple yet
        //             delicious joy in life
        //         </p>
        //         <div className="flex gap-4 text-sm ">
        //             <button className="flex items-center justify-center gap-2 px-4 py-2 text-white uppercase rounded-full bg-primary">
        //                 Order now
        //                 <Right/>
        //             </button>
        //             <button className="flex items-center gap-2 py-2 font-semibold text-gray-600 border-0">
        //                 Learn more
        //                 <Right/>
        //             </button>
        //         </div>
        //     </div>
        //     <div className="relative">
        //         <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
        //     </div>
        // </section>
    )
}