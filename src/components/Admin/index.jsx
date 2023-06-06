import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
    <div className='admin'>
        <Link to={"/Admin/product"}>Product</Link>
        <Link to={"/Admin/user"}>User</Link>
    </div>
  )
}

export default Admin