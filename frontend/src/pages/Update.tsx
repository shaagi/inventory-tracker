import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productModel } from "../interfaces";
import axios from "axios";


const Update = () => {
    const [inventoryList, setInventoryList] = useState<productModel[]>([]);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        
        axios
          .get(`http://localhost:8800/inventory/${id}`)
          .then((response) => {
            console.log(response.data);
            setInventoryList(response.data);
          })
          .catch((error) => {
            
            alert("An error happened. Please check console");
            console.log(error);
          });
      }, []);
  return (
    <div>
           <h1 className="flex-auto text-lg font-semibold text-center">Clothing shop Inventory tracker</h1>
      <div className="text-center  space-y-4">
        {inventoryList.map((clothingItem) => (
          <div className=" pt-6 md:p-8 md:text-left" key={clothingItem.productId}>
           
            <h2>Item Name: {clothingItem.name}</h2>
            <p>Quantity in stock: {clothingItem.quantity} units</p>
            <p>Item price: ${clothingItem.price}</p>
            {/* <Link to={`/edit/${clothingItem.productId}`}>
                <button className="h-10 px-6 font-semibold rounded-md border">
                    Update Item
                </button>
            </Link> */}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Update