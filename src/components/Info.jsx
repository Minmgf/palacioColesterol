import BackgroundFood from '../assets/img/food2.jpg'

const Info = () => {
    return (
        <div className='grid w-full grid-cols-2 px-20 py-20 text-white bg-center bg-no-repeat bg-cover cellphone:max-lg:px-10 min-h-fit max-h-auto' style={{ backgroundImage: `url(${BackgroundFood})` }}>
            <div className="w-full pt-5 min-h-auto cellphone:max-lg:col-span-2 min-w-screen max-h-fit" style={{ backgroundColor: 'rgba(27, 27, 27, 0.90)' }}>
                <div className='grid w-full gap-10 grid-rows-[30%_minmax(70%,_1fr)] px-10 py-16 cellphone:max-sm:px-5 cellphone:max-sm:py-10'>
                    <h1 className='p-0 m-0 text-6xl text-center cellphone:max-lg:text-5xl font-lilitaOne'>Contáctenos</h1>
                    <p className='text-xl text-justify text-gray-400'>En El Palacio del Colesterol, valoramos tu opinión y estamos aquí para responder a todas tus preguntas, comentarios y sugerencias. No dudes en ponerte en contacto con nosotros.</p>
                </div>
                <div className='grid justify-center grid-cols-2 grid-rows-2 pt-5 text-center divide-y-2 divide-slate-700 cellphone:max-sm:grid-rows-3 w-100'>
                    <div className='grid h-auto col-span-2 grid-rows-3 py-5 w-100'>
                        <div className='grid justify-center w-100'>
                            <svg className="w-10 h-10 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <p className='text-xl font-bold tracking-widest text-gray-400'>TELEFONO</p>
                        <p className='text-lg'>8734737</p>
                    </div>
                    <div className='grid h-auto grid-rows-3 py-5 border-r cellphone:max-sm:border-0 cellphone:max-sm:col-span-2 w-100'>
                        <div className='grid justify-center w-100'>
                            <svg className="w-10 h-10 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                        </div>
                        <p className='text-xl font-bold tracking-widest text-gray-400'>CORREO</p>
                        <p className='text-lg'>palacio.colesterol@email.com</p>
                    </div>
                    <div className='grid h-auto grid-rows-2 py-5 border-l cellphone:max-sm:border-0 cellphone:max-sm:col-span-2 w-100'>
                        <p className='text-xl font-bold tracking-widest text-gray-400'>SÍGUENOS</p>
                        <div className='grid justify-center grid-cols-2 px-10 w-100'>
                            <a href="#" className='grid justify-center'>
                                <svg className="w-10 h-10 stroke-2" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.7273 0C63.8486 0 68 4.15155 68 9.27273V58.7273C68 63.8486 63.8486 68 58.7273 68H9.27273C4.15155 68 0 63.8486 0 58.7273V9.27273C0 4.15155 4.15155 0 9.27273 0H58.7273ZM58.7273 6.18182C60.4344 6.18182 61.8182 7.56568 61.8182 9.27273V58.7273C61.8182 60.4344 60.4344 61.8182 58.7273 61.8182H43.2727V40.1815H49.6901C51.0204 40.1815 52.2014 39.3303 52.6224 38.0679L53.9917 33.9601C54.4921 32.4589 53.3747 30.9088 51.7925 30.9088H43.2727V24.727C43.2727 23.1816 44.8182 21.6361 46.3636 21.6361H52.5455C54.2526 21.6361 55.6364 20.2523 55.6364 18.5452V16.4249C55.6364 15.4264 54.9987 14.5313 54.0331 14.2765C49.9815 13.2073 46.3636 13.2073 46.3636 13.2073C38.6364 13.2073 34 18.5452 34 23.1816V30.9088H27.8182C26.1111 30.9088 24.7273 32.2926 24.7273 33.9997V37.0906C24.7273 38.7977 26.1111 40.1815 27.8182 40.1815H34V61.8182H9.27273C7.56568 61.8182 6.18182 60.4344 6.18182 58.7273V9.27273C6.18182 7.56568 7.56568 6.18182 9.27273 6.18182H58.7273Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#" className='grid justify-center'>
                                <svg className="w-10 h-10 stroke-2" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_i_3_81)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 51C43.3888 51 51 43.3888 51 34C51 24.6112 43.3888 17 34 17C24.6112 17 17 24.6112 17 34C17 43.3888 24.6112 51 34 51ZM34 45.3333C40.2591 45.3333 45.3333 40.2591 45.3333 34C45.3333 27.7408 40.2591 22.6667 34 22.6667C27.7408 22.6667 22.6667 27.7408 22.6667 34C22.6667 40.2591 27.7408 45.3333 34 45.3333Z" fill="white" />
                                        <path d="M51 14.1667C49.4352 14.1667 48.1667 15.4353 48.1667 17.0001C48.1667 18.5649 49.4352 19.8334 51 19.8334C52.5649 19.8334 53.8333 18.5649 53.8333 17.0001C53.8333 15.4353 52.5649 14.1667 51 14.1667Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68621 12.1154C2.83333 15.7519 2.83333 20.5124 2.83333 30.0333V37.9666C2.83333 47.4874 2.83333 52.248 4.68621 55.8843C6.31606 59.0831 8.91672 61.6838 12.1155 63.3136C15.752 65.1666 20.5124 65.1666 30.0333 65.1666H37.9667C47.4875 65.1666 52.2481 65.1666 55.8844 63.3136C59.0832 61.6838 61.6839 59.0831 63.3137 55.8843C65.1667 52.248 65.1667 47.4874 65.1667 37.9666V30.0333C65.1667 20.5124 65.1667 15.7519 63.3137 12.1154C61.6839 8.91664 59.0832 6.31598 55.8844 4.68614C52.2481 2.83325 47.4875 2.83325 37.9667 2.83325H30.0333C20.5124 2.83325 15.752 2.83325 12.1155 4.68614C8.91672 6.31598 6.31606 8.91664 4.68621 12.1154ZM37.9667 8.49992H30.0333C25.1794 8.49992 21.8797 8.50434 19.3292 8.7127C16.8448 8.91568 15.5744 9.28359 14.6881 9.73517C12.5556 10.8217 10.8218 12.5555 9.73524 14.688C9.28367 15.5743 8.91576 16.8448 8.71278 19.3291C8.50441 21.8796 8.49999 25.1793 8.49999 30.0333V37.9666C8.49999 42.8206 8.50441 46.1201 8.71278 48.6706C8.91576 51.1552 9.28367 52.4256 9.73524 53.3119C10.8218 55.4443 12.5556 57.178 14.6881 58.2646C15.5744 58.7162 16.8448 59.0843 19.3292 59.2871C21.8797 59.4954 25.1794 59.4999 30.0333 59.4999H37.9667C42.8207 59.4999 46.1201 59.4954 48.6707 59.2871C51.1553 59.0843 52.4257 58.7162 53.312 58.2646C55.4444 57.178 57.1781 55.4443 58.2647 53.3119C58.7163 52.4256 59.0843 51.1552 59.2872 48.6706C59.4955 46.1201 59.5 42.8206 59.5 37.9666V30.0333C59.5 25.1793 59.4955 21.8796 59.2872 19.3291C59.0843 16.8448 58.7163 15.5743 58.2647 14.688C57.1781 12.5555 55.4444 10.8217 53.312 9.73517C52.4257 9.28359 51.1553 8.91568 48.6707 8.7127C46.1201 8.50434 42.8207 8.49992 37.9667 8.49992Z" fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_3_81" x="0" y="0" width="68" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_81" />
                                        </filter>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
