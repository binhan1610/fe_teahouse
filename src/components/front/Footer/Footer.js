import React from 'react'
import '../../../App.css'
import './Style.css'

import Logo from '../../../assets/img/logo.webp'

import {FaTwitter, FaTiktok, FaFacebook, FaYoutube ,FaInstagram} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    
      <footer>
    <ul className="footer">
      <li className="footer-box col-12">
        <img className='footer-logo' src={Logo} alt='LOGO'/>
        <p>
          Chúng tôi mong muốn Tea House sẽ trở thành “Nhà Trà", nơi mọi người
          xích lại gần nhau và tìm thấy niềm vui, sự sẻ chia thân tình bên
          những tách cà phê đượm hương, chất lượng.
        </p>
        <div className="footer-icon">
          <FaTwitter className="footer-icon-item"/>
          <FaFacebook className="footer-icon-item"/>
          <FaTiktok className="footer-icon-item"/>
          <FaInstagram className="footer-icon-item"/>
          <FaYoutube className="footer-icon-item"/>
        </div>
      </li>
      <li className="footer-box col-6">
        <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
        <div className="contact">
          <div className="contact-item">
            <div><IoLocationSharp className="footer-icon-item"/></div>
            <div>Địa chỉ: Tầng 6 toà nhà Ladeco, 266 Đội cấn, phường Liễu Giai, Hà Nội.</div>
          </div>
          <div className="contact-item">
            <div><BsFillTelephoneFill className="footer-icon-item"/></div>
            <div>Hotline đặt bàn: 1900 6750<br/>Hotline giao hàng: 1900 1001 </div>
          </div>
        </div>
      </li>
      <li className="footer-box col-6">
        <h1>ĐĂNG KÝ NHẬN KHUYẾN MÃI</h1>
        <p>Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn</p>
        <div className="footer-contact">
          <input type="text" placeholder="Email của bạn" />
          <button>Đăng ký</button>
        </div>
      </li>
    </ul>
    <div className="copyright">
      <p>&copy; Bản quyền thuộc về MD Tea | No Copyright</p>
    </div>
  </footer>
    
  
  );
  
}



export default Footer