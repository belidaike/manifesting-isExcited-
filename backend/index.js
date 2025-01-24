import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js"


const app = express()
dotenv.config()

const __dirname = path.resolve()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})








// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test"
// })

// app.use(express.json())
// app.use(cors())




// app.listen(8000, () => {
//     console.log("Server Online!")
// })


// app.get("/", (req, res) => {
//     res.send("hello this is the back end")
// })
// app.get("/update/:id", (req, res) => {
//     const q = "SELECT * FROM test WHERE id = ?"

//     db.query(q[req.params.id], (err, data) => {
//         if (err) return res.status(500).json(err)
//         return res.status(200).json(data[0])
//     })
// })

// app.get("/books", (req, res) => {
//     const q = "SELECT * FROM books"

//     db.query(q, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.post("/books", (req, res) => {
//     const q = "INSERT INTO books (`title`,`description`,`price`,`cover`) VALUES (?)"
//     const values = [
//         req.body.title,
//         req.body.description,
//         req.body.price,
//         req.body.cover,
//     ]

//     db.query(q, [values], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("Book has been created successfully!")
//     })
// })

// app.delete("/books/:id", (req, res) => {
//     const bookId = req.params.id
//     const q = "DELETE FROM books WHERE id = ?"

//     db.query(q, [bookId], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("Book deleted successfully!")
//     })
// })

// app.put("/books/:id", (req, res) => {
//     const bookId = req.params.id
//     const q = "UPDATE books SET `title` = ?,`description` = ?,`price` = ?,`cover` = ? WHERE id = ?"

//     const values = [
//         req.body.title,
//         req.body.description,
//         req.body.price,
//         req.body.cover,
//     ]

//     db.query(q, [...values, bookId], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("Book updated successfully!")
//     })
// })