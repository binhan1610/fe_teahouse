import React, { useState } from 'react'
import './Style.css'
import '../../../App.css'
import TitleBase from '../../../assets/img/title_base_2.webp'

import BodyTimePicture from '../../../assets/img/body__time-picture.webp'
import { Button, Form, FormGroup, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

const Booking = () => {
  const [show,setShow]=useState(false)
  const hander=()=>{
setShow(true)
  }
  const handerclose=()=>{
    setShow(false)
  }
  const handeraddtable=()=>{
    setShow(false)
    toast.success("đặt bàn thành công")
  }
  return (
    <div className='product--content'>
      <div className="info-time">
      <div className="time-left">
        <div className="time-content">
          <div className="time-img">
            <img src={TitleBase} alt="" />
          </div>
          <h1>THỜI GIAN MỞ CỬA</h1>
          <p>
            "Cà phê nhé" - Một lời hạn rất riêng của người việt. Một lời ngỏ
            mộc mạc để mình ngồi lại bên nhau và chia sẻ câu chuyện riêng của
            mình. Tea House hẹn gặp bạn chốn quen thuộc.
          </p>
          <div className="time-open">
            <h6>T2-T6: 8h30 - 21h30</h6>
            <h6>T7-CN: 8h00 - 22h00</h6>
          </div>
          <div className="order-btn">
            <button onClick={hander}>Đặt bàn ngay</button>
          </div>
          
        </div>
      </div>
      <div className="img-right">
        <img src={BodyTimePicture} alt="" />
      </div>
    </div>
    <Modal show={show} onHide={handerclose}>
      <Modal.Header closeButton={handerclose}>
        <Modal.Title>Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control placeholder='nhập đầy đủ họ và tên'></Form.Control>
          </FormGroup>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control placeholder='nhập số điện thoại'></Form.Control>
          </Form.Group>
          <FormGroup>
            <Form.Label>Thời gian đặt bàn</Form.Label>
            <Form.Control placeholder='nhập thời gian đặt bàn'></Form.Control>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handeraddtable}>Đặt lịch</Button>
      </Modal.Footer>
    </Modal>
    </div> 

  )
}

export default Booking