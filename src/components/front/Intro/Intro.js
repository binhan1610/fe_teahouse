import React from 'react'
import './Style.css'
import '../../../App.css'

import Slider from '../../../assets/img/slider_1.webp'
import NewTitle from '../../../assets/img/title_base.webp'
import Product1 from '../../../assets/img/product-1.webp'
import Product2 from '../../../assets/img/product-2.webp'
import Product3 from '../../../assets/img/product-3.webp'
import Product4 from '../../../assets/img/product-4.webp'

import Logo from '../../../assets/img/title_base.webp'
import IconAboutUs1 from '../../../assets/img/about-icon-1.webp'
import IconAboutUs2 from '../../../assets/img/about-icon-2.webp'
import IconAboutUs3 from '../../../assets/img/about-icon-3.webp'

const Intro = () => {
  return (
    <div>
      <div className="slider">
      <img id="slider" src={Slider} alt="" />
    </div>
    <div className="list__product">
      <div className="product--content">
        <div className="content-img">
          <img src={NewTitle} alt="" />
        </div>
        <div id="content-title" className="content-title">
          <h1>DANH MỤC SẢN PHẨM</h1>
        </div>
      </div>
      <div className="product--item">
        <ul className="wrapper-item">
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà nóng</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product2} alt="" />
            <h2>Trà hoa quả</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product3} alt="" />
            <h2>Nước ép</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product4} alt="" />
            <h2>Bánh ngọt</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà hoàng kim</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà dâu</h2>
          </li>
        </ul>
      </div>
    </div>
    <div id="introduce__part" className="AboutUs">
      <div className="About__content">
        <div className="box-content">
          <div className="about-img">
            <img src={Logo} alt="" />
          </div>
          <h1>TẠI SAO CHỌN CHÚNG TÔI</h1>
          <p>
            Với những nghệ nhân rang tâm huyết đội ngũ tài năng cùng những câu
            chuyện trà đầy cảm hứng, ngôi nhà Tea House là không gian dành
            riêng cho những ai trót yêu say đắm hương vị của những lá trà
            tuyệt hảo.
          </p>
        </div>
        <ul className="list-quantity">
          <li className="box-quantity">
            <div className="list-text">
              <div className="list-icon">
                <img src={IconAboutUs1} alt="" />
              </div>
              <div className="modal-content">
                <h4>Giá cả phải chăng</h4>
                <p>Cam kết chỉ cung cấp cà phê có nguồn gốc được kiểm soát</p>
              </div>
            </div>
          </li>
          <li className="box-quantity">
            <div className="list-text">
              <div className="list-icon">
              <img src={IconAboutUs2} alt="" />
              </div>
              <div className="modal-content">
                <h4>Hương vị tuyệt hảo</h4>
                <p>
                  Những giọt trà được lựa chọn cẩn thận ngay từ lúc đang ngâm
                  mình trong sương
                </p>
              </div>
            </div>
          </li>
          <li className="box-quantity">
            <div className="list-text">
              <div className="list-icon">
                <img src={IconAboutUs3} alt="" />
              </div>
              <div className="modal-content">
                <h4>Sản phẩm tự nhiên</h4>
                <p>
                  Cam kết chỉ cung cấp lá trà có nguồn gốc được kiểm soát chất
                  lượng
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Intro