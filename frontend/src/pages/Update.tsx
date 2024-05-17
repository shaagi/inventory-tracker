import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productModel } from "../interfaces";
import axios from "axios";


const Update = () => {
    // const [inventoryList, setInventoryList] = useState<productModel[]>([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const {id} = useParams();
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
  return (
    // <div></div>
    // <div>
    //        <h1 className="flex-auto text-lg font-semibold text-center">Clothing shop Inventory tracker</h1>
    //   <div className="text-center  space-y-4">
    //     {inventoryList.map((clothingItem) => (
    //       <div className=" pt-6 md:p-8 md:text-left" key={clothingItem.productId}>
           
    //         <h2>Item Name: {clothingItem.name}</h2>
    //         <p>Quantity in stock: {clothingItem.quantity} units</p>
    //         <p>Item price: ${clothingItem.price}</p>
            
            
    //       </div>
    //     ))}
    //   </div>

      <div className="p-4">
      
      <h1 className="text-3x1 my-4">Edit Item</h1>
   
      <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item quantity</label>
          <input
            type="number"
            
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {/* <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button> */}
      </div>
    </div>
    
  )
}

export default Update