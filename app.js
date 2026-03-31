const express = require("express")
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(`Acessou: ${req.url}`)
    next()
})
function middlewareRota(nome) {
    return (req, res, next) => {
        console.log(`Middleware da rota: ${nome}`)
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
    res.send("Página de cadastro (signup)")
})


app.get("/signin/users/:userid?", (req, res) => {
    const userid = req.params.userid

    // se não tiver userid → redireciona (item 4)
    if (!userid) {
        return res.redirect("/signup")
    }

    res.send(`Bem-vindo, usuário ${userid}!`)
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
    console.log("Tá rodando na porta " + port)
})