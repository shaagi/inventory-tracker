

const Add = () => {

    const handleAdd = () => {
        console.log('button connected');
    }
  return (
    <div className="p-4">
      
      <h1 className="text-3x1 my-4">Add Item</h1>
   
      <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item name</label>
          <input
            type="text"
            placeholder="socks"
            // onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item quantity</label>
          <input
            type="number"
            placeholder="5"
            // onChange={(e) => setQuantity(+e.target.value)}
            min="0"
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-x1 mr-4 text-gray-500">Item Price (in dollars)</label>
          <input
            type="number"
            placeholder="15"
            min="0"
            // onChange={(e) => setPrice(+e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Add