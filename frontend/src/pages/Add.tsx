import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Add = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const handleAdd = () => {
        const newItem = {
            name,
            quantity,
            price
        }
        axios.post('http://localhost:8800/inventory', newItem)
            .then(() => {
                navigate("/");
            }).catch((error) => {
                console.log(error);
            });
    }
  return (
    <div className="p-4">
      
      <h1 className="text-3x1 my-4">Add Item</h1>

      <Form className="p-5">
      <Form.Group className="mb-3" >
        <Form.Label>Item name</Form.Label>
        <Form.Control 
          type="text"
          placeholder="socks"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Item Quantity</Form.Label>
        <Form.Control 
          type="number"
          placeholder="5"
          onChange={(e) => setQuantity(+e.target.value)}
          min="0"
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Item Price</Form.Label>
        <Form.Control 
          type="number"
          placeholder="15"
          min="1"
          onChange={(e) => setPrice(+e.target.value)}
        />
      </Form.Group>
     
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
    </Form>
    </div>
  )
}

export default Add