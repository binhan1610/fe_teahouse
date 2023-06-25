import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminProduct() {
  const [productcorrec, setProductcorrec] = useState({});
  const [correc, setCorrec] = useState({
    img: "",
    title: "",
    type: "HotTea",
    price: "",
    _id:""
  });
  const [show, setShow] = useState(false);
  const [showadd, setShowadd] = useState(false);
  const [listproduct, setListProduct] = useState([]);
  const [product, setProduct] = useState({
    img: "",
    title: "",
    type: "HotTea",
    price: "",
    
  });
  const save =  async() => {
    console.log(correc);
    if (!correc.img || !correc.title||!correc.price) return toast.error("nhập đầy đủ thông tin");
    await axios.put("http://localhost:3001/product",correc,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(async response=>{
      if(response.data){
        toast.success("sửa thành công")
        setShow(false);
        setCorrec({
          img: "",
          title: "",
          type: "HotTea",
          price: "",
          _id:""
        })
        const {data}=await axios.get("http://localhost:3001/product", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setListProduct(data)
      }
    }).catch(error=>{
      console.error(error);
    })
    
  };
  const handleClose = () => {
    setShow(false);
    setShowadd(false);
  };
  const handsave = (el) => {
    setProductcorrec(el);
    // setCorrec((prev) => ({ ...prev, id: el.id }));
    setCorrec({ ...correc, _id: el._id });
    setShow(true);
  };
  const add = () => {
    setShowadd(true);
  };
  const handeradd = async (el) => {
    console.log(product);
    if (!product.img || !product.title||!product.price) return toast.error("nhập đầy đủ thông tin");
    await axios.post("http://localhost:3001/product",product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(async response=>{
      console.log(response.data);
      if(response.data){
        toast.success("Thêm thành công")
        setShowadd(false)
        setProduct({
          img: "",
          title: "",
          type: "HotTea",
          price: "",
          
        })
        const {data}=await axios.get("http://localhost:3001/product", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setListProduct(data)
      }
    })
     .catch(error=>{
      console.error(error);
     })
   
  };
  const handerdelete = async (el) => {
    console.log(el);
    await axios.post(`http://localhost:3001/product/delete`,el,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then( async response=>{
      if( response){
        toast.success("xóa thành công")
         const {data}=await axios.get("http://localhost:3001/product")
        setListProduct(data)
      }
    }).catch(error=>{
      console.error(error);
    })
  };
  useEffect(() => {
    setCorrec({
      img: "",
      title: "",
      type: "HotTea",
      price: "",
      _id:""
    });
      axios.get("http://localhost:3001/product", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(respone=>{
        setListProduct(respone.data)
      })
      .catch(error=>{
        console.error(error);
      })
  }, []);
  return (
    <div>
      <Button
        style={{
          display: "flex",
          position:"fixed",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop:"30px"
        }}
        onClick={add}
      >
        ADD
      </Button>
      <Link to={"/"} style={{textDecoration:"none",color:"green",marginRight:"30px"}}>Home</Link>
      <Link to={"/admin"} style={{textDecoration:"none",color:"green"}}>Back</Link>
      {listproduct ? (
        <table className="table" >
          <thead>
            <tr>
              <td style={{textAlign:"center"}}>Id</td>
              <td style={{textAlign:"center"}}>Image</td>
              <td style={{textAlign:"center"}}>Title</td>
              <td style={{textAlign:"center"}}>Type</td>
              <td style={{textAlign:"center"}}>Price</td>
              <td style={{textAlign:"center"}}>sửa</td>
              <td style={{textAlign:"center"}}>xóa</td>
            </tr>
          </thead>
          <tbody>
            {listproduct.map((el, index) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>
                  <img style={{width:"200px",height:"250px"}} src={el.img} alt=""></img>
                </td>
                <td>{el.title}</td>
                <td>{el.type}</td>
                <td>{el.price}</td>
                <td>
                  <Button variant="primary" onClick={() => handsave(el)}>
                    Sửa
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => handerdelete(el)}>
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 style={{paddingTop:"32px"}}>No Product</h1>
      )}
      {/* /======modal save=====/ */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                autoFocus
               
                onChange={(el) =>
                  setCorrec({ ...correc, img: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setCorrec({ ...correc, title: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                onChange={(el) =>
                  setCorrec({ ...correc, type: el.target.value })
                }
              >
                <option value="HotTea">HotTea</option>
                <option value="FoodTea">FoodTea</option>
                <option value="Smoothies">Smoothies</option>
                <option value="Cake">Cake</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setCorrec({ ...correc, price: el.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* /======modal add=====/ */}
      <Modal show={showadd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                autoFocus
                onChange={(el) =>
                  setProduct({ ...product, img: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setProduct({ ...product, title: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                onChange={(el) =>
                  (setProduct({ ...product, type: el.target.value }))
                }
              >
                <option value="HotTea">HotTea</option>
                <option value="FoodTea">FoodTea</option>
                <option value="Smoothies">Smoothies</option>
                <option value="Cake">Cake</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setProduct({ ...product, price: el.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handeradd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminProduct;
