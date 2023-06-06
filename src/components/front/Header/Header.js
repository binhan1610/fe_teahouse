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
const Header = ({success,setSuccess}) => {
  
  const [show,setShow]=useState(true)
  const [displayACcount, setDisplayACcount] = useState(false)
  const [name,setName]=useState()
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
const handerout=()=>{
  setSuccess(false)
  toast.success(`xin hẹn gặp lại ${name}`)
  localStorage.removeItem("token")
}

const onSubmit = async (data)=>{
  console.log(data);
  
  
  await axios.post('https://vercel.com/binhan1610/be-nodejs/login',data,{
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})
  .then(response => {
    console.log(response.data)
      if(response.data)
      {
        localStorage.setItem('token',response.data)
        setSuccess(true)
        setShow(false)
        setName(data.username)
      }
  
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
  // const token=localStorage.getItem('token')
  // if(token) setLogIn(true)
  // else setLogIn(false)
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
        <h2 className="anfood" style={{fontFamily:"cursive"}}>
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