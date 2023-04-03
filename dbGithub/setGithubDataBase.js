const axios = require('axios')

async function requestBase(user) {
    try{
        let response = await axios.get(`https://api.github.com/users/${user}`)
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