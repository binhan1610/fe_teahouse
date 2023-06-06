import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
function AdminUser() {
  const [usercorrec, setUsercorrec] = useState({});
  const [correc, setCorrec] = useState({
    username:"",
    password:""
  
  });
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState([]);
  const save = () => {
    const indexcorrec = person.findIndex((user) => user.username === usercorrec.username);
    person.splice(indexcorrec, 1, correc);
    localStorage.setItem("user", JSON.stringify(person));
    setPerson(person);
    setShow(false);
    toast.success("sửa thành công")
  };
  const handleClose = () => setShow(false);
  const handsave = (el) => {
    setUsercorrec(el);
    // setCorrec((prev) => ({ ...prev, id: el.id }));
    
    setShow(true);
    
  };
  const deleteuser = (usernamedelet) => {
    const usersdelet = person.filter((el) => el.username !== usernamedelet);
    localStorage.setItem("user", JSON.stringify(usersdelet));
    setPerson(usersdelet);
    toast.success("xóa thành công")
  };
  useEffect(() => {
    setPerson(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : []
    );
  }, []);
  return (
    <div>
      {person.length === 0 ? (
        <h1>No User</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Username</td>
              <td>Password</td>
              <td>Chức năng</td>
            </tr>
          </thead>
          <tbody>
            {person.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <Button onClick={() => deleteuser(user.username)}>
                    delete
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => handsave(user)}>
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton= {handleClose}>
          <Modal.Title>Sửa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                onChange={(el) =>
                  setCorrec({ ...correc, username: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setCorrec({ ...correc, password: el.target.value })
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
    </div>
  );
}

export default AdminUser;
