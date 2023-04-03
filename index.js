// Configurando ferramentas de auxilio;
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// Configurando app;
const portApp = 21262
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }) )
app.use(express.json())
app.use(cors())
app.use(routes)



// Run do server
app.listen(portApp, () => {
    console.log(`Servidor rodando: http://localhost:${portApp}`)
})