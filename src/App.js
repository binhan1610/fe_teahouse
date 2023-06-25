import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminProduct from "./components/Admin/quan_ly_product";
import AdminUser from "./components/Admin/quan_ly_user";
import Signup from "./components/Signup";
import Listproduct from "./components/Listproduct/Listproduct";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute1 from "../src/components/layout/PrivateRoute1";
import PrivateRoute from "../src/components/layout/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route element={<PrivateRoute1 />}>
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Admin/user" element={<AdminUser />} />
            <Route path="/Admin/product" element={<AdminProduct />} />

          </Route>
          <Route path="/" element={<Home />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/Listproduct" element={<Listproduct />} />

          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
