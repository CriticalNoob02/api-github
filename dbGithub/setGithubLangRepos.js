const { Octokit } = require("octokit")
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.TOKEN_GITHUB
})


async function requestLang(user) {
  try{
    const lang = new Object()
    let response = await octokit.request('GET /users/{username}/repos', {
      username: user,
    })
    console.log(`Conectado! Status: ${response.status}.`)

    let resData = response.data
    let langs = resData.map( line => line.languages_url )
    const langPromises = langs.map( async url => {
      let response2 = await octokit.request(url)
      let resData2 = response2.data
      return resData2
    })
    let data = await Promise.all(langPromises)
    data.forEach(obj => {
      Object.keys(obj).forEach(key => {
        if (!lang[key]) {
          lang[key] = obj[key]
        } else {
          lang[key] += obj[key]
        }
      })
    })
    console.log(lang)
    return lang
  }
  catch(err){
    console.log(err)
  }
}

module.exports = requestLang