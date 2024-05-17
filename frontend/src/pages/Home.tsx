import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

interface productModel {
    productId: number,
    name: string,
    quantity: number,
    price: number
}

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

  return (
    <div>
        <h1 className="flex-auto text-lg font-semibold text-center">Clothing shop Inventory tracker</h1>
      <div className="text-center  space-y-4">
        {inventoryList.map((clothingItem) => (
          <div className=" pt-6 md:p-8 md:text-left" key={clothingItem.productId}>
           
            <h2>Item Name: {clothingItem.name}</h2>
            <p>Quantity in stock: {clothingItem.quantity} units</p>
            <p>Item price: ${clothingItem.price}</p>
            <Link to={`/edit/${clothingItem.productId}`}>
                <button className="h-10 px-6 font-semibold rounded-md border">
                    Update Item
                </button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home