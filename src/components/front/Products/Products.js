import React from 'react'
import './Style.css'
import { useState } from 'react'

import '../../../App.css'
import Logo from '../../../assets/img/title_base.webp'
import {FaShoppingCart} from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ handleAddProduct,}) => {
    
    const sanpham=JSON.parse(localStorage.getItem('product'))
   
    const HotTea = sanpham.filter(el => el.type === 'HotTea')
    const FoodTea = sanpham.filter(el => el.type === 'FoodTea')
    const Smoothies = sanpham.filter(el => el.type === 'Smoothies')
    const Cake = sanpham.filter(el => el.type === 'Cake')
    
   

    const [typeOfTea,setTypeOfTea]=useState(HotTea)
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
                    <li className='ckeck-list-item active '>
                        <div className='check-list-item-link ' onClick={()=>{
                            setTypeOfTea(HotTea)
                        }} >Trà nóng</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea(FoodTea)
                        }}>Trà hoa quả</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea(Smoothies)
                        }}>Smoothies</div>
                    </li>
                    <li className='check-list-item'>
                        <div className='check-list-item-link' onClick={()=>{
                            setTypeOfTea(Cake)
                        }}>Bánh ngọt</div>
                    </li>

                </ul>
            </div>
            <div className="list-tea">
                {typeOfTea.map((el, index) => (
                    <div key={index} className="box-tea">
                        <div className="img-tea">
                            <img src={el.image} alt="" />
                        </div>
                        <div className="tea-info">
                            <div className="info-left">
                                <div>{el.title.toUpperCase()}</div>
                                <p>Giá: <strong>{el.price}đ</strong></p>
                            </div>
                            <div className="shopping-cart-button">
                                <FaShoppingCart  onClick={() =>{ handleAddProduct(el);
                                toast.success("Added product",{position:toast.POSITION.TOP_CENTER})
                                }}/>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products