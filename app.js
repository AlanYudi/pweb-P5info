const express = require("express")
const app = express()

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app