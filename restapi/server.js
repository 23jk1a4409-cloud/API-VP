const express = require('express')
const app = express()
const getRoutes = require("./routes/getRoutes")
const postRoutes = require("./routes/postRoutes")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcom to the student management system")
})
app.use("/api",getRoutes)
app.use("/api",postRoutes)
app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})