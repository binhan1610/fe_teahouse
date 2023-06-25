import React from 'react'
import "./Style.css"
import { useState,useEffect } from 'react'
import Logo from '../../../assets/img/logo_white.webp'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [success,setSuccess]=useState(true)
  const [name,setName]=useState(localStorage.getItem("users"))
  const navigate=useNavigate()

  // xu ly modal dang nhap

const handerout=async()=>{
  await axios.get('http://localhost:3001/logout',{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then(response=>{
    if(response.data){
      setSuccess(false)
      localStorage.removeItem("token")
      navigate("/")
    }
  })
}



const handleScroll = () => {
  const header = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    header.classList.add("active");

  } else {
    header.classList.remove("active");
  }}
useEffect(()=>{
  const savetoken=localStorage.getItem('token')
  if(savetoken) {
    setToken(localStorage.getItem("token"))
    setName(localStorage.getItem("users"))
    setSuccess(localStorage.getItem("success"))
  }
  else {
    navigate("/")
  }
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);}
},[])
  return (
    <div className='header'>

      <div className='header-top'>
        <div className='header-number'>
          <p style={{color:"white"}}>HOTLINE : 1900 1234</p>
        </div>  
        <h2 className="anfood" style={{fontFamily:"cursive"}} onClick={()=>{
          navigate("/")
        }}>
        <img src={Logo}/>
      </h2>

        <div className='header-right'>
        <div className='header-account'>
        {success&&(<div >
          <p style={{color:"white"}}>Xin chào {name}</p>
          <p style={{color:"white"}} onClick={handerout}>Đăng xuất</p>
          
        </div>)}
          </div>
        
        

        </div>
      </div>
    </div>
  )
}

export default Header