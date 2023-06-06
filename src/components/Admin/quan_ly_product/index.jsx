import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
function AdminProduct() {
  const [productcorrec, setProductcorrec] = useState({});
  const [correc, setCorrec] = useState({
    image: "",
    title: "",
    type: "",
    price: "",
    id: "",
  });
  const [show, setShow] = useState(false);
  const [showadd, setShowadd] = useState(false);
  const [listproduct, setListProduct] = useState([]);
  const [product, setProduct] = useState({
    image: "",
    title: "",
    type: "",
    price: "",
    id: parseInt(Date.now()),
  });
  const save = () => {
    if (!correc.image || !correc.title||!correc.price) return toast.error("nhập đầy đủ thông tin");
    toast.success("sửa thành công")
    const indexcorrec = listproduct.findIndex(
      (el) => el.id === productcorrec.id
    );
    listproduct.splice(indexcorrec, 1, correc);
    localStorage.setItem("product", JSON.stringify(listproduct));
    setListProduct(listproduct);
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
    setShowadd(false);
  };
  const handsave = (el) => {
    setProductcorrec(el);
    // setCorrec((prev) => ({ ...prev, id: el.id }));
    setCorrec({ ...correc, id: el.id });
    setShow(true);
  };
  const add = () => {
    setShowadd(true);
  };
  const handeradd = (el) => {
    if (!product.image || !product.title||!product.price) return toast.error("nhập đầy đủ thông tin");
    toast.success("thêm thàng công")
    setProduct({ ...product, id: parseInt(Date.now()) });
    setListProduct([...listproduct, product]);
    localStorage.setItem("product", JSON.stringify([...listproduct, product]));
  };
  const handerdelete = (id) => {
    const productdelete = listproduct.filter((el) => el.id !== id);
    localStorage.setItem("product", JSON.stringify(productdelete));
    setListProduct(productdelete);
    toast.success("xóa thành công")
  };
  useEffect(() => {
    setCorrec({
      image: "",
      title: "",
      type: "",
      price: "",
      id: "",
    });
    setListProduct(
      localStorage.getItem("product")
        ? JSON.parse(localStorage.getItem("product"))
        : []
    );
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
        }}
        onClick={add}
      >
        ADD
      </Button>
      {listproduct.length > 0 ? (
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
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>
                  <img style={{width:"200px"}} src={el.image} alt=""></img>
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
                  <Button variant="primary" onClick={() => handerdelete(el.id)}>
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No Product</h1>
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
                  setCorrec({ ...correc, image: el.target.value })
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
                  setProduct({ ...product, image: el.target.value })
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
