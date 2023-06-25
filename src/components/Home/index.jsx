import React,{useState} from 'react'
import Header from '../front/Header/Header'
import Intro from '../front/Intro/Intro'
import Listshop  from '../front/Listshop/Listshop'
import Booking from '../front/Booking/Booking'
import News from '../front/News/News'
import Footer from '../front/Footer/Footer'
import Products from '../front/Products/Products'
function Home(){
  const [success,setSuccess]=useState(false)
  const [token,setToken]=useState("")
  return (
    <div  className="App">
      <Header success={success} setSuccess={setSuccess} token={token} setToken={setToken}/>
      <Intro/>
       <Listshop success={success} setSuccess={setSuccess} token={token} setToken={setToken}/>
       <Products/>
      <Booking/>
      <News/>
      <Footer />
    </div>
  )
}

export default Home
