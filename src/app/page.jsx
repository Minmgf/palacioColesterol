import AboutUs from '@/components/layout/AboutUs';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home(){
    return (
    <>
        <Hero/>
        <HomeMenu/>
        <AboutUs/>

        {/* <section className='max-w-2xl mx-auto my-8 text-center ' id='contact'>
            <SectionHeaders subHeader="Don\'t hesitate" mainHeader="Contact us" />
            <div className="mt-8">
                <a href="tel:+573157541225" className='text-4xl text-gray-500 underline '>
                    +57 315 754 1225
                </a>
            </div>
        </section> */}

    </>
    );
};