import { useState } from "react"


const ModalLogin = () => {
    const [isopen, setIsopen] = useState(false)
    return (
        <div className="max-w-2xl mx-auto">
      
          {/* <!-- Modal toggle --> */}
          <button onClick={ () => setIsopen(true) } className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"  >
          Ordena Ya
          </button>
          {

            isopen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center gap-5 p-5 bg-white rounded"> 
              
              
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-end p-2">
                    <button type="button" onClick={()=> setIsopen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">El palacio del colesterol</h3>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Direccion</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ingrese su direccion: " required=""/ >
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                        <input type="password" name="password" id="password" placeholder="Ingrese su telefono:" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <button className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"  onClick={()=> setIsopen(false)}>A ordenar!!</button>
                </form>
            </div>
          </div>
        </div>

            )
                

          }
          
             
        </div>



    )
  }
  
  export default ModalLogin
  