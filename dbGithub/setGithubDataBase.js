const { Octokit } = require("octokit")
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.TOKEN_GITHUB
});

async function requestBase(user) {
    try{
        let response = await octokit.request("GET /users/{username}", {
            username: user,
        }) 
        console.log(`Conectado! Status: ${response.status}.`)

        let { login, avatar_url, name, html_url } = response.data
        const baseGithub = {
            login: login,
            avatar: avatar_url,
            name: name,
            url: html_url
        }

        return baseGithub
    } 
    catch(err){
        console.log(err)
    }
}

module.exports = requestBase