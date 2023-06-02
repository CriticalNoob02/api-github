const { Octokit } = require("octokit")
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.TOKEN_GITHUB
})

async function requestRepos(user) {
    try {
        let response = await octokit.request("GET /users/{username}/repos", {
            username: user,
        })
        console.log(`Conectado! Status: ${response.status}.`)

        let resData = response.data
        let contador = 0
        const repos = resData.map((line) =>{ 
            const { name, html_url, language } = line
            const repositories = {
                id: contador,
                name: name,
                link: html_url,
                language: language
            }
            contador++
            return repositories
        })
        return repos
    }
    catch(err){
        console.log(err)
    }
}

module.exports = requestRepos