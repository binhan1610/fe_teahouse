import React from 'react'
import './Style.css'
import '../../../App.css'
import Picture1 from '../../../assets/img/picture_1.webp'
import Picture2 from '../../../assets/img/picture_2.webp'
import Picture3 from '../../../assets/img/picture_3.webp'
import Picture4 from '../../../assets/img/picture_4.webp'
import Picture5 from '../../../assets/img/picture_5.webp'

import NewTitle from '../../../assets/img/title_base.webp'
import Newimg1 from '../../../assets/img/new-1.webp'
import Newimg2 from '../../../assets/img/new-2.webp'
import Newimg3 from '../../../assets/img/new-3.webp'
import Newimg4 from '../../../assets/img/new-4.webp'
import Newimg5 from '../../../assets/img/new-5.webp'

const News = () => {
  return (
    <>
    <div className='product--content'>
    <div id="news__part" className="news">
      <div className="product--content">
        <div className="content-img">
          <img src={NewTitle} alt="" />
        </div>
        <div className="content-title">
          <h1>TIN TỨC NỔI BẬT</h1>
        </div>
        <ul className="news__box">
          <li className="box__modal">
            <div className="news-img">
              <img src={Newimg1} alt="" />
            </div>
            <div className="news-title">
              <h1>
                NHÂM NHI CÀ PHÊ BAO LÂU NHƯNG BẠN TẬN MẮT XEM KĨ HẠT CÀ PHÊ
                CHƯA?
              </h1>
            </div>
            <div className="news-content">
              <p>
                Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao
                mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc
                cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ,
                sẵn sàng chưa...
              </p>
            </div>
          </li>
          <li className="box__modal">
            <div className="news-img">
              <img src={Newimg2} alt="" />
            </div>
            <div className="news-title">
              <h1>
                UỐNG 1-4 TÁCH CÀ PHÊ MỖI NGÀY GIÚP BỆNH NHÂN UNG THƯ KÉO DÀI
                SỰ SỐNG
              </h1>
            </div>
            <div className="news-content">
              <p>
                Uống từ một đến bốn tách cà phê mỗi ngày có thể giúp bệnh nhân
                ung thư đại trực tràng giai đoạn cuối sống lâu hơn và làm chậm
                sự tiến triển của bệnh . Phát hiện này được các nhà khoa học
                rút ra từ sẵn sàng ch...
              </p>
            </div>
          </li>
          <li className="box__modal">
            <div className="news-img">
              <img src={Newimg3} alt="" />
            </div>
            <div className="news-title">
              <h1>
                DÙNG CỐC GIẤY ĐỰNG CÀ PHÊ NÓNG, THỨ BẠN UỐNG ĐẦY ẮP NHỮNG SỰ
                ĐÁNG SỢ NÀY
              </h1>
            </div>
            <div className="news-content">
              <p>
                Đối với nhiều người , một ngày mới chỉ có thể khởi đầu tốt đẹp
                bằng một tách cà phê nóng . Nhờ cafein , bộ não dường như
                không thể nhận được tín hiệu " mệt mỏi " , từ đó tạo cho con
                người ta một nguồn n ...
              </p>
            </div>
          </li>
          <li className="box__modal">
            <div className="news-img">
              <img src={Newimg4} alt="" />
            </div>
            <div className="news-title">
              <h1>UỐNG TRÀ CÓ MẤT NGỦ KHÔNG</h1>
            </div>
            <div className="news-content">
              <p>
                Uống trà có mất ngủ không ? Đây có lẽ là câu hỏi kinh điển ,
                nhất là với những người mới tập uống trà . Có những người chỉ
                nhấp một chén trà thôi cũng có thể khiến họ trằn trọc khó ngủ
                cả đêm . Nhưng ...
              </p>
            </div>
          </li>
          <li className="box__modal">
            <div className="news-img">
              <img src={Newimg5} alt="" />
            </div>
            <div className="news-title">
              <h1>
                CÀ PHÊ HAY THỂ DỤC: LỰA CHỌN NÀO GIÚP ĐÁNH BẠI CƠN BUỒN NGỦ
                TỐT HƠN
              </h1>
            </div>
            <div className="news-content">
              <p>
                Có hai trường phải để đánh bại những cơn buồn ngủ vào sáng sớm
                và đầu giờ chiều , hai thời điểm trong ngày mà bạn cần lấy lại
                sự tỉnh táo của mình nhất . Một số người sẽ chọn giải pháp
                nhanh chóng v ...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div>
    <div className="picture">
      <div className="picture__footer">
        <div className="picture-box">
          <img  src={Picture1} alt="" />
        </div>
        <div className="picture-box">
          <img src={Picture2} alt="" />
        </div>
        <div className="picture-box">
          <img src={Picture3} alt="" />
        </div>
        <div className="picture-box">
          <img src={Picture4} alt="" />
        </div>
        <div className="picture-box">
          <img src={Picture5}  alt="" />
        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default News