import express from "express";
import mysql from "mysql2"
import cors from "cors"
import 'dotenv/config'

// Access the environment variables
const dbPass = process.env.DB_PASS;

const app = express() 


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json("hello this is the backend");
})

app.get("/inventory", (req, res) => {
    const q = "SELECT * FROM clothes";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
});

app.get("/inventory/:id", (req, res) => {
    const q = "SELECT * FROM clothes WHERE productId = ?";
    const id = req.params.id;
    db.query(q, id,(err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
});

app.post("/inventory", (req, res) => {
    const q = "INSERT INTO clothes(`name`, `quantity`, `price`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.quantity,
      req.body.price,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.put("/inventory/:id", (req, res) => {
    const id = req.params.id;
    const q = "UPDATE clothes SET `name` = ?, `quantity` = ?, `price` = ? WHERE productId = ?";
    const values = [
        req.body.name, 
        req.body.quantity, 
        req.body.price 
    ];

    db.query(q, [...values, id], (err, data) => {
        if (err) return res.json(err);
        return res.json("Item has been updated successfully");
    });
})

app.delete("/inventory/:id", (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM clothes WHERE productId = ?";

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json("Item has been deleted successfully");
    });
})


const server = app.listen(8800, ()=>{
    console.log("Connected to backen1d")
})



// export default app; // Exporting the Express app as default for deployment

// // If the script is run directly, start the server
// if (!process.env.NODE_ENV) {
//     console.log('here');
//     const server = app.listen(8800, () => {
//         console.log("Connected to backend");
//     });

//     // Optionally handle server errors
//     server.on("error", err => {
//         console.error("Server error:", err);
//     });
// }

