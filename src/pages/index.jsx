import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Comidas from "../components/Comidas"
import Us from "../components/Us"
import Footer from "../components/Footer"

const index = () => {
  return (
    <div className="[background-color:#1E1E1E]  w-full h-full">
        <NavBar/>
        <Header/>
        <Comidas/>
        <Us/>
        <Footer/>

    </div>
  )
}

export default index
