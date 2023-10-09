import './Login.css'

const Login = () => {
  return (
    <div id='Login' className='bg-gray-800'>
        <div className="[grid-area:form] w-full h-screen font-kavoon  flex flex-col justify-center items-center">
              
        <div className=' text-white w-96 '>
            <h1 className='text-2xl font-semibold text-center'>PALACIO DEL COLESTEROL</h1> 
            <p className='font-medium text-lg text-center text-gray-400 '>Por favor ingresa tus datos</p>
            <div className='mt-3'>
                <div>
                    <label htmlFor="direccion" className='text-lg font-medium'>Direccion:</label>
                    <input type="text"  id="direccion" className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1' 
                    placeholder='Ingresa tu Direccion' />
                </div>
                <div>
                    <label htmlFor="telefono" className='text-lg font-medium'>Telefono:</label>
                    <input type="text"  id="telefono" className='w-full border-2 border-gray-400 rounded-xl p-2 mt-1' 
                    placeholder='Ingresa tu Telefono' />
                </div>
                <div>
                    <div className='py-2 text-center'>
                        <input type="checkbox" name="" id="promos" />
                        <label htmlFor="promos">Acepto recibir promociones via WhatsApp</label>
                    </div>
                </div>
                <div className='mt-3 flex flex-col gap-y-4 items-center'>
                    <button className=' px-20 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transition-all [background-color:#D9D9D9] text-gray-600 text-lg font-bold py-3 rounded-xl'>A ordenar!!</button>


                    <button className=' px-5 flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transition-all bg-green-500 text-white-600 text-lg font-bold py-3 rounded-xl'>
                    <svg width="23" height="23">
                        <path d="M16.1356 13.4317C15.9146 13.3218 14.4778 12.6627 14.2568 12.5528C14.0358 12.4429 13.8147 12.4429 13.5937 12.6627C13.3727 12.8824 12.9306 13.5416 12.7096 13.7613C12.599 13.981 12.378 13.981 12.157 13.8711C11.3833 13.5416 10.6097 13.1021 9.94661 12.5528C9.39402 12.0035 8.84143 11.3443 8.39936 10.6851C8.28884 10.4654 8.39936 10.2457 8.50987 10.1358C8.62039 10.0259 8.73091 9.80622 8.95195 9.69636C9.06246 9.5865 9.17298 9.36677 9.17298 9.25691C9.2835 9.14705 9.2835 8.92732 9.17298 8.81746C9.06246 8.70759 8.50987 7.38924 8.28884 6.83993C8.17832 6.07089 7.95728 6.07089 7.73625 6.07089C7.62573 6.07089 7.4047 6.07089 7.18366 6.07089C6.96262 6.07089 6.63107 6.29062 6.52055 6.40048C5.85745 7.05965 5.52589 7.82869 5.52589 8.70759C5.63641 9.69636 5.96796 10.6851 6.63107 11.564C7.84677 13.3218 9.39402 14.75 11.2728 15.6289C11.8254 15.8487 12.2675 16.0684 12.8201 16.1783C13.3727 16.398 13.9252 16.398 14.5884 16.2881C15.362 16.1783 16.0251 15.6289 16.4672 14.9698C16.6882 14.5303 16.6882 14.0909 16.5777 13.6514C16.5777 13.6514 16.3566 13.5416 16.1356 13.4317ZM18.8986 3.43419C14.5884 -0.850458 7.62573 -0.850458 3.31554 3.43419C-0.221036 6.94979 -0.884143 12.3331 1.54725 16.6177L0 22.2207L5.85745 20.6826C7.51521 21.5615 9.2835 22.001 11.0518 22.001C17.1303 22.001 21.9931 17.167 21.9931 11.1246C22.1036 8.26814 20.8879 5.52158 18.8986 3.43419ZM15.9146 18.815C14.4778 19.6939 12.8201 20.2432 11.0518 20.2432C9.39402 20.2432 7.84677 19.8037 6.41004 19.0347L6.07848 18.815L2.65243 19.6939L3.53657 16.398L3.31554 16.0684C0.663107 11.6739 1.98932 6.18075 6.29952 3.43419C10.6097 0.68762 16.1356 2.11583 18.788 6.29062C21.4405 10.5753 20.2248 16.1783 15.9146 18.815Z" fill="currentColor"></path>
                    </svg>
                        
                        Carta WhatsApp!!

                    </button>
                </div>
            </div>

        </div>
            
          
        </div>



        <div className="[grid-area:imgLogin] bg-loginImg bg-no-repeat bg-cover bg-center opacity-60" />
    </div>
  )
}

export default Login
