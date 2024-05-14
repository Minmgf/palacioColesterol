'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../AppContext';
import ShoppingCart from '../icons/ShoppingCart';


export default function Header(){
    const session = useSession();
    // console.log(session);
    const status = session.status;
    const userData = session?.data?.user ;
    let userName = userData?.name || userData?.email;
    const {cartProducts} = useContext(CartContext)


    if(userName && userName.includes(' ')){
        userName = userName.split(' ')[0];
    }
    return(
        <header className='flex items-center justify-between px-8 py-4 font-lilitaOne'>
            <nav className='flex items-center gap-8 '>
                <Link href={"/"} className='text-2xl text-primary '>
                    Palacio del Colesterol
                </Link>
            </nav>
            <nav className='flex items-center gap-4 text-white NavLinks '>
                <Link href={'/'} className=''>Inicio</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/sedes'}>Sedes</Link>
                <Link href={'/#info'}>Nosotros</Link>
                {status === 'authenticated' && (
                    <>
                    <Link href={'/profile'} className='whitespace-nowrap'> Hola, {userName}</Link>
                    <button
                    onClick={() => signOut( {callbackUrl: '/'})}
                    className='px-4 py-2 text-white rounded-full bg-primary'>
                        Logout
                    </button>
                    </>
                )}
                {status !== 'authenticated' && (
                    <>
                        <Link href={'/login'} className='text-xl '>
                            Login
                        </Link>
                        <Link href={'/register'} className='px-4 py-2 text-xl text-white bg-gray-600 rounded-full'>
                            Register
                        </Link>
                    </>
                )}
                <Link href={'/cart'} className='relative'>
                    <ShoppingCart/>
                    <span className='absolute px-1 py-1 text-xs leading-3 text-white rounded-full -right-2 -top-3 bg-primary '>
                        {cartProducts.length}
                    </span>
                </Link>


            </nav>
        </header>
    )
}