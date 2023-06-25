import React from 'react'
import "./Style.css"
import { useState,useEffect } from 'react'
import Logo from '../../../assets/img/logo_white.webp'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {BsFillBasketFill} from "react-icons/bs"
const Header = ({success,setSuccess,token,setToken}) => {
  const navigate=useNavigate()
  const [show,setShow]=useState(true)
  const [displayACcount, setDisplayACcount] = useState(false)
  const [name,setName]=useState()
  const [role,setRole]=useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // xu ly modal dang nhap
  const handerclose=()=> setShow(false)
const handersignin=()=>{
  setShow(true)
  setDisplayACcount(false)

}
const handerout=async()=>{
  await axios.get('http://localhost:3001/logout',{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then(response=>{
    if(response.data){
      setSuccess(false)
      setRole(null)
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      localStorage.removeItem("users")

    }
  })
}

const onSubmit = async (data)=>{
  console.log(data);
  
  
  await axios.post('http://localhost:3001/login',data)
  .then(response => {
    console.log(response.data)
      if(response.data.token)
      { 
        setRole(response.data.user.role)
        localStorage.setItem('role',response.data.user.role)
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
        setSuccess(true)
        localStorage.setItem('success',true)
        setShow(false)
        setName(response.data.user.username)
        localStorage.setItem('users',response.data.user.username)
      }
      else{
        toast.error("Xem lại tài khoản hoặc mật khẩu")
      }
      console.log(token);
  })
  .catch(error => {
    console.error(error);
  });
}

const handleScroll = () => {
  const header = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    header.classList.add("active");

  } else {
    header.classList.remove("active");
  }}
useEffect(()=>{
  console.log(localStorage.getItem('token'));
  const savetoken=localStorage.getItem('token')
  if(savetoken) {
    setSuccess(true)
    setToken(localStorage.getItem("token"))
    setShow(false)
    setName(localStorage.getItem("users"))
    setRole(localStorage.getItem("role"))
  }
  else {
    setSuccess(false)
    setToken(null)
    setRole(null)
  }
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);}
},[])
console.log(role);
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
        {success?(<div >
          <p style={{color:"white"}}>Xin chào {name}</p>
          <p style={{color:"white"}} onClick={handerout}>Đăng xuất</p>

        </div>):(
          <p style={{color:"white"}} onClick={() => setDisplayACcount(!displayACcount)}><FaUserAlt style={{ 'padding': '0 5px 3px 0', 'fontSize': '20px' }} />Tài Khoản</p>
        )}
          </div>
          <div>

          </div>
         <div style={{display:"flex",justifyContent:"space-around"}}>
         {success&&(<Link to={"/cart"} style={{"fontSize":"30px",color:"white",marginRight:"10px"}} ><BsFillBasketFill/></Link>)}
         {role==="admin"&&<Link style={{textDecoration:"none",fontSize:"20px"}} to={"/admin"}><p style={{color:"white"}} >Admin</p></Link>}
         </div>
          {displayACcount && (
            <div className='header-sign'>
              
              <div className='header-sign-up'><Link to={"/Signup"}>Đăng ký</Link></div>
              <div className='header-sign-in' onClick={handersignin}><Link>Đăng nhập</Link></div>
            </div>
          )}
        

        </div>
      </div>


<Modal show={show} onHide={handerclose}>
<Modal.Header closeButton={handerclose}>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label >Tài Khoản</label>
            <input
              type="text"
          
              name='username'
              {...register('username', {required:true,minLength:8,maxLength:32})}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
             
            />
            {errors.username &&errors.username.type==="required" &&(
              <div className="invalid-feedback">Không được để trống tài khoản</div>
            )}
            {errors.username&&errors.username.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.username&&errors.username.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
          </div>
          <div className="form-group">
            <label >Mật Khẩu</label>
            <input
              type="password"
          
              name='password'
              {...register('password', {required:true,minLength:8,maxLength:32})}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
             
            />
            {errors.password && errors.password.type==="required"&& (
              <div className="invalid-feedback">Không được để trống mật khẩu</div>
            )}
             {errors.password&&errors.password.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.password&&errors.password.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop:"20px"}}> 
          Đăng Nhập
          </button>
        </form>

        </Modal.Body>
        <Modal.Footer>
        <Link to="/Signup" style={{"textDecoration":"none"}} ><p>Nhấp vào đây để đăng ký</p></Link>
        </Modal.Footer>

</Modal>
    </div>
  )
}

export default Header