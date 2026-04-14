const express = require("express")
const app = express()
const router = express.Router()
const port = 3000

app.use((req, res, next) => {
    console.log(`Acessou: ${req.url}`)
    next()
})
function middlewareRota(home) {
    return (req, res, next) => {
        console.log(`Middleware da rota: ${home}`)
        next()
    }
}
app.get("/", middlewareRota("index"), (req, res) => {
    res.send("index")
})

app.get("/about", middlewareRota("about"), (req, res) => {
    res.send("about")
})

app.get("/signup", (req, res) => {
    res.send("Pagina de cadastro (signup)")
})


app.get("/signin/users/:userid?", (req, res) => {
    const userid = req.params.userid

    
    if (!userid) {
        return res.redirect("/signup")
    }

    res.send(`Bem-vindo, usuario ${userid}!`)
})


app.get("/users/:id/:pwd", (req, res) => {
    const id = req.params.id
    const pwd = req.params.pwd

    res.send(`ID: ${id} | Senha: ${pwd}`)
})


app.get("/user", (req, res) => {
    res.send("rota /user")
})


app.get("*", (req, res) => {
    res.status(404).send("error")
})

app.listen(port, () => {
    console.log("Ta rodando na porta " + port)
})

module.exports = router;

