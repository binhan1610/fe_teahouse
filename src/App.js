import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminProduct from "./components/Admin/quan_ly_product";
import AdminUser from "./components/Admin/quan_ly_user";
import Signup from "./components/Signup";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
   

  return (
    <div className="App">
      
      
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/đăng nhập" element={<Signin getname={getname}/>} /> */}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/user" element={<AdminUser />} />
          <Route path="/Admin/product" element={<AdminProduct/>} />
          <Route path="/Signup" element={<Signup/>}/>
          {/* <Route path="/đăng ký" element={<Signup   />} /> */}
        </Routes>

      
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
