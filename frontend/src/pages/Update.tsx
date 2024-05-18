import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Update = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    useEffect(() => {
        
        axios
          .get(`http://localhost:8800/inventory/${id}`)
          .then((response) => {
            setName(response.data[0].name);
            setQuantity(response.data[0].quantity);
            setPrice(response.data[0].price);
          })
          .catch((error) => {
            
            alert("An error happened. Please check console");
            console.log(error);
          });
      }, []);

    const handleEditItem = () => {
        const updatedItem = {
            name,
            quantity,
            price
        }
        axios
            .put(`http://localhost:8800/inventory/${id}`, updatedItem)
            .then(() => {
                navigate("/");
            }).catch((error) => {
                console.log(error);
            });
    }
  return (
      <div className="p-4">
      
      <h1 className="text-3x1 my-4">Edit Item</h1>
   
      <Form className="p-5">
      <Form.Group className="mb-3" >
        <Form.Label>Item name</Form.Label>
        <Form.Control 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Item Quantity</Form.Label>
        <Form.Control 
          type="number" 
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Item Price</Form.Label>
        <Form.Control 
          type="number" 
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
      </Form.Group>
     
      <Button variant="primary" onClick={handleEditItem}>
        Save
      </Button>
    </Form>
    </div>
    
  )
}

export default Update