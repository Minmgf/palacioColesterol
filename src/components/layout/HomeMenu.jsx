'use client'
import Image from 'next/image';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';

export default function HomeMenu(){
    const [bestSellers, setBestSellers] = useState([]);

    useEffect( () => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setBestSellers(menuItems.slice(0, 3));
            });
        });
    }, []);


    return(
        <section className="py-10 bg-orange-400">
            <div className="max-w-6xl mx-auto">

            {/* <div className='absolute left-0 right-0 justify-start w-full'>
                <div className="absolute left-0 -top-[70px] -z-10">
                    <Image src="/sallad1.png" alt="sallad" width={	109 } height={ 189} />
                </div>
                <div className=" absolute -top-[100px] -z-10 right-0">
                    <Image src="/sallad2.png" alt="Sallad" width={	107 } height={ 195} />
                </div>
            </div> */}
            <div className="mb-4 text-center">
                {/* <SectionHeaders
                    subHeader="Mira lo que tenemos para ti"
                    mainHeader="Mas vendidos" /> */}
                    <h1 className='text-3xl text-center text-white underline underline-offset-4 font-lilitaOne decoration-zinc-500'>Productos mas vendidos</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {bestSellers?.length > 0 && bestSellers.map( item => (
                    <MenuItem {...item}/>
                ))}
            </div>
            </div>

        </section>
    )
}