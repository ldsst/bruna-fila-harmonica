const express = require('express')
const Routes = require('./routes')

const app = express()
const port = process.env.DB_PORT

const routes = new Routes(app)
routes.init()

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))
