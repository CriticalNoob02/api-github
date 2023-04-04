const express = require('express')
const routes = express.Router()


// Importando dados da api;
const requestBase =  require('../dbGithub/setGithubDataBase')
const requestRepos = require('../dbGithub/setGithubDataRepos')
const requestLang = require('../dbGithub/setGithubLangRepos')

routes.get('/base/:user', async ( req,res ) => {
    let user = req.params.user
    let request = await requestBase(user)
    return res.json(request)
})

routes.get('/repos/:user', async ( req,res ) => {
    let user = req.params.user
    let request = await requestRepos(user)
    return res.json(request)
})

routes.get('/lang/:user', async ( req,res ) => {
    let user = req.params.user
    let request = await requestLang(user)
    return res.json(request)
})

module.exports = routes