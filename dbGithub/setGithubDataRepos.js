const axios = require('axios')

async function requestRepos(user) {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}/repos`)
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