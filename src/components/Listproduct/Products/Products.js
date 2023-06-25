import React, { useEffect } from 'react'
import './Style.css'
import { useState } from 'react'
import axios from 'axios'
import '../../../App.css'
import Logo from '../../../assets/img/title_base.webp'
import {FaShoppingCart} from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    
    const[Listproduct,setListProduct]=useState([])
   

    
   

    const [typeOfTea,setTypeOfTea]=useState("HotTea")
    useEffect( ()=>{
        const getdata= async()=>{
            const  {data}=await axios.get("http://localhost:3001/product")
              console.log(data);
              setListProduct(data)
        }
        getdata()
    },[])
    console.log(Listproduct);
    return (
        <div>
            <div className="Menu-item">
                <div className="product--content">
                    <div className="content-img">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="content-title">
                        <h1>MENU HÔM NAY</h1>
                    </div>
                </div>
                <ul className="check-list">
                    <li className='ckeck-list-item  '>
                        <div className='check-list-item-link ' onClick={()=>{
                            setTypeOfTea("HotTea")
                        }} >Trà nóng</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea("FoodTea")
                        }}>Trà hoa quả</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea("Smoothies")
                        }}>Smoothies</div>
                    </li>
                    <li className='check-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea("Cake")
                        }}>Bánh ngọt</div>
                    </li>

                </ul>
            </div>
            <div className="list-tea">
                {Listproduct&&Listproduct.filter((el)=>(el.type===typeOfTea)).map((el) => (
                    <div key={el._id} className="box-tea">
                        <div className="img-tea">
                            <img style={{width:"200px",height:"250px"}} src={el.img} alt="" />
                        </div>
                        <div className="tea-info">
                            <div className="info-left">
                                <div>{el.title.toUpperCase()}</div>
                                <p>Giá: <strong>{el.price}đ</strong></p>
                            </div>
                            <div className="shopping-cart-button">
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products