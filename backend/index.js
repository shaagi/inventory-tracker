import express from "express";
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mwi$he$96",
    database: "product_inventory_db"
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



app.listen(8800, ()=>{
    console.log("Connected to backen1d")
})