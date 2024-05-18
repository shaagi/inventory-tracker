import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { productModel } from "../interfaces";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [inventoryList, setInventoryList] = useState<productModel[]>([]);


    useEffect(() => {
        const fetchAllInventory = async () => {
            try {
                const res = await axios.get("http://localhost:8800/inventory");
                console.log(res.data);
                setInventoryList(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllInventory();
    }, [])

    const handleDelete = async (id: Number) => {
      try {
        await axios.delete("http://localhost:8800/inventory/" + id);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div>
     
      <h1 className="flex-auto text-lg font-semibold text-center">Clothing shop Inventory tracker</h1>
      <div>
        {inventoryList.map((clothingItem) => (
          <div className="ms-4 p-3" key={clothingItem.productId}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{clothingItem.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${clothingItem.price}</Card.Subtitle>
              <Card.Text>
                {clothingItem.quantity} units in stock
              </Card.Text>
    
              <Link to={`/edit/${clothingItem.productId}`}>
                  <Button variant="secondary">
                      Update Item
                  </Button>
              </Link>
              {' '}
              <Button 
                variant="danger"
                onClick={() => handleDelete(clothingItem.productId)}
              >
                Delete Item
              </Button>
            </Card.Body>
            </Card>
          </div>
        ))}
        
      </div>
      
      <div>
      
        <Link to={`/add`}>
           <button className="h-10 px-6 font-semibold rounded-md border">
              Add Item
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Home