const express = require("express")
const app = express()
const port = 3000

//endpoints

app.get("/", (req, res) =>{
    res.send("index")
})
app.get("/about", (req, res) =>{
    res.send("about")
})

app.get("/user/", (req, res) =>{
    
})

app.get("/users/:id/:pwd", (req, res) =>{
    const id = req.Params.id
    const pwd = req.Params.pwd
    res.send("/users/:id/:{pwd}")
})

app.get("/*splat", (req, res) => {
    res.statusCode(404).sebd("error")
})
app.listen(port, () => {
    console.log("Ta rodando")
})

//