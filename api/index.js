const express = require('express')
const Routes = require('./routes')

const app = express()
const port = 3006

const routes = new Routes(app)
routes.init()


app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))
