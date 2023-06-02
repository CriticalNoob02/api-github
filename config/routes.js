const express = require('express')
const routes = express.Router()

// Importando dados da api;
const requestBase =  require('../dbGithub/setGithubDataBase')
const requestRepos = require('../dbGithub/setGithubDataRepos')
const requestLang = require('../dbGithub/setGithubLangRepos')
const requestDates = require('../dbGithub/setGithubDataEvents')

routes.get('/test', (req, res) => {
    return res.send( {message: "Test"} )
})

routes.get('/:user/base', async ( req,res ) => {
    let user = req.params.user
    let request = await requestBase(user)
    // teste
    if(!request) console.log("\nErro ao recuperar informação do github!")
    else console.log("\nConexão bem sucedida")
    return res.json(request)
})

routes.get('/:user/repos', async ( req,res ) => {
    let user = req.params.user
    let request = await requestRepos(user)
    // teste
    if(!request) console.log("\nErro ao recuperar informação do github!")
    else console.log("\nConexão bem sucedida")
    return res.json(request)
})

routes.get('/:user/lang', async ( req,res ) => {
    let user = req.params.user
    let request = await requestLang(user)
    // teste
    if(!request) console.log("\nErro ao recuperar informação do github!")
    else console.log("\nConexão bem sucedida")
    return res.json(request)
})

routes.get('/:user/events', async ( req,res ) => {
    let user = req.params.user
    let request = await requestDates(user)
    // teste
    if(!request) console.log("\nErro ao recuperar informação do github!")
    else console.log("\nConexão bem sucedida")
    return res.json(request)
})

module.exports = routes