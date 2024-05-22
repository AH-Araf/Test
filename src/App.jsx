import NavBar from "./Pages/NavBar/NavBar"
import './App.css'
import Home from "./Pages/Home/Home"
import Dish from "./Pages/Dish/Dish"
import Order from "./Pages/Order/Order"
import FeedBack from "./Pages/FeedBack/FeedBack"
import Subscribe from "./Pages/Subscribe/Subscribe"
import Footer from "./Pages/Footer/Footer"
function App() {

  return (
    <div className="main-b">
      <div className="main-body bg-white">
        <NavBar />
        <Home />
        <Dish />
        <Order />
        <FeedBack/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
