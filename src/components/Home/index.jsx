import React,{useState} from 'react'
import Header from '../front/Header/Header'
import Intro from '../front/Intro/Intro'
import Listshop  from '../front/Listshop/Listshop'
import Booking from '../front/Booking/Booking'
import News from '../front/News/News'
import Footer from '../front/Footer/Footer'

function Home(){
  const [success,setSuccess]=useState(false)
  return (
    <div  className="App">
      <Header success={success} setSuccess={setSuccess}/>
      <Intro/>
       <Listshop success={success} setSuccess={setSuccess}/>
      <Booking/>
      <News/>
      <Footer />
    </div>
  )
}

export default Home
